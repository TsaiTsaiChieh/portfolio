import {Trans, useTranslation} from 'react-i18next'
import Typewriter from 'typewriter-effect'

import {Personality} from '../../constant/Links'
import {
  AnimatedBox, DescriptionContainer, Details, DownloadCV, DownloadIcon, TagLine,
} from '../../styled/banner'

const Description = () => {
  const {t} = useTranslation()

  return (
    <DescriptionContainer>
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
      <AnimatedBox>
        <DownloadCV>
          <Trans i18nKey='button.downloadCV' />
          <DownloadIcon />
        </DownloadCV>
      </AnimatedBox>
    </DescriptionContainer>
  )
}

export default Description
