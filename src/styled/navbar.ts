import styled from 'styled-components'

import logo from '../asset/img/logo.png'
import icon1 from '../asset/img/nav-icon1.svg'
import icon2 from '../asset/img/nav-icon2.svg'
import icon3 from '../asset/img/nav-icon3.svg'
import {LG} from '../constant/Mixin'
import {colors} from '../constant/Variables'

export const Nav = styled.nav`
  width: 100%;
  position: fixed;
  padding: 24px 0;
  z-index: 9999;
  transition: 0.35s ease-in-out;
  &.scrolled {
    background: ${colors.black[50]};
    margin: 0;
    padding: 16px 0;
  }
`
export const Brand = styled.a`
  width: 150px;
  height: 36px;
  padding: 5px;
`
export const Logo = styled.img`
  content: url(${logo});
  width: 170px;
`
export const Toggle = styled.button`
  padding: 10px;
  background: transparent;
  position: absolute;
  top: -3px;
  right: 20px;
  display: block;

  div {
    width: 1.5rem;
    height: 0.125rem;
    background: white;
    margin-top: 0.25rem;
    position: relative;
  }
  ${LG} {
    display: none;
  }
`
export const Collapse = styled.div<{expanded: boolean}>`
  width: 100%;
  &.scrolled {
    background: ${(props) =>
    props.expanded ? colors.black[50] : 'transparent'};
  }
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  position: absolute;
  top: ${(props) => (props.expanded ? '50px' : '45px')};
  transition: 0.2s ease-out;
  opacity: ${(props) => (props.expanded ? 1 : 0)};
  ${LG} {
    background: transparent;
    opacity: 1;
    flex-direction: row;
    position: relative;
    top: 0;
    padding: 0;
  }
`
export const NavContainer = styled.div`
  display: flex;
  margin-right: auto;
  flex-direction: column;
  ${LG} {
    flex-direction: row;
    margin-left: 50px;
  }
`
export const NavLink = styled.a`
  padding: 3px 100px;
  letter-spacing: 0.8px;
  font-size: 18px;
  opacity: 0.75;
  &:hover,
  &.active {
    opacity: 1;
  }
  &::first-letter {
    text-transform: uppercase;
  }
  ${LG} {
    padding: 0 25px;
  }
`
export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  ${LG} {
    margin-top: 0;
  }
`
export const IconContainer = styled.div`
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
  ${LG} {
    margin-left: 14px;
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
    width: 16px;
    height: 16px;
    content: url(${icon2});
  }
  &.icon3 {
    content: url(${icon3});
  }
`
export const LangBtn = styled.button`
  font-weight: bold;
  color: white;
  background: transparent;
  border: 1px solid white;
  font-size: 18px;
  margin-left: 18px;
  width: 120px;
  height: 60px;
  letter-spacing: 3px;
  position: relative;
  transition: 0.3s ease-in-out;
  &:hover {
    color: ${colors.black[50]};
  }
  &::before {
    content: "";
    width: 0%;
    height: 100%;
    background: white;
    position: absolute;
    top: 0;
    left: 0;
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
