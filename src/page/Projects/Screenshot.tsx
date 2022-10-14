import {ImgWrap} from '../../styled/projects'

interface Props {
  project: ProjectItemType
}
const Screenshot = ({project}: Props) => {
  const {png} = project

  return (
    <ImgWrap>
      <img src={require(`../../asset/img/${png}.png`)} alt='screenshot' />
    </ImgWrap>
  )
}

export default Screenshot
