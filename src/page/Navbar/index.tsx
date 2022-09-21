import {useState} from 'react'

import {NavbarHref, SocialHref} from '../../constant/Links'
import {Container} from '../../styled/base'
import {
  Brand, Collapse, IconContainer, LangBtn, Logo,
  Nav, NavContainer, NavLink, SocialContainer,
  SocialIcon, SocialLink,
} from '../../styled/navbar'
import Hamburger from './Hamburger'

const Navbar = () => {
  const [expanded, setExpanded] = useState<boolean>(false)

  return (
    <Nav>
      <Container>
        <Brand href={NavbarHref.home}>
          <Logo />
        </Brand>
        <Hamburger expanded={expanded} setExpanded={setExpanded} />
        <Collapse expanded={expanded}>
          <NavContainer>
            {Object.keys(NavbarHref).slice(1).map((ele, idx) => (
              <NavLink key={idx} href={NavbarHref[ele]}>{ele}</NavLink>
            ))}
          </NavContainer>
          <SocialContainer>
            <IconContainer>
              {Object.keys(SocialHref).map((ele, idx) => (
                <SocialLink key={idx} href={SocialHref[ele]}>
                  <SocialIcon className={`icon${idx + 1}`} />
                </SocialLink>))}
            </IconContainer>
            <LangBtn>Chinese</LangBtn>
          </SocialContainer>
        </Collapse>
      </Container>
    </Nav>
  )
}

export default Navbar
