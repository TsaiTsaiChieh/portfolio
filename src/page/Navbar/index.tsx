import {Container} from '../../styled/base'
import {Brand, Logo, Nav} from '../../styled/navbar'

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Brand href='#home'>
          <Logo />
        </Brand>
      </Container>
    </Nav>
  )
}

export default Navbar
