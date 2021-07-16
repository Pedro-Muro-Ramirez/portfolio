import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({ toggle }) => (
  <>
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">PMR</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="Projects">Projects</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="contact">Contact</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  </>
);

export default Navbar;
