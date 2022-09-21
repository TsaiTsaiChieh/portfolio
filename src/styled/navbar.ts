import styled from 'styled-components'

import logo from '../asset/img/logo.png'
import icon1 from '../asset/img/nav-icon1.svg'
import icon2 from '../asset/img/nav-icon2.svg'
import icon3 from '../asset/img/nav-icon3.svg'
import {colors} from '../constant/Variables'

export const Nav = styled.nav`
  width: 100%;
  position: fixed;
  padding: 18px 0;
  z-index: 9999;
  transition:  0.32s ease-in-out;
  margin: 10px 0;
`
export const Brand = styled.a`
  width: 10%;
`
export const Logo = styled.img`
  content: url(${logo});
  width: 150px;
`
export const Collapse = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`
export const NavContainer = styled.div`
  display: flex;
  margin-left: 50px;
  margin-right: auto;
`
export const NavLink = styled.a`
padding: 0 25px;
letter-spacing: .8px;
font-size: 18px;
opacity: 0.75;
&:hover, &.active {
  opacity: 1;
}
&::first-letter {
  text-transform: uppercase;
}
`

export const SocialContainer = styled.div`
display: flex;
    align-items: center;
    
`
export const IconContainer = styled.div`
    margin-left: 14px;
    a:before {
      content: "";
    width: 42px;
    height: 42px;
    position: absolute;
    background-color: white;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.3s ease-in-out;
    }
    a:hover:before {
      transform: scale(1);
    }
`
export const SocialLink = styled.a`
    width: 42px;
    height: 42px;
    background: rgba(217, 217, 217, 0.1);
    display: inline-flex;
    border-radius: 50%;
    margin-right: 6px;
    align-items: center;
    justify-content: center;
    line-height: 1;
    border: 1px solid ${colors.black['opacity-50']};
    &:hover {
      img {
    filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) 
    hue-rotate(346deg) brightness(95%) contrast(86%);
      }
  }
`
export const SocialIcon = styled.img`
  width: 40%;
  z-index: 1;
  transition: 0.2s ease-in-out;
  margin: auto;
  
  &.icon1 {
    content: url(${icon1});
  }
  &.icon2 {
    width: 33%;
    content: url(${icon2});
  }
  &.icon3 {
    content: url(${icon3});
  }
`
export const LangBtn = styled.button`
font-weight: bold;
color: white;
background:transparent ;
border: 1px solid white;
font-size: 18px;
margin-left: 18px;
padding: 18px 34px;
position: relative;
transition: 0.3s ease-in-out;
&:hover {
color: ${colors.black[50]};
}
&::before{
  content: "";
  width: 0%;
  height: 100%;
  background: white;
  position: absolute;
  top: 0;
  left:0 ;
  z-index: -1;
  transition: 0.3s ease-in-out;
  
}
&:hover::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
}
`
