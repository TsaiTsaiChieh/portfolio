import {useState} from 'react'
import {useTranslation} from 'react-i18next'

import {ProjectsGithub} from '../../constant/Links'
import {Col, Container, Title} from '../../styled/base'
import {Section} from '../../styled/projects'
import Details from './Details'
import Screenshot from './Screenshot'
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
          <Details
            idx={idx}
            project={ProjectItems[idx]}
            github={ProjectsGithub[idx]}
          />
          <Tab ProjectItems={ProjectItems} idx={idx} setIdx={setIdx} />
          <Screenshot project={ProjectItems[idx]} />
        </Col>
      </Container>
    </Section>
  )
}

export default Projects
