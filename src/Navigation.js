import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import profile from './profile.png';
import heart from './heart.png';
import search from './search.png';

export const Navigation = (props) => {

    return (
      <div>
        <Navbar>
          <NavbarBrand href="/">HUNGRY NOW</NavbarBrand>
          <Nav>
          <NavItem>
          <NavLink> {props.time} </NavLink>
          </NavItem>
            <NavItem>
              <NavLink href="/#about">ABOUT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#contact_us">CONTACT</NavLink>
            </NavItem>
            <NavItem>

              <NavLink href="/profile"><img src={profile} alt="profile" width="40" height="40"/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile#favorites"><img src={heart} alt="heart" width="40" height="40"/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/search" className="navitem"><img src={search} alt="search" width="40" height="40"/> </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }

export default Navigation;
