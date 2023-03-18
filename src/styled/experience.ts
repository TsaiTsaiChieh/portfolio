import styled from 'styled-components'

import background from '../asset/img/color-sharp1.png'
import {LG, MD} from '../constant/Mixin'
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
  line-height: 1.5rem;
  letter-spacing: 0.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 50px;
  padding-bottom: 60px;
  span.period {
    font-size: 18px;
    margin-bottom: 20px;
  }
  border-left: 7px solid white;
  ${MD} {
    padding-left: 90px;
  }
  span.sub-task {
    margin-top: 24px;
  }
`
export const JobAndCompany = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 22px;
  position: relative;
  border: none;
  margin-bottom: 10px;
  img {
    position: absolute;
    left: -83px;
    width: 60px;
    height: 60px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
  }
  ${MD} {
    font-size: 24px;
    flex-direction: row;
    gap: 15px;
    img {
      left: -133px;
      width: 80px;
      height: 80px;
    }
  }
`
export const TaskWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14.5px;
  list-style-type: disc;
  margin-bottom: 8px;
  padding-left: 0px;
  ${MD} {
    font-size: 16px;
  }
`
export const LinkWrap = styled.ul`
  display: flex;
  gap: 30px;
  font-size: 14.5px;
  padding-left: 0;
  li {
    text-decoration: underline;
  }
  ${MD} {
    font-size: 16px;
  }
`
export const TagWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
  line-height: 1.2rem;
  text-align: left;
  padding-left: 0;
`
