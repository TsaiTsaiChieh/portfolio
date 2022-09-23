import {useTranslation} from 'react-i18next'

import {namespaces} from '../../i18n/constants'
import {Astronaut, Description, Row, Section, TagLine}
  from '../../styled/banner'
import {Container} from '../../styled/base'

const Banner = () => {
  const {t} = useTranslation()

  return (
    <Section id='home'>
      <Container>
        <Row>
          <Description>
            <TagLine>{t('welcome', {ns: namespaces.title})}</TagLine>
          </Description>
          <Astronaut />
        </Row>
      </Container>
    </Section>
  )
}

export default Banner
