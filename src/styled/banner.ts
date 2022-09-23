import {BsArrowRightCircle} from 'react-icons/bs'
import styled from 'styled-components'

import banner from '../asset/img/banner-bg.png'
import planet from '../asset/img/planet.svg'
import {LG} from '../constant/Mixin'
import {colors} from '../constant/Variables'

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
      font-size: 58px;
    }
  }
`
export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  height: 92px;
  margin: 20px 0;
  letter-spacing: 1.5px;
  ${LG} {
    font-size: 58px;
  }
`
export const TagLine = styled.span`
  font-weight: bolder;
  letter-spacing: 0.8px;
  padding: 12px 10px;
  background-image: linear-gradient(
    to left,
    #224456,
    #215769,
    #1d6a7b,
    #1b7e8a,
    #209397,
    #36a09e,
    #4aada6,
    #5cbaad,
    #72c2b5,
    #86cabe,
    #9ad2c7,
    #acdad0
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
  margin-bottom: 60px;
  ${LG} {
    height: 116px;
    font-size: 18px;
    line-height: 1.6em;
  }
`
export const Box = styled.div`
  position: relative;
  width: 200px;
  height: 55px;
  background: #1c1c1c;
  border-radius: 8px;
  overflow: hidden;
  margin: auto;
  &::before {
    content: "";
    z-index: 1;
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200px;
    height: 55px;
    transform-origin: bottom right;
    background: linear-gradient(
      0deg,
      transparent,
      ${colors.primary[200]},
      ${colors.primary[200]}
    );
    animation: animate 5s linear infinite;
  }
  ${LG} {
    margin: 0;
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
      margin-left: 20px;
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
