import React, { useState } from 'react'
import { Link } from "gatsby"
import {
  Navbar, 
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarStart,
  NavbarEnd,
  Title,
  Subtitle
} from 'bloomer'

const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false)

  const toggleMenu = () => setMenuActive(!menuActive)

  return (
    <Navbar>
      <NavbarBrand>
        <NavbarItem>
          <Title isSize="5">Ben Wasilewski</Title>
        </NavbarItem>
        <NavbarItem>
          <Subtitle isSize="6">Web Application Developer</Subtitle>
        </NavbarItem>
        <NavbarItem>
        </NavbarItem>
        <NavbarBurger isActive={menuActive} onClick={toggleMenu} />
      </NavbarBrand>
      <NavbarMenu isActive={menuActive} onClick={toggleMenu}>
        <NavbarStart>
          <NavbarItem><a href="https://github.com/bwasilewski">Code Samples</a></NavbarItem>
          <NavbarItem><a href="https://www.linkedin.com/in/benwasilewski">Linked In</a></NavbarItem>
          <NavbarItem><a href="mailto:benwasilewski@gmail.com">Email</a></NavbarItem>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem><Link to="/">Home</Link></NavbarItem>
          <NavbarItem><Link to="/about">About</Link></NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>
  )
}

export default Navigation
