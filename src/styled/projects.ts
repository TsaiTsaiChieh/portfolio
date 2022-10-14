import styled from 'styled-components'

import {MD} from '../constant/Mixin'
import {colors} from '../constant/Variables'

export const Section = styled.section`
  height: 100%;
  background: ${colors.black[50]};
  overflow: hidden;
`
export const BtnWrap = styled.div`
  display: flex;
  width: 95%;
  background: ${colors.black[60]};
  border-radius: 50px;
  font-size: 14px;
  justify-content: space-around;
  margin-bottom: 60px;
  ${MD} {
    width: 75%;
    font-size: 16px;
  }
`
export const Btn = styled.button`
  width: 100%;
  height: 100%;
  background: transparent;
  padding: 20px 0;
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
    background-image: linear-gradient(
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
height:400px;
margin:auto ;
text-align:center;
img {
  height:auto;
  border-radius: 10px;
}
${MD} {
  width: 55%;
}
`
export const ProjectImg = styled.img<{$path: string}>`
  content: url(${(props) => props.$path});
`

export const ProjectName = styled.h1`
  font-size: 22px;
  color: white;
  margin-bottom: 20px;
  font-weight:bold;
letter-spacing:.5px ;
`
export const Summary = styled.span``
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
  text-decoration:underline;
}
&.deprecated {
  color: ${colors.black[100]};
}
`
