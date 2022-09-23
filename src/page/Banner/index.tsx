import Lottie from 'lottie-react'
import {useTranslation} from 'react-i18next'
import Typewriter from 'typewriter-effect'

import astronaut from '../../asset/img/astronaut-operating-laptop.json'
import {namespaces as ns} from '../../i18n/constants'
import {
  Astronaut, Box, Description, Details, DownloadCV, Planet, Section, TagLine,
} from '../../styled/banner'
import {Container, Row} from '../../styled/base'

const Banner = () => {
  const {t} = useTranslation()

  return (
    <Section id='home'>
      <Container>
        <Row>
          <Description>
            <TagLine>{t('welcome', {ns: ns.title})}</TagLine>
            <Typewriter
              options={{
                strings: [
                  t('fullStack', {ns: ns.title}),
                  t('cleanCode', {ns: ns.title}),
                ],
                autoStart: true,
                loop: true,
              }}
            />
            <Details>{t('introduction', {ns: ns.content})}</Details>
            <Box>
              <DownloadCV>{t('downloadCV', {ns: ns.button})}</DownloadCV>
            </Box>
          </Description>
          <Astronaut>
            <Planet />
            <Lottie className='lottie' animationData={astronaut} loop={true} />
          </Astronaut>
        </Row>
      </Container>
    </Section>
  )
}

export default Banner
