import {Section} from '../../styled/banner'
import {Container, Row} from '../../styled/base'
import Astronaut from './Astronaut'
import Description from './Description'

const Banner = () => {
  return (
    <Section id='home'>
      <Container>
        <Row>
          {({isVisible}) => (
            <>
              <Description isVisible={isVisible} />
              <Astronaut isVisible={isVisible} />
            </>
          )}
        </Row>
      </Container>
    </Section>
  )
}

export default Banner
