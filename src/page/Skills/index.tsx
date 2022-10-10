import {useTranslation} from 'react-i18next'

import {NavbarHref} from '../../constant/Links'
import {Col, Container, Title} from '../../styled/base'
import {Background, Section} from '../../styled/skills'
import Cards from './Cards'

const Skills = () => {
  const {t} = useTranslation()

  return (
    <Section id={Object.keys(NavbarHref)[1]}>
      <Container>
        <Col>
          <Title>{t('nav.skills')}</Title>
          <Cards />
        </Col>
      </Container>
      <Background />
    </Section>
  )
}

export default Skills
