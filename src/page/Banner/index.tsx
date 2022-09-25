import Lottie from 'lottie-react'
import {Trans, useTranslation} from 'react-i18next'
import Typewriter from 'typewriter-effect'

import astronaut from '../../asset/img/astronaut-operating-laptop.json'
import {Personality} from '../../constant/Links'
import {
  Astronaut,
  Box,
  Description,
  Details,
  DownloadCV,
  DownloadIcon,
  Planet,
  Section,
  TagLine,
} from '../../styled/banner'
import {Container, Row} from '../../styled/base'

const Banner = () => {
  const {t} = useTranslation()

  return (
    <Section id='home'>
      <Container>
        <Row>
          <Description>
            <TagLine>
              <Trans i18nKey='title.welcome' />
            </TagLine>
            <Typewriter
              options={{
                strings: [t('title.fullStack'), t('title.cleanCode')],
                autoStart: true,
                loop: true,
              }}
            />
            <Details>
              <Trans
                i18nKey='content.introduction'
                components={{
                  1: (
                    <a
                      href={Personality.adventurer}
                      target='_blank'
                      rel='noopener noreferrer'
                    />
                  ),
                  2: <u />,
                }}
              />
            </Details>
            <Box>
              <DownloadCV>
                <Trans i18nKey='button.downloadCV' />
                <DownloadIcon />
              </DownloadCV>
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
