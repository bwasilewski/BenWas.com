import React from 'react'
import Navigation from './navigation'
import {
  Section
} from 'bloomer'

const Foot = () => {
  return (
    <Section>
      <p>Thanks for visiting! This site was last updated on Tuesday, April 21st, 2020.</p>
      <p><small>Copyright &copy; <script>document.write(new Date().getFullYear())</script> Ben Wasilewski</small></p>
    </Section>
  )
}

export default Foot
