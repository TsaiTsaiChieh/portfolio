import {useState} from 'react'
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
  const {i18n} = useTranslation()
  const [expanded, setExpanded] = useState<boolean>(false)
  const changeLanguage = () => {
    i18n.language === 'zh' ?
      i18n.changeLanguage('en') :
      i18n.changeLanguage('zh')
  }

  return (
    <Nav>
      <Container>
        <Brand href={NavbarHref.home}>
          <Logo />
        </Brand>
        <Hamburger expanded={expanded} setExpanded={setExpanded} />
        <Collapse expanded={expanded}>
          <NavContainer>
            {Object.keys(NavbarHref)
              .slice(1)
              .map((ele, idx) => (
                <NavLink
                  key={idx}
                  className={
                    activeHref === ele ? Modifier.ACTIVE : Modifier.NULL
                  }
                  onClick={() => setActiveHref(ele)}
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
