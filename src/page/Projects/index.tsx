import {useState} from 'react'
import {useTranslation} from 'react-i18next'

import {ProjectsGithub} from '../../constant/Links'
import {Col, Container, Row, Title} from '../../styled/base'
import {Background, Section} from '../../styled/projects'
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
          <Row>
            {({isVisible}) => (
              <Details
                isVisible={isVisible}
                idx={idx}
                project={ProjectItems[idx]}
                github={ProjectsGithub[idx]}
              />
            )}
          </Row>
          <Tab idx={idx} ProjectItems={ProjectItems} setIdx={setIdx} />
          <Col>
            {({isVisible}) => (
              <Screenshot
                isVisible={isVisible}
                idx={idx}
                project={ProjectItems[idx]}
              />
            )}
          </Col>
        </Col>
      </Container>
      <Background />
    </Section>
  )
}

export default Projects
