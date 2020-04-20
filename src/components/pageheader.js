import React from 'react'
import BreadNav from '../components/breadnav' 
import {
  Section,
  Title,
  Subtitle
} from 'bloomer'

const PageHeader = props => {
  const { title, subtitle } = props
  return (
    <Section>
      <Title isSpaced isSize="1">{ title }</Title>
      <Subtitle isSize="2">{ subtitle }</Subtitle>

      <BreadNav />
    </Section> 
  )
}

export default PageHeader
