import React from 'react'
import {
  Section
} from 'bloomer'

const Foot = ({ updated }) => {
  const year = new Date().getFullYear()
  return (
    <Section>
      <p><small>Thanks for visiting! This site was last updated on {updated}.<br />
      If you'd like to see how this website was built, you can check out the source code <a href="https://github.com/bwasilewski/benwas.com">here</a>.</small></p>
      <p><small>Copyright &copy; { year } Ben Wasilewski</small></p>
    </Section>
  )
}

export default Foot
