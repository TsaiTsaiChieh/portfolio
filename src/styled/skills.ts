import styled from 'styled-components'

import background from '../asset/img/color-sharp2.png'
import {Language} from '../constant/Enum'
import {LG, MD, XL, XXL} from '../constant/Mixin'
import {colors} from '../constant/Variables'
import {AnimationBox} from './base'

export const Section = styled.section`
  height: 100%;
  background: ${colors.black[50]};
  display: flex;
  position: relative;
  overflow: hidden;
  padding: 105px 0;
  z-index:10;
  ${MD} {
    height: 100vh;
  }
  ${LG} {
    padding: 130px 0;
  }
`
export const Title = styled.h2`
  width: 100%;
  font-size: 45px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 40px;
  &::first-letter {
    text-transform: uppercase;
  }
`
export const CardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: space-evenly;
  z-index: 2;
  ${LG} {
    flex-direction: row;
  }
`
export const AnimatedBox = styled(AnimationBox)`
  &,
  &::after,
  &::before {
    width: 100%;
    height: 100%;
  }
`
export const CardBody = styled.li<{$language: string}>`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 10px;
  inset: 2px;
  align-items: center;
  background: ${colors.black[60]};
  z-index: 10;
  overflow: hidden;
  ${LG} {
    height: ${(props) => props.$language === Language.ZH ? '674px' : '730px'};
  }
  ${XL} {
    height: ${(props) => props.$language === Language.ZH ? '629px' : '696px'};
  }
  ${XXL} {
    height: ${(props) => props.$language === Language.ZH ? '606px' : '650px'};
  }

`
export const SkillGroup = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
`
export const SkillItem = styled.li`
  display: flex;
  align-items: center;
  svg {
    color: black;
    padding: 15px;
    font-size: 60px;
    border-radius: 40%;
    background: white;
  }
  span {
    font-size: 18px;
    margin-left: 15px;
    letter-spacing: 1px;
    font-weight: bold;
  }
  ${LG} {
    svg {
      font-size: 80px;
    }
  }
`
export const CardBottom = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 0 0 10px 10px;
  &.backend {
    background: ${colors.primary['opacity-200']};
  }
  &.frontend {
    background: ${colors.primary['opacity-300']};
  }
  &.devOps {
    background: ${colors.primary['opacity-400']};
  }
`
export const CardLabel = styled.label`
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 10px;
  ${LG} {
    font-size: 24px;
  }
`
export const CardDetails = styled.p`
  line-height: 1.4rem;
  color: ${colors.black[100]};
  letter-spacing: .5px;
  a {
    font-weight: bold;
  }
`
export const Background = styled.img`
  content: url(${background});
  top: -20%;
  left: 0;
  position: absolute;
  z-index: -1;
`
