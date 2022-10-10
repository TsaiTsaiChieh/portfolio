import {useState} from 'react'
import {useTranslation} from 'react-i18next'

import {Col, Container, Title} from '../../styled/base'
import {Section} from '../../styled/projects'
import Tab from './Tab'

const Projects = () => {
  const {t} = useTranslation()
  const ProjectItems: ProjectItemType[] = t('projects', {
    returnObjects: true,
  })
  const [active, setActive] = useState<string>(ProjectItems[0].name)

  return (
    <Section id='projects'>
      <Container>
        <Col>
          <Title>{t('nav.projects')}</Title>
          <Tab
            ProjectItems={ProjectItems}
            active={active}
            setActive={setActive}
          />
        </Col>
      </Container>
    </Section>
  )
}

export default Projects
