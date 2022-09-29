import {useTranslation} from 'react-i18next'

import everFortune from '../../asset/img/everFortune.png'
import {NavbarHref} from '../../constant/Links'
import {Col, Container} from '../../styled/base'
import {Background, Section, Title} from '../../styled/experience'
import Timeline from './Timeline'

const Experience = () => {
  const {t} = useTranslation()
  const Milestones = [{
    jobTitle: t('milestone.5.jobTitle'),
    company: t('milestone.5.company'),
    interval: t('milestone.5.interval'),
    icon: everFortune,
    mainTask: t('milestone.5.mainTask'),
    tasks: t('milestone.5.tasks', {returnObjects: true}),
  },
  {
    jobTitle: t('milestone.4.jobTitle'),
    company: t('milestone.4.company'),
    interval: t('milestone.4.interval'),
    icon: everFortune,
    mainTask: t('milestone.4.mainTask'),
    tasks: t('milestone.4.tasks', {returnObjects: true}),
  },
  ]

  return <Section id={Object.keys(NavbarHref)[2]}>
    <Container>
      <Col>
        <Title>{t('nav.experience')}</Title>
        {Milestones.map((ele, i) => (
          <Timeline key={i} milestone={ele} />
        ))}
      </Col>
    </Container>
    <Background />
  </Section>
}

export default Experience
