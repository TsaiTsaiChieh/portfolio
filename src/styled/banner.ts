import styled from 'styled-components'

const banner = require('../asset/img/banner-bg.png')

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: url(${banner});
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
`
export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
export const Description = styled.div`
  flex-grow: 2;
`
export const TagLine = styled.span`
  font-weight: bolder;
  letter-spacing: 0.8px;
  padding: 8px 10px;
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
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 20px;
  margin-bottom: 16px;
  display: inline-block;
`
export const Astronaut = styled.div`
  flex-grow: 1;
`
