import {Trans} from 'react-i18next'

import {Modifier} from '../../constant/Enum'
import {ProjectsHref} from '../../constant/Links'
import {LinkIcon, SkillTag} from '../../styled/base'
import {
  DetailsWrap,
  IconWrap,
  InfoWrap,
  ProjectName,
  Summary,
  TagWrap,
} from '../../styled/projects'
import {aTag, tagColor} from '../../utils/helper'

interface Props {
  isVisible: boolean
  idx: number
  project: ProjectItemType
  github: string
}
const Details = ({isVisible, idx, project, github}: Props) => {
  const {summary, name, tags, spend} = project

  return (
    <DetailsWrap
      className={isVisible ? 'animate__animated animate__fadeIn' : ''}
    >
      <ProjectName>{name}</ProjectName>
      <Summary>{summary}</Summary>
      <TagWrap>
        {tags.map((ele, i) => (
          <SkillTag key={i} color={tagColor(ele)}>
            {ele}
          </SkillTag>
        ))}
      </TagWrap>
      <InfoWrap>
        <span>{spend}</span>
        <IconWrap
          className={ProjectsHref[idx] === '' ? Modifier.DEPRECATED : ''}
        >
          <Trans
            i18nKey={`projects.${idx}.website`}
            components={aTag([ProjectsHref[idx]], idx)}
          />
          {ProjectsHref[idx] === '' ? null : <LinkIcon />}
        </IconWrap>
        <IconWrap>
          <a href={github} target='_blank' rel='noopener noreferrer'>
            Github
          </a>
          <LinkIcon />
        </IconWrap>
      </InfoWrap>
    </DetailsWrap>
  )
}

export default Details
