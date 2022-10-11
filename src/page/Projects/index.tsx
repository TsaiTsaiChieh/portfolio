import {useState} from 'react'
import {useTranslation} from 'react-i18next'

import {Col, Container, Title} from '../../styled/base'
import {Section} from '../../styled/projects'
import SideProject from './SideProject'
import Tab from './Tab'

const Projects = () => {
  const {t} = useTranslation()
  const ProjectItems: ProjectItemType[] = t('projects', {
    returnObjects: true,
  })
  // which project
  const [idx, setIdx] = useState<number>(0)

  return (
    <Section id='projects'>
      <Container>
        <Col>
          <Title>{t('nav.projects')}</Title>
          <Tab
            ProjectItems={ProjectItems}
            idx={idx}
            setIdx={setIdx}
          />
          <SideProject project={ProjectItems[idx]} />
        </Col>
      </Container>
    </Section>
  )
}

export default Projects
