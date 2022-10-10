import {Dispatch, SetStateAction} from 'react'

import {Modifier} from '../../constant/Enum'
import {Btn, BtnWrap} from '../../styled/projects'

interface Props {
  ProjectItems: ProjectItemType[]
  active: string
  setActive: Dispatch<SetStateAction<string>>
}
const Tab = ({ProjectItems, active, setActive}: Props) => {
  const onClick = (ele: string) => {
    setActive(ele)
  }

  return (
    <BtnWrap>
      {ProjectItems.map((ele, i) => (
        <Btn
          key={i}
          className={active === ele.name ? Modifier.ACTIVE : ''}
          onClick={() => onClick(ele.name)}
        >
          {ele.name}
        </Btn>
      ))}
    </BtnWrap>
  )
}

export default Tab
