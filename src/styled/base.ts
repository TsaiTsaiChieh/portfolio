import styled from 'styled-components'

import {LG, MD, SM, XL, XXL} from '../constant/Mixin'
import {colors} from '../constant/Variables'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  justify-content: flex-start;
  flex-wrap: inherit;
  position: relative;
  padding: 0 25px;
  ${SM} {
    max-width: 540px;
  }
  ${MD} {
    max-width: 720px;
    padding: 0;
  }
  ${LG} {
    max-width: 960px;
  }
  ${XL} {
    max-width: 1140px;
  }
  ${XXL} {
    max-width: 1320px;
  }
`
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  ${LG} {
    flex-direction: row;
  }
`
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const AnimationBox = styled.div<{width: number; height: number}>`
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: ${colors.black[55]};
  border-radius: 8px;
  overflow: hidden;
  margin: auto;
  &::before, &::after {
    border-radius:10px;
    content: "";
    z-index: 1;
    position: absolute;
    top: -50%;
    left: -50%;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    transform-origin: bottom right;
    background: linear-gradient(0deg,transparent,#38AFA2,#38AFA2);
    animation: animate 5s linear infinite;
  } 
  &::after {
    animation-delay: -2.5s;
  }
  ${LG} {
    margin: 0;
  }
`
