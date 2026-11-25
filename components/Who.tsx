import React, { FC } from 'react'

import { techStack } from '../shared/contants'
import {
  AvatarStyled,
  CategoryStyled,
  FactsStyled,
  InfoStyled,
  IntroRowStyled,
  LegendStyled,
  StackHeadingStyled,
  StackSubtitleStyled,
  StackStyled,
  TitleStyled,
  TechItemStyled,
  VisuallyHidden,
  WhoStyled,
} from './styled/Who.styled'

const Who: FC = () => {
  return (
    <WhoStyled id="who" aria-labelledby="who-heading">
      <IntroRowStyled>
        <AvatarStyled
          data-scroll
          data-scroll-speed="2"
          src="/images/avatar.png"
          alt="Portrait of Hung Vo"
          width={280}
          height={280}
          sizes="(min-width: 1024px) 280px, 225px"
        />
        <div>
          <TitleStyled id="who-heading" data-scroll data-scroll-speed="0.5">
            About me
          </TitleStyled>
          <FactsStyled>7+ years of experience · Da Nang, Vietnam</FactsStyled>
          <InfoStyled id="story">
            <p>
              I&apos;m a Full-Stack Developer with 7+ years of experience
              building web applications and business solutions, from the
              interface to the API and the database.
            </p>
            <p>
              My experience includes SaaS platforms, multi-tenant applications,
              business dashboards, and e-commerce solutions, including
              integrations with third-party services such as Stripe.
            </p>
            <p>
              I focus on turning business requirements into reliable,
              maintainable products through clean architecture, practical
              engineering, and attention to user experience.
            </p>
          </InfoStyled>
        </div>
      </IntroRowStyled>
      <section aria-labelledby="stack-heading">
        <StackHeadingStyled id="stack-heading">
          Technology Stack
        </StackHeadingStyled>
        <StackSubtitleStyled>
          Technologies I use to design, build and ship full-stack products.
        </StackSubtitleStyled>
        <LegendStyled>
          <span aria-hidden="true" /> Core technologies are highlighted.
        </LegendStyled>
        <StackStyled>
          {techStack.map((category) => (
            <CategoryStyled key={category.id}>
              <h4>{category.title}</h4>
              <ul>
                {category.technologies.map(({ name, Icon, color, core }) => (
                  <TechItemStyled key={name} $core={core}>
                    <Icon size={16} color={color} aria-hidden="true" />
                    {name}
                    {core && <VisuallyHidden> (core)</VisuallyHidden>}
                  </TechItemStyled>
                ))}
              </ul>
            </CategoryStyled>
          ))}
        </StackStyled>
      </section>
    </WhoStyled>
  )
}

export default Who
