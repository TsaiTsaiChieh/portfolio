import Lottie from 'lottie-react'
import {Dispatch, SetStateAction, useEffect} from 'react'

import rocket from '../asset/img/rocket-launch.json'
import {Wrap} from '../styled/launch'

interface Props {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}
const Launch = ({loading, setLoading}: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [loading])

  return (
    <Wrap $loading={loading}>
      <Lottie animationData={rocket} loop={true} />
    </Wrap>
  )
}

export default Launch
