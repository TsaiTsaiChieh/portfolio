import {Toggle} from '../../styled/navbar'

interface Props {
  expanded: boolean
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}
const Hamburger = ({expanded, setExpanded}: Props) => {
  const onClick = () => {
    setExpanded(!expanded)
  }
  return (
    <Toggle className={expanded ? 'expanded' : ''} onClick={onClick}>
      <div></div>
      <div></div>
      <div></div>
    </Toggle>
  )
}

export default Hamburger
