import React from 'react'
import Layout from '../components/layout'
import BreadNav from '../components/breadnav'
import PageHeader from '../components/pageheader'
import {
  Section,
  Title,
  Subtitle
} from 'bloomer'

const AboutPage = () => {
  return (
    <Layout>
      <PageHeader title="Ben Wasilewski" subtitle="About Me" />
      <Section>
        <p>Currently living in the Greater Milwaukee area of Wisconsin, where I enjoy doing many technology-free activities such as reading and gardening.</p>
      </Section>
    </Layout>
  )
}

export default AboutPage
