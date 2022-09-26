import {useEffect, useState} from 'react'
import {Trans, useTranslation} from 'react-i18next'

import {Modifier} from '../../constant/Enum'
import {NavbarHref, SocialHref} from '../../constant/Links'
import {Container} from '../../styled/base'
import {
  Brand,
  Collapse,
  IconContainer,
  LangBtn,
  Logo,
  Nav,
  NavContainer,
  NavLink,
  SocialContainer,
  SocialIcon,
  SocialLink,
} from '../../styled/navbar'
import Hamburger from './Hamburger'

const Navbar = () => {
  const [activeHref, setActiveHref] = useState<keyof typeof NavbarHref>(
    Object.keys(NavbarHref)[0],
  )
  const [scrolled, setScrolled] = useState<boolean>(false)
  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const {i18n} = useTranslation()
  const [expanded, setExpanded] = useState<boolean>(false)
  const navOnClick = (href: keyof typeof NavbarHref) => {
    setExpanded(false)
    setActiveHref(href)
  }
  const changeLanguage = () => {
    setExpanded(false)
    i18n.language === 'zh' ?
      i18n.changeLanguage('en') :
      i18n.changeLanguage('zh')
  }

  return (
    <Nav className={scrolled ? Modifier.SCROLL : ''}>
      <Container>
        <Brand
          href={NavbarHref.home}
          onClick={() => navOnClick(Object.keys(NavbarHref)[0])}>
          <Logo />
        </Brand>
        <Hamburger expanded={expanded} setExpanded={setExpanded} />
        <Collapse
          className={scrolled ? Modifier.SCROLL : ''}
          expanded={expanded}
        >
          <NavContainer>
            {Object.keys(NavbarHref)
              .slice(1)
              .map((ele, idx) => (
                <NavLink
                  key={idx}
                  className={
                    activeHref === ele ? Modifier.ACTIVE : Modifier.NULL
                  }
                  onClick={() => navOnClick(ele)}
                  href={NavbarHref[ele]}
                >
                  <Trans i18nKey={`nav.${ele}`} />
                </NavLink>
              ))}
          </NavContainer>
          <SocialContainer>
            <IconContainer>
              {Object.keys(SocialHref).map((ele, idx) => (
                <SocialLink
                  key={idx}
                  href={SocialHref[ele]}
                  onClick={() => setExpanded(false)}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <SocialIcon className={`icon${idx + 1}`} />
                </SocialLink>
              ))}
            </IconContainer>
            <LangBtn onClick={changeLanguage}>
              <Trans i18nKey='button.translation' />
            </LangBtn>
          </SocialContainer>
        </Collapse>
      </Container>
    </Nav>
  )
}

export default Navbar
