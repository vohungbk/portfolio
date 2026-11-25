import { FC, useEffect, useRef } from 'react'

import { canvasImages } from '../shared/contants'
import { CanvasStyled } from './styled/Canvas.styled'

const Canvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    const images = canvasImages.map((source) => {
      const image = document.createElement('img')
      image.src = source
      return image
    })

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    const mouse = {
      x: -1000,
      y: -1000,
    }

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY + Math.abs(canvas.getBoundingClientRect().top)
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    class Particle {
      x: number
      y: number
      dx: number
      dy: number
      angle: number
      size: number
      image: HTMLImageElement

      constructor(
        x: number,
        y: number,
        dx: number,
        dy: number,
        angle: number,
        size: number,
        image: HTMLImageElement
      ) {
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.angle = angle
        this.size = size
        this.image = image
      }

      update() {
        if (this.x < this.size / 2) this.dx = -this.dx
        if (this.x > innerWidth - this.size / 2) this.dx = -this.dx
        if (this.y < this.size / 2) this.dy = -this.dy
        if (this.y > innerHeight - this.size / 2) this.dy = -this.dy

        this.x += this.dx
        this.y += this.dy
        this.angle += 0.5

        this.draw()
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle * (Math.PI / 180))

        ctx.drawImage(
          this.image,
          -this.size / 2,
          -this.size / 2,
          this.size,
          this.size
        )
        ctx.restore()
      }
    }

    let particles: Particle[] = []

    let SIZE = 30

    const setup = () => {
      // Smaller icons on small screens, slightly larger on desktop
      const expectedSize = Math.round(innerWidth / 24)
      SIZE = expectedSize < 24 ? 24 : expectedSize > 44 ? 44 : expectedSize

      particles = images.map(
        (image) =>
          new Particle(
            SIZE + Math.random() * (innerWidth - SIZE * 2),
            SIZE + Math.random() * (innerHeight - SIZE * 2),
            (Math.random() - 0.5) * 1,
            (Math.random() - 0.5) * 1,
            0,
            SIZE,
            image
          )
      )

      canvas.width = innerWidth
      canvas.height = innerHeight
    }

    let frame = 0
    let observer: IntersectionObserver | undefined
    let drawStatic: (() => void) | undefined

    const animate = () => {
      frame = requestAnimationFrame(animate)

      ctx.clearRect(0, 0, innerWidth, innerHeight)

      particles.forEach((particle) => {
        particle.update()
      })
    }

    setup()
    window.addEventListener('resize', setup)

    if (reduceMotion) {
      // Static icons: draw once after the images load, no animation
      drawStatic = () => {
        ctx.clearRect(0, 0, innerWidth, innerHeight)
        particles.forEach((particle) => particle.draw())
      }
      const redraw = drawStatic
      images.forEach((image) => image.addEventListener('load', redraw))
      window.addEventListener('resize', redraw)
      redraw()
    } else {
      // Only animate while the hero is on screen
      observer = new IntersectionObserver(([entry]) => {
        cancelAnimationFrame(frame)
        if (entry.isIntersecting) animate()
      })
      observer.observe(canvas)
    }

    return () => {
      observer?.disconnect()
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', setup)
      if (drawStatic) window.removeEventListener('resize', drawStatic)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <CanvasStyled
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.35 }}
      transition={{ duration: 0.4, delay: 1.4 }}
      ref={canvasRef}
      aria-hidden="true"
    />
  )
}

export default Canvas
