import React from 'react'
import {
  Section
} from 'bloomer'

const Foot = () => {
  const year = new Date().getFullYear()
  return (
    <Section>
      <p>Thanks for visiting! This site was last updated on Tuesday, April 21st, 2020.</p>
      <p>If you'd like to see how this website was built, you can check out the source code <a href="https://github.com/bwasilewski/benwas.com">here</a>.</p>
      <p><small>Copyright &copy; { year } Ben Wasilewski</small></p>
    </Section>
  )
}

export default Foot
