import styled from 'styled-components'

import {LG, MD, SM, XL, XXL} from '../constant/Mixin'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  justify-content: flex-start;
  flex-wrap: inherit;
  position: relative;
  padding: 0 25px;
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
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  ${LG} {
    flex-direction: row;
  }
`
