import {BsArrowRightCircle} from 'react-icons/bs'
import styled from 'styled-components'

import banner from '../asset/img/banner-bg.png'
import planet from '../asset/img/planet.svg'
import {LG, MD, XL} from '../constant/Mixin'
import {colors} from '../constant/Variables'
import {AnimationBox} from './base'

export const Section = styled.section`
  height: 100vh;
  padding: 260px 0 100px;
  background-image: url(${banner});
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
`
export const Description = styled.div`
  width: 100%;
  ${LG} {
    width: 68%;
  }
  .Typewriter {
    font-size: 40px;
    font-weight: bold;
    height: 105px;
    margin: 20px 0;
    letter-spacing: 1.5px;
    line-height: 1.3em;
    ${LG} {
      font-size: 48px;
    }
  }
`
export const TagLine = styled.span`
  font-weight: bolder;
  letter-spacing: 0.8px;
  padding: 14px 11px;
  background: linear-gradient(
    90deg,
    rgba(34, 68, 86, 0.7) -5%,
    rgba(172, 218, 208, 0.8) 100%
  );
  border: 1px solid ${colors.black['opacity-50']};
  font-size: 20px;
  margin-bottom: 16px;
  display: inline-block;
`
export const Details = styled.p`
  height: 170px;
  color: ${colors.black[100]};
  font-size: 16px;
  letter-spacing: 0.8px;
  line-height: 1.3em;
  width: 96%;
  white-space: pre-line;
  margin-bottom: 90px;
  ${MD} {
    margin-bottom: 40px;
  }
  ${LG} {
    height: 116px;
    font-size: 18px;
    line-height: 1.6em;
    margin-bottom: 140px;
  }
  ${XL} {
    margin-bottom: 120px;
  }
`
export const Animated = styled(AnimationBox)`
  &,
  &::before,
  &::after {
    width: 200px;
    height: 55px;
  }
`
export const DownloadCV = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 0 15px;
  inset: 2px;
  background: ${colors.black[50]};
  border-radius: 8px;
  z-index: 2;
  color: white;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.5px;
  &:hover {
    svg {
      margin-left: 18px;
    }
  }
`
export const DownloadIcon = styled(BsArrowRightCircle)`
  font-size: 25px;
  margin-left: 10px;
  transition: 0.3s ease-in-out;
  line-height: 1;
`
export const Astronaut = styled.div`
  width: 80%;
  position: relative;
  margin-top: 60px;
  ${LG} {
    margin-top: 0;
  }
  ${LG} {
    width: 38%;
  }
  img,
  .lottie {
    animation: updown 3s linear infinite;
  }
`
export const Planet = styled.img`
  width: 95%;
  content: url(${planet});
  position: absolute;
  top: -10px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;
`
