import React, { useEffect } from 'react'
import Layout from '../components/layout'
import BreadNav from '../components/breadnav'
import PageHeader from '../components/pageheader'
import {
  Section,
  Title,
  Subtitle,
  Column,
  Columns,
} from 'bloomer'

const AboutPage = () => {
  useEffect(() => {
    const content = document.getElementById('content')
    const emphasized = content.querySelectorAll('em')
    const buzzList = document.getElementById('buzz-words')
    let items = []

    for (let em of emphasized) {
      items.push(em.innerHTML)
    }

    // remove duplicates
    items = [...new Set(items)]

    items.sort((a, b) => {
      return a > b
    })

    items.map(item => {
      let newItem = document.createElement('li')
      newItem.innerHTML = item
      buzzList.appendChild(newItem) 
    })

  }, [])

  return (
    <Layout>
      <PageHeader title="Ben Wasilewski" subtitle="About Me" />
      <Section>
        <Columns>
          <Column id="content" isSize="3/4">
            <Title isSize="4">Hello!</Title>
            <p> My name is Ben and if you haven't figured it out by now, I build web applications. I specialize in JavaScript but I'm cool with Python, too. I really enjoy working on <em>APIs</em>.</p>

            <p>Since childhood I've been fascinated by computers. I remember the release of <em>Windows 95</em>, and thought it was "so cool". By high school I was building websites for local bands and businesses.</p>

            <Title isSize="4">2005-2008</Title>
            <p>I studied Interactive Arts and Media at <em>Columbia College</em> in Chicago, Illinois from 2005 to 2008, where I received my Bachelor of Arts. Before that I spent a year at the <em>University of Illinois</em> in Champaign, but it wasn't really my style.</p>

            <p>While studying, I maintained a small number of websites for friends and family and participated in an internship with a local development and marketing company. Before graduation I lined up my first full time job at a local design agency where I worked on many different projects. It was here that I became a bit of a <em>jQuery</em> Evangelist within the company.</p>
           
            <Title isSize="4">2011</Title>
            <p>In 2011 I left my job to work as a freelancer full time. I began building more complex applications at this point, utilizing technologies like <em>Backbone</em> and <em>Underscore</em> to more efficiently organize and modularize my code.</p>
            
            <Title isSize="4">2015</Title>
            <p>During this time I eventually began contracting for a healthcare startup full time, and soon after I accepted an offer for a permanent position as a Senior Developer on the team. We used a stack that included <em>Python</em>, <em>Mongo</em>, <em>Django</em> and <em>Backbone</em>. It was here that I became familiar with the startup environment and grew from a single-language developer to a multilingual one.</p>

            <Title isSize="4">2018</Title>
            <p>In 2018 I struck out on my own once again, in search of new problems to solve. A couple <em>WordPress</em> projects, a static site here and there. Eventually I was dragged, kicking and screaming, into the <em>React</em> ecosystem via an Electron project and while the transition was painful, I must say that I've grown exponentially as a developer since learning <em>React</em>. It was at this point that I really began pursuing <em>Full Stack Development</em>, writing backends with <em>Express</em> and frontends with <em>React</em>. My interest in JavaScript expanded as I learned what was possible with <em>Node.js</em>.</p>

            <Title isSize="4">2020</Title>
            <p>Today I am still taking on contract roles remotely from my home in Southern Wisconsin. My ideal projects involve React, Node.js, and API design. Please reach out to me at <a href="mailto:benwasilewski@gmail.com">benwasilewski at gmail dot com</a> to discuss your project.</p>
          </Column>
          <Column>
            <Title isSize="4">Buzz Words</Title>
            <ul id="buzz-words"></ul>
          </Column>
        </Columns>
      </Section>
    </Layout>
  )
}

export default AboutPage
