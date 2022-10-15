import styled from 'styled-components'

import background from '../asset/img/color-sharp2.png'
import {MD} from '../constant/Mixin'
import {colors} from '../constant/Variables'

export const Section = styled.section`
  height: 100%;
  background: ${colors.black[50]};
  overflow: hidden;
  position: relative;
  z-index: 10;
  ${MD} {
    height: 100vh;
    padding: 130px 0;
  }
`
export const BtnWrap = styled.div`
  display: flex;
  width: 95%;
  background: ${colors.black[60]};
  border-radius: 50px;
  font-size: 14px;
  justify-content: space-around;
  margin: 30px 0 50px;
  ${MD} {
    width: 75%;
    font-size: 16px;
  }
`
export const Btn = styled.button`
  width: 100%;
  height: 100%;
  background: transparent;
  padding: 15px 0;
  font-weight: bold;
  color: white;
  letter-spacing: 0.5px;
  transition: 0.3s ease-in-out;
  border-top: 1px solid ${colors.black['opacity-50']};
  border-bottom: 1px solid ${colors.black['opacity-50']};
  position: relative;
  z-index: 0;
  overflow: hidden;
  opacity: 0.75;
  &:first-child {
    border-radius: 50px 0 0 50px;
    border: 1px solid ${colors.black['opacity-50']};
  }
  &:last-child {
    border-radius: 0 50px 50px 0;
    border: 1px solid ${colors.black['opacity-50']};
  }
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(34, 68, 86, 0.7) -5%,
      rgba(172, 218, 208, 0.8) 100%
    );
    top: 0;
    left: 0;
    z-index: -1;
    transition: 0.3s ease-in-out;
  }
  &.active::before {
    width: 100%;
  }
  &.active,
  &:hover {
    opacity: 1;
  }
`
export const DetailsWrap = styled.div`
  width: 55%;
  height: 180px;
  display: flex;
  flex-direction: column;
  line-height: 1.3rem;
  margin: auto;
  text-align: center;
  margin-bottom: 30px;
`
export const ImgWrap = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  a.mask {
    display: inline-block;
    &::before {
      z-index: 0;
      width: 100%;
      content: "";
      background: linear-gradient(
        90deg,
        rgba(34, 68, 86, 0.7) -5%,
        rgba(172, 218, 208, 0.8) 100%
      );
      position: absolute;
      height: 0;
      transition: 0.4s ease-in-out;
    }
    &:hover::before {
      height: 100%;
      border-radius: 10px;
    }
    &:hover .tech {
      opacity: 1;
      top: 10px;
    }
    &:hover .go2website {
      opacity: 1;
      top: 45px;
    }
  }
  ${MD} {
    width: 55%;
  }
  .go2website {
    font-size: 20px;
    width: 100%;
    position: absolute;
    top: 35px;
    left: 0;
    opacity: 0;
    font-style: italic;
    font-weight: bold;
    transition: 0.4s ease-in-out;
  }
`
export const Mask = styled.div`
  width: 100%;
  &::before {
    z-index: 0;
    width: 100%;
    content: "";
    background: linear-gradient(
      90deg,
      rgba(34, 68, 86, 0.7) -5%,
      rgba(172, 218, 208, 0.8) 100%
    );
    position: absolute;
    height: 0;
    transition: 0.4s ease-in-out;
  }
  &:hover::before {
    height: 100%;
    border-radius: 10px;
  }
  &:hover .tech {
    opacity: 1;
    top: 10px;
  }
`
export const TechWrap = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  text-align: left;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 15%;
  line-height: 1.5rem;
  list-style-type: disc;
  font-size: 14.5px;
  margin: auto;
  opacity: 0;
  transition: 0.5s ease-in-out;
`
export const ProjectName = styled.h1`
  font-size: 22px;
  color: white;
  margin-bottom: 20px;
  font-weight: bold;
  letter-spacing: 0.5px;
`
export const Summary = styled.p`
  line-height: 1.5rem;
`
export const TagWrap = styled.ul`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
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
export const InfoWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`
export const IconWrap = styled.div`
  font-size: 16px;
  a {
    text-decoration: underline;
  }
  &.deprecated {
    color: ${colors.black[100]};
  }
`
export const Background = styled.img`
  content: url(${background});
  top: -100%;
  left: 0;
  position: absolute;
  z-index: -1;
`
