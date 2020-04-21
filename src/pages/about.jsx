import React, { useEffect } from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import BreadNav from '../components/breadnav'
import PageHeader from '../components/pageheader'
import Footer from '../components/footer'
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
      <SEO title="About Me" />
      <PageHeader title="Ben Wasilewski" subtitle="About Me" />
      <Section>
        <Columns>
          <Column id="content" isSize="3/4">
            <Section className="remove-padding-x">
              <Title isSize="4>">Hello!</Title>
              <p>My name is Ben and if you haven't figured it out by now, I build web applications. I specialize in JavaScript but I'm cool with Python, too. I really enjoy working on <em>APIs</em>.</p>
              <p>Since childhood I've been fascinated by computers. I remember the release of <em>Windows 95</em>, and thought it was "so cool". By high school I was building websites for local bands and businesses.</p>
            </Section>

            <Section className="remove-padding-x">
              <Title isSize="4">2005-2008</Title>
              <p>I studied Interactive Arts and Media at <em>Columbia College Chicago</em> from 2005 to 2008, where I received my Bachelor of Arts. Before that I spent a year at the <em>University of Illinois</em> in Champaign, but it wasn't really my style. At Columbia I learned about many different subjects including introductory programming, graphic and user interface design, animation, 3D modeling and audio engineering.</p>
              <p>While studying, I maintained a small number of websites for friends and family and participated in an internship with a local development and marketing company. Before graduation I lined up my first full time job at a local design agency where I worked on many different projects. It was here that I became a bit of a <em>jQuery</em> Evangelist. Back in these days, I spent at least 30% of my time working with <em>Flash</em> and <em>ActionScript</em>. We used <em>SVN</em> - begrudgingly. I also became involved in the local music scene where I formed a punk band with a close friend from College, playing a number of clubs in the area.</p>
            </Section>

            <Section className="remove-padding-x">
              <Title isSize="4">2011</Title>
              <p>I have always wanted to start my own business and In 2011 I left my job to pursue that goal. I began building more complex applications at this point, utilizing technologies like <em>Backbone</em> and <em>Underscore</em> to more efficiently organize and modularize my code. I worked for a number of different clients, large and small and learned how to effectively plug into teams and produce results quickly. This was also the period in which I became proficient with <em>Git</em> for version control.</p>
              <p>In 2013 I decided to pursue another goal - living on the West Coast. Utilizing the freedom that my new business afforded me, I packed up and moved to <em>Costa Mesa, California</em>. I really began leveling up my <em>WordPress</em> skills at this point, building a number of <em>Custom Themes and Plugins</em>.</p> 
              <p>By now I had had my first taste of what it was like to build anything more complicated than a static website (ignoring all the cool stuff we used to do with <em>Flash</em> back in the day...). I was starting to really crave sharing what I'd been learning with others. I began attending the Orange County Node.js MeetUp Group where I gave a <a href="https://github.com/bwasilewski/Grunt-Presentation">presentation</a> on static website generation and optimization with <em>Grunt</em>.</p>
            </Section>

            <Section className="remove-padding-x">
              <Title isSize="4">2015</Title>
              <p>After a short time fate lured me back to Chicago where I reformed my old punk band and continued my freelance business. I eventually began contracting for a healthcare startup full time, and soon after I accepted an offer for a permanent position as a Senior Developer on the team. We used a stack that included <em>Python</em>, <em>MongoDB</em>, <em>Django</em> and <em>Backbone</em> with <em>Mercurial</em> as our method of version control. It was here that I became familiar with the startup environment and grew from a single-language developer to a multilingual one. We practiced all the good parts of <em>Scrum</em> like daily standups, regular sprints and retrospectives.</p>
            </Section>

            <Section className="remove-padding-x">
              <Title isSize="4">2018</Title>
              <p>In 2018 I struck out on my own once again, in search of new problems to solve. A couple <em>WordPress</em> projects, a static site here and there. Eventually I was dragged, kicking and screaming, into the <em>React</em> ecosystem via an Electron project and while the transition was painful, I must say that I've grown exponentially as a developer since learning <em>React</em>. It was at this point that I really began pursuing <em>Full Stack Development</em>, writing backends with <em>Express</em> and frontends with <em>React</em>. My interest in JavaScript expanded as I learned what was possible with <em>Node.js</em>.</p>
            </Section>

            <Section className="remove-padding-x">
              <Title isSize="4">2020</Title>
              <p>Today I am still taking on contract roles remotely from my home in Southern Wisconsin. My ideal projects involve React, Node.js, and API design. Please reach out to me at <a href="mailto:benwasilewski@gmail.com">benwasilewski at gmail dot com</a> to discuss your project.</p>
            </Section>
          </Column>
          <Column>
            <Section>
              <Title isSize="4">Buzz Words</Title>
              <ul id="buzz-words"></ul>
            </Section>
          </Column>
        </Columns>
      </Section>
      <Footer />
    </Layout>
  )
}

export default AboutPage
