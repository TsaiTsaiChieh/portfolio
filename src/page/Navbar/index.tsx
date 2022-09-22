import {useState} from 'react'

import {NavbarHref, SocialHref} from '../../constant/Links'
import {Container} from '../../styled/base'
import {
  Brand, Collapse, IconContainer, LangBtn, Logo, Nav, NavContainer, NavLink,
  SocialContainer, SocialIcon, SocialLink,
} from '../../styled/navbar'
import Hamburger from './Hamburger'
import {useTranslation} from 'react-i18next'
import {namespaces} from '../../i18n/constants'
const Navbar = () => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const {t, i18n} = useTranslation(namespaces.pages.hello)

  const changeLanguage = (language: string) => () => {
    console.log(language)
    i18n.changeLanguage(language)
  }
  return (
    <Nav>
      <h1>{t('welcome')}</h1>
      <button>{t('buttons.ok', {ns: namespaces.common})}</button>
      <button onClick={changeLanguage('en')}>English</button>
      <button onClick={changeLanguage('es')}>Español</button>
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
                <SocialLink key={idx} href={SocialHref[ele]} target='_blank'>
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
