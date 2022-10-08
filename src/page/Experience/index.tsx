import {useTranslation} from 'react-i18next'

import appWorks from '../../asset/img/appWorks.png'
import everFortune from '../../asset/img/everFortune.png'
import fcu from '../../asset/img/fcu.png'
import getsInfo from '../../asset/img/getsInfo.jpg'
import nctu from '../../asset/img/nctu.png'
import wanin from '../../asset/img/wanin.jpg'
import {NavbarHref} from '../../constant/Links'
import {Col, Container} from '../../styled/base'
import {Background, Section, Title} from '../../styled/experience'
import Timeline from './Timeline'

const Experience = () => {
  const {t} = useTranslation()
  const Milestones = [
    {
      jobTitle: t('milestone.7.jobTitle'),
      company: t('milestone.7.company'),
      interval: t('milestone.7.interval'),
      icon: everFortune,
      mainTask: t('milestone.7.mainTask'),
      tasks: t('milestone.7.tasks', {returnObjects: true}),
    },
    {
      jobTitle: t('milestone.6.jobTitle'),
      company: t('milestone.6.company'),
      interval: t('milestone.6.interval'),
      icon: getsInfo,
      mainTask: t('milestone.6.mainTask'),
      tasks: t('milestone.6.tasks', {returnObjects: true}),
    },
    {
      jobTitle: t('milestone.5.jobTitle'),
      company: t('milestone.5.company'),
      interval: t('milestone.5.interval'),
      icon: appWorks,
      mainTask: t('milestone.5.mainTask'),
      tasks: t('milestone.5.tasks', {returnObjects: true}),
    },
    {
      jobTitle: t('milestone.4.jobTitle'),
      company: t('milestone.4.company'),
      interval: t('milestone.4.interval'),
      icon: nctu,
      mainTask: t('milestone.4.mainTask'),
      tasks: t('milestone.4.tasks', {returnObjects: true}),
    },
    {
      jobTitle: t('milestone.3.jobTitle'),
      company: t('milestone.3.company'),
      interval: t('milestone.3.interval'),
      icon: everFortune,
      mainTask: t('milestone.3.mainTask'),
      tasks: t('milestone.3.tasks', {returnObjects: true}),
    },
    {
      jobTitle: t('milestone.2.jobTitle'),
      company: t('milestone.2.company'),
      interval: t('milestone.2.interval'),
      icon: nctu,
      mainTask: t('milestone.2.mainTask'),
      tasks: t('milestone.2.tasks', {returnObjects: true}),
    },
    {
      jobTitle: t('milestone.1.jobTitle'),
      company: t('milestone.1.company'),
      interval: t('milestone.1.interval'),
      icon: wanin,
      mainTask: t('milestone.1.mainTask'),
      tasks: t('milestone.1.tasks', {returnObjects: true}),
    },
    {
      jobTitle: t('milestone.0.jobTitle'),
      company: t('milestone.0.company'),
      interval: t('milestone.0.interval'),
      icon: fcu,
      mainTask: t('milestone.0.mainTask'),
      tasks: t('milestone.0.tasks', {returnObjects: true}),
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
