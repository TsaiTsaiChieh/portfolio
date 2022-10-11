import {SideProjectWrap} from '../../styled/projects'

interface Props {
  project: ProjectItemType
}
const SideProject = ({project}: Props) => {
  const {png} = project
  return (
    <SideProjectWrap>
      <img src={require(`../../asset/img/${png}.png`)} alt='screenshot' />
    </SideProjectWrap>
  )
}

export default SideProject
