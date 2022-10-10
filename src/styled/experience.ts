import styled from 'styled-components'

import background from '../asset/img/color-sharp1.png'
import linkIcon from '../asset/img/link.png'
import {LG} from '../constant/Mixin'
import {colors} from '../constant/Variables'

export const Section = styled.section`
  position: relative;
  background: ${colors.black[50]};
  height: auto;
  display: flex;
  z-index: 10;
  overflow: hidden;
  padding: 110px 0;
  ${LG} {
    padding: 140px 0;
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
export const Background = styled.img`
  content: url(${background});
  top: -20%;
  left: 0;
  position: absolute;
  z-index: -1;
`
export const MilestoneWrap = styled.div`
  width: 85%;
  text-align: left;
  line-height: 2.4rem;
  letter-spacing: 0.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 90px;
  padding-bottom: 60px;
  span.period {
    font-size: 18px;
  }
  border-left: 7px solid white;
`
export const JobAndCompany = styled.div`
  display: flex;
  gap: 15px;
  font-weight: bold;
  font-size: 22px;
  position: relative;
  border: none;
  img {
    position: absolute;
    left: -133px;
    width: 80px;
    height: 80px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
  }
`
export const TaskWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  list-style-type: disc;
`
export const LinkWrap = styled.ul`
  display: flex;
  gap: 30px;
  li {
    text-decoration: underline;
  }
`
export const LinkIcon = styled.img`
  content: url(${linkIcon});
  width: 15px;
  margin-left: 5px;
  margin-bottom: 5px;
`
export const TagWrap = styled.ul`
  display: flex;
  gap: 10px;
  margin-top: 15px;
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
