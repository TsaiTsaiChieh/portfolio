import styled from 'styled-components'

import background from '../asset/img/color-sharp2.png'
import {LG, MD, XL, XXL} from '../constant/Mixin'
import {colors} from '../constant/Variables'

export const Section = styled.section`
  height: 100%;
  background: ${colors.black[40]};
  overflow: hidden;
  position: relative;
  z-index: 10;
  padding: 150px 0;
  ${LG} {
    height: 100vh;
    padding: 10% 0;
  }
  ${XXL} {
    padding: 5% 0;
  }
`
export const BtnWrap = styled.div`
  display: flex;
  width: 95%;
  background: ${colors.black[60]};
  border-radius: 50px;
  font-size: 14px;
  justify-content: space-around;
  margin: 30px 0 35px;
  ${LG} {
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
  &:nth-child(2) {
    border-right: 1px solid ${colors.black['opacity-50']};
  }
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
  width: 95%;
  display: flex;
  flex-direction: column;
  line-height: 1.3rem;
  margin: auto;
  text-align: center;
  ${LG} {
    width: 55%;
  }
`
export const ImgWrap = styled.div`
  width: 95%;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  img {
    object-fit: cover;
    width: 100%;
    height: 224px;
    ${MD} {
      width: 694px;
      height: 335px;
    }
    ${LG} {
      width: 576px;
      height: 335px;
    }
    ${XL} {
      width: 684px;
      height: 335px;
    }
    ${XXL} {
      width: 792px;
      height: 388px;
    }
  }

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
      top: 0px;
    }
    &:hover .go2website {
      opacity: 0;
      ${MD} {
        opacity: 1;
        top: 25px;
      }
      ${LG} {
        top: 15%;
      }
    }
  }
  .go2website {
    font-size: 20px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    font-style: italic;
    font-weight: bold;
    transition: 0.4s ease-in-out;
  }
  ${LG} {
    top: 40px;
    width: 60%;
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
  top: -10px;
  text-align: left;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 8%;
  line-height: 1.2rem;
  list-style-type: disc;
  font-size: 14.5px;
  margin: auto;
  opacity: 0;
  transition: 0.5s ease-in-out;
  ${MD} {
    line-height: 1.5rem;
    padding: 15%;
    font-size: 16px;
  }
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
export const SkillTag = styled.li<{ color: string }>`
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
  gap: 10px;
  span {
    font-size: 14px;
  }
  ${MD} {
    gap: 20px;
    span {
      font-size: 16px;
    }
  }
`
export const IconWrap = styled.div`
  font-size: 14px;
  a {
    text-decoration: underline;
  }
  &.deprecated {
    color: ${colors.black[100]};
  }
  ${MD} {
    font-size: 16px;
  }
`
export const Background = styled.img`
  content: url(${background});
  top: -100%;
  left: 0;
  position: absolute;
  z-index: -1;
`
