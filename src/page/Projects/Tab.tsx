import {Dispatch, SetStateAction} from 'react'

import {Modifier} from '../../constant/Enum'
import {Btn, BtnWrap} from '../../styled/projects'

interface Props {
  ProjectItems: ProjectItemType[]
  idx: number
  setIdx: Dispatch<SetStateAction<number>>
}
const Tab = ({ProjectItems, idx, setIdx}: Props) => {
  const onClick = (ele: number) => {
    setIdx(ele)
  }

  return (
    <BtnWrap>
      {ProjectItems.map((ele, i) => (
        <Btn
          key={i}
          className={idx === i ? Modifier.ACTIVE : ''}
          onClick={() => onClick(i)}
        >
          {ele.name}
        </Btn>
      ))}
    </BtnWrap>
  )
}

export default Tab
