import {Trans} from 'react-i18next'

import {ExperienceHref} from '../../constant/Links'
import {LinkIcon, SkillTag} from '../../styled/base'
import {
  JobAndCompany,
  LinkWrap,
  MilestoneWrap,
  TagWrap,
  TaskWrap,
} from '../../styled/experience'
import {aTag, tagColor} from '../../utils/helper'

interface Props {
  idx: number
  milestone: MilestoneType
}
const Timeline = ({idx, milestone}: Props) => {
  const {
    jobTitle,
    company,
    interval,
    icon,
    mainTask,
    tasks,
    subTask,
    subTasks,
    links,
    tags,
  } = milestone

  return (
    <MilestoneWrap>
      <JobAndCompany>
        <img src={require(`../../asset/img/${icon}.png`)} alt='icon' />
        <span>{jobTitle}</span>
        <span>{company}</span>
      </JobAndCompany>
      <span className='period'>{interval}</span>
      <span className='main-task'>{mainTask}</span>
      <TaskWrap>
        {tasks.map((ele: string, i: number) => (
          <li key={i}>
            <Trans i18nKey={ele} components={{1: <strong />}} />
          </li>
        ))}
        {subTask?<span className='sub-task'>{subTask}</span>: null}
        {subTasks ? <TaskWrap>
          {subTasks.map((ele: string, i: number)=> (
            <li key={i}>
              <Trans i18nKey={ele} components={{1: <strong />}} />
            </li>
          ))}
        </TaskWrap>: null}
      </TaskWrap>
      <LinkWrap>
        {links.map((ele: any, i: number) =>
          ele !== '' ? (
            <li key={i}>
              <Trans i18nKey={ele} components={aTag(ExperienceHref[idx])} />
              <LinkIcon />
            </li>
          ) : null,
        )}
      </LinkWrap>
      <TagWrap>
        {tags.map((ele: any, i: number) =>
          ele !== '' ? (
            <SkillTag key={i} color={tagColor(ele)}>
              {ele}
            </SkillTag>
          ) : null,
        )}
      </TagWrap>
    </MilestoneWrap>
  )
}

export default Timeline
