import styled from 'styled-components'

import background from '../asset/img/footer-bg.png'
import {LG, MD, XL, XXL} from '../constant/Mixin'
import {colors} from '../constant/Variables'
import {IconContainer as iconContainer} from './navbar'

export const Section = styled.section`
  background: ${colors.black[50]};
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 15% 0 25%;
  ${MD} {
    background-position: center center;
    padding: 10% 0 12%;
  }
  ${LG} {
    padding: 8% 0 10%;
  }
  ${XL} {
    padding: 5% 0 8%;
  }
  ${XXL} {
    padding: 3% 0 5%;
  }
`
export const IconContainer = styled(iconContainer)`
position: relative;
span {
  width: 200%;
  position: absolute;
  left: -85%;
  color: ${colors.black[100]};
  &.copyright {
    top: 70px;
  }
  &.email {
    top: 95px;
  }
}
`
