import {Trans, useTranslation} from 'react-i18next'
import {DiMysql, DiReact} from 'react-icons/di'
import {FaAmazon} from 'react-icons/fa'
import {GiSpiderWeb} from 'react-icons/gi'
import {
  SiAngular,
  SiDocker,
 SiNodedotjs,
 SiPython,
  SiRedux,
  SiTsnode,
 SiVercel,
} from 'react-icons/si'

import {ReactComponent as AzureDevOpsIcon} from
'../../asset/img/azure-devops.svg'
import {SkillType} from '../../constant/Enum'
import {SkillHref} from '../../constant/Links'
import {Skills} from '../../constant/Skill'
import {
  AnimatedBox,
  CardBody,
  CardBottom,
  CardContainer,
  CardDetails,
  CardLabel,
  SkillGroup,
  SkillItem,
} from '../../styled/skills'
import {aTag} from '../../utils/helper'

const Cards = () => {
  const {t, i18n} = useTranslation()
  const SkillTree: SkillTreeType[] = [
    {
      name: SkillType.BACKEND,
      learnings: Skills.backend,
      icons: [
        <SiNodedotjs key={1} />,
        <SiPython key={2} />,
        <DiMysql key={3} />,
        <GiSpiderWeb key={4} />,
      ],
      details: (
        <Trans
          i18nKey='content.backendDetails'
          components={aTag(SkillHref.backend)}
        />
      ),
    },
    {
      name: SkillType.FRONTEND,
      learnings: Skills.frontend,
      icons: [
        <DiReact key={1} />,
        <SiRedux key={2} />,
        <SiAngular key={4} />,
        <SiTsnode key={3} />,
      ],
      details: (
        <Trans
          i18nKey='content.frontendDetails'
          components={aTag(SkillHref.frontend)}
        />
      ),
    },
    {
      name: SkillType.DEVOPS,
      learnings: Skills.devOps,
      icons: [
        <AzureDevOpsIcon key={1} />,
        <SiDocker key={2} />,
        <FaAmazon key={3} />,
       <SiVercel key={4} />,
      ],
      details: (
        <Trans
          i18nKey='content.devOpsDetails'
          components={aTag(SkillHref.devOps)}
        />
      ),
    },
  ]

  return (
    <CardContainer>
      {SkillTree.map((ele) => (
        <AnimatedBox key={ele.name}>
          <CardBody $language={i18n.language}>
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
              <CardDetails>{ele.details}</CardDetails>
            </CardBottom>
          </CardBody>
        </AnimatedBox>
      ))}
    </CardContainer>
  )
}

export default Cards
