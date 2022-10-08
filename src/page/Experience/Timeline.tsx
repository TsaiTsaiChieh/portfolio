import {Trans} from 'react-i18next'

import {ExperienceHref} from '../../constant/Links'
import {
  JobAndCompany,
  LinkIcon,
  LinkWrap,
  MilestoneWrap,
  TaskWrap,
} from '../../styled/experience'
import {aTag} from '../../utils/helper'

interface Props {
  milestone: any
}
const Timeline = ({milestone}: Props) => {
  const {idx, jobTitle, company, interval, icon, mainTask, tasks, links} =
    milestone

  return (
    <MilestoneWrap>
      <JobAndCompany>
        <img src={icon} alt='icon' />
        <span>{jobTitle}</span>
        <span>{company}</span>
      </JobAndCompany>
      <span className='period'>{interval}</span>
      <span className='main-task'>{mainTask}</span>
      <TaskWrap>
        {tasks.map((ele: any, i: number) => (
          <li key={i}>
            <Trans i18nKey={ele} components={{1: <strong />}} />
          </li>
        ))}
      </TaskWrap>
      <LinkWrap>
        {
          links.map((ele: any, i: number) => (
            ele !== '' ?
              (<li key={i}>
                <Trans i18nKey={ele} components={aTag(ExperienceHref[idx])} />
                <LinkIcon />
              </li>
              ) : null))}
      </LinkWrap>
    </MilestoneWrap>
  )
}

export default Timeline
