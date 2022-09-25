import {useTranslation} from 'react-i18next'
import {DiGoogleCloudPlatform, DiMysql, DiReact} from 'react-icons/di'
import {GiSpiderWeb} from 'react-icons/gi'
import {IoLogoHtml5} from 'react-icons/io'
import {
  SiAmazonaws,
  SiDocker,
  SiNodedotjs,
  SiPm2,
  SiPython,
  SiRedux,
  SiTsnode,
} from 'react-icons/si'

import {AnimationBox} from '../../styled/base'
import {
  CardBody,
  CardBottom,
  CardContainer,
  CardDetails,
  CardLabel,
  SkillGroup,
  SkillItem,
} from '../../styled/skills'

const Cards = () => {
  const {t} = useTranslation()
  const SkillTree: SkillTreeType[] = [
    {
      name: 'backend',
      learnings: ['NodeJS', 'Python', 'MySQL', 'Web Crawler'],
      icons: [
        <SiNodedotjs key={1} />,
        <SiPython key={2} />,
        <DiMysql key={3} />,
        <GiSpiderWeb key={4} />,
      ],
    },
    {
      name: 'frontend',
      learnings: ['React', 'Redux Toolkit', 'Typescript', 'HTML/CSS'],
      icons: [
        <DiReact key={1} />,
        <SiRedux key={2} />,
        <SiTsnode key={3} />,
        <IoLogoHtml5 key={4} />,
      ],
    },
    {
      name: 'devOps',
      learnings: ['AWS', 'GCP', 'Docker', 'PM2'],
      icons: [
        <SiAmazonaws key={1} />,
        <DiGoogleCloudPlatform key={2} />,
        <SiDocker key={3} />,
        <SiPm2 key={4} />,
      ],
    },
  ]

  return (
    <CardContainer>
      {SkillTree.map((ele) => (
        <AnimationBox key={ele.name} width={350} height={552}>
          <CardBody>
            <SkillGroup>
              {ele.icons.map((icon, idx) => (
                <SkillItem key={idx} className={ele.name}>
                  {icon}
                  <span>{ele.learnings[idx]}</span>
                </SkillItem>
              ))}
            </SkillGroup>
            <CardBottom className={ele.name}>
              <CardLabel>{t(`title.${ele.name}`)}</CardLabel>
              <CardDetails>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                voluptas labore, cum quaerat debitis quae sint ipsum
              </CardDetails>
            </CardBottom>
          </CardBody>
        </AnimationBox>
      ))}
    </CardContainer>
  )
}

export default Cards
