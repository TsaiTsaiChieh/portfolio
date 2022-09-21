import {NavbarHref, SocialHref} from '../../constant/Links'
import {Container} from '../../styled/base'
import {
  Brand, Collapse, IconContainer, LangBtn, Logo, Nav, NavContainer, NavLink,
  SocialContainer, SocialIcon, SocialLink,
} from '../../styled/navbar'

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Brand href={NavbarHref.home}>
          <Logo />
        </Brand>
        <Collapse>
          <NavContainer>
            {Object.keys(NavbarHref).slice(1).map((ele, idx) => {
              return <NavLink key={idx} href={NavbarHref[ele]}>{ele}</NavLink>
            })}
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
