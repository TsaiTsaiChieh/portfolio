import {SocialHref} from '../../constant/Links'
import {Container} from '../../styled/base'
import {IconContainer, Section} from '../../styled/footer'
import {
  Logo,
  SocialIcon,
  SocialLink,
} from '../../styled/navbar'

const Footer = () => {
  return (
    <Section id='footer'>
      <Container>
        <Logo />
        <IconContainer>
          {Object.keys(SocialHref).map((ele, i) => (
            <SocialLink key={i} href={SocialHref[ele]}>
              <SocialIcon className={`icon${i + 1}`} />
            </SocialLink>
          ))}
          <span className='copyright'>CopyRight 2025. All Right Reserved</span>
          <span className='email'>jecica196@gmail.com</span>
        </IconContainer>
      </Container>
    </Section>
  )
}

export default Footer
