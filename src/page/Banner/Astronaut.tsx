import Lottie from 'lottie-react'

import astronaut from '../../asset/img/astronaut-operating-laptop.json'
import {AstronautContainer, Planet} from '../../styled/banner'

interface Props {
  isVisible: boolean
}
const Astronaut = ({isVisible}: Props) => {
  return (
    <AstronautContainer className={
      isVisible ? 'animate__animated animate__zoomIn' : ''
    }>
      <Planet />
      <Lottie className='lottie' animationData={astronaut} loop={true} />
    </AstronautContainer>
  )
}

export default Astronaut
