import TrackVisibility from 'react-on-screen'
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
  padding: 0 5%;
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
export const Row = styled(TrackVisibility)`
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
export const AnimationBox = styled.div`
  position: relative;
  background: ${colors.black[55]};
  border-radius: 8px;
  overflow: hidden;
  margin: auto;
  &::before,
  &::after {
    border-radius: 10px;
    content: "";
    z-index: 1;
    position: absolute;
    top: -50%;
    left: -50%;
    transform-origin: bottom right;
    background: linear-gradient(
      0deg,
      transparent,
      ${colors.primary[200]},
      ${colors.primary[200]}
    );
    animation: animate 5s linear infinite;
  }
  &::after {
    animation-delay: -2.5s;
  }
  ${LG} {
    margin: 0;
  }
`
export const SkillTag = styled.li<{color: string}>`
background: ${(props) => props.color};
  font-style: italic;
  font-size: 12px;
  padding: 0px 5px;
  border-radius: 10px;
  &::before {
    content: "#";
  }
`
