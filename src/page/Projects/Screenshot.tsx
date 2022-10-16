import {Trans} from 'react-i18next'

import {ProjectsHref} from '../../constant/Links'
import {ImgWrap, Mask, TechWrap} from '../../styled/projects'

interface Props {
  isVisible: boolean
  idx: number
  project: ProjectItemType
}
const Screenshot = ({isVisible, idx, project}: Props) => {
  const {png, tech} = project
  const Img: JSX.Element = (
    <img src={require(`../../asset/img/${png}.png`)} alt='screenshot' />
  )
  const Tech = (
    <TechWrap className='tech'>
      {tech.map((ele, i) => (
        <li key={i}>{ele}</li>
      ))}
    </TechWrap>
  )

  return (
    <ImgWrap
      className={isVisible ? 'animate__animated animate__fadeIn' : ''}
    >
      {ProjectsHref[idx] === '' ? (
        <Mask>
          {Img}
          {Tech}
        </Mask>
      ) : (
        <a
          href={ProjectsHref[idx]}
          className='mask'
          target='_blank'
          rel='noopener noreferrer'
        >
          {Img}
          {Tech}
          <Trans
            i18nKey='hint.go2website'
            components={{
              1: <span className='go2website' />,
            }}
          />
        </a>
      )}
    </ImgWrap>
  )
}

export default Screenshot
