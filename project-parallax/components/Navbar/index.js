import React from 'react';
import { Nav, NavLink, Bars, NavMenuLeft, NavMenuRight, NavBtn, NavBtnLink } from './NavbarElements';
import logo from '../../image/avalar-icon.png';
import TwitterLogo from '../../image/twitter.svg';
import DiscordLogo from '../../image/discord.svg';

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to='#'>
                <img src={logo} className='home-logo'></img>
            </NavLink>
            <Bars />
            <NavMenuLeft>
                <NavLink to='#' activeStyle>About</NavLink>
                <NavLink to='#' activeStyle>Collection</NavLink>
                <NavLink to='#' activeStyle>Team</NavLink>
            </NavMenuLeft>
            <NavMenuRight>
                <img className="social-discord social-icons" src={DiscordLogo} alt="Discord Logo" />    
                <img className="social-twitter social-icons" src={TwitterLogo} alt="Twitter Logo" />
            </NavMenuRight>
            {/* <NavBtn>
                <NavBtnLink to = "/app">Open App</NavBtnLink>
            </NavBtn> */}
        </Nav>
    </>
  )
}

export default Navbar