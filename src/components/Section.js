import React, { Children } from "react"
import { Title } from "./Title"
import { ContentWrapper } from "./contentWrapper"

export const Section = ({ title, charts }) => (
  <ContentWrapper>
    <Title>{title}</Title>
    {Children.toArray(charts)}
  </ContentWrapper>
)
