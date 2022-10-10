import styled from 'styled-components'

import {colors} from '../constant/Variables'

export const Section = styled.section`
  height: 100%;
  background: ${colors.black[50]};
  overflow: hidden;
`
export const BtnWrap = styled.div`
  display: flex;
  width: 72%;
  background: ${colors.black[60]};
  border-radius: 50px;
  font-size: 18px;
  justify-content: space-around;
`
export const Btn = styled.button`
  width: 100%;
  height: 100%;
  background: transparent;
  padding: 18px 0;
  font-weight: bold;
  color: white;
  letter-spacing: 0.5px;
  transition: 0.3s ease-in-out;
  border-top: 1px solid ${colors.black['opacity-50']};
  border-bottom: 1px solid ${colors.black['opacity-50']};
  position: relative;
  z-index: 0;
  overflow: hidden;

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
    width: 100% !important;
  }
`
