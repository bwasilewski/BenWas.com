import React from 'react'
import Navigation from './navigation'
import {
  Footer,
  Content
} from 'bloomer'

const Foot = () => {
  return (
    <Footer>
      <Content>
        <p>Thank you for visiting my site. Don't forget to shoot me a message at <a href="mailto:benwasilewski@gmail.com">benwasilewski at gmail dot com</a></p>
        <p>This site was last updated on Sunday, April 19th 2020.</p>
      </Content>
    </Footer>  
  )
}

export default Foot
