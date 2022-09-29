import {Trans} from 'react-i18next'

import {JobAndCompany, MilestoneWrap, TaskWrap} from '../../styled/experience'

interface Props {
  milestone: any;
}
const Timeline = ({milestone}: Props) => {
  const {jobTitle, company, interval, icon, mainTask, tasks} = milestone

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
    </MilestoneWrap>
  )
}

export default Timeline
