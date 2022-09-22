import {useState} from 'react'
import {useTranslation} from 'react-i18next'

import {NavbarHref, SocialHref} from '../../constant/Links'
import {namespaces} from '../../i18n/constants'
import {Container} from '../../styled/base'
import {
  Brand, Collapse, IconContainer, LangBtn, Logo, Nav, NavContainer,
  NavLink, SocialContainer, SocialIcon, SocialLink,
} from '../../styled/navbar'
import Hamburger from './Hamburger'

const Navbar = () => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const {t, i18n} = useTranslation()
  const changeLanguage = () => {
    i18n.language === 'zh' ?
      i18n.changeLanguage('en') : i18n.changeLanguage('zh')
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
            {Object.keys(NavbarHref).slice(1).map((ele, idx) => (
              <NavLink key={idx}
                href={NavbarHref[ele]}>{t(ele, {ns: namespaces.nav})}</NavLink>
            ))}
          </NavContainer>
          <SocialContainer>
            <IconContainer>
              {Object.keys(SocialHref).map((ele, idx) => (
                <SocialLink key={idx} href={SocialHref[ele]} target='_blank'>
                  <SocialIcon className={`icon${idx + 1}`} />
                </SocialLink>))}
            </IconContainer>
            <LangBtn onClick={changeLanguage}>
              {t('translation', {ns: namespaces.button})}</LangBtn>
          </SocialContainer>
        </Collapse>
      </Container>
    </Nav>
  )
}

export default Navbar
