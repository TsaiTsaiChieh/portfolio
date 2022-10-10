import {useTranslation} from 'react-i18next'

import {NavbarHref} from '../../constant/Links'
import {Col, Container, Title} from '../../styled/base'
import {Background, Section} from '../../styled/experience'
import Timeline from './Timeline'

const Experience = () => {
  const {t} = useTranslation()
  const Milestones: MilestoneType[] = t('milestone', {returnObjects: true})

  return <Section id={Object.keys(NavbarHref)[2]}>
    <Container>
      <Col>
        <Title>{t('nav.experience')}</Title>
        {Milestones.map((ele, i) => (
          <Timeline key={i} milestone={ele} idx={i} />
        ))}
      </Col>
    </Container>
    <Background />
  </Section>
}

export default Experience
