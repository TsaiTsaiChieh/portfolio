import styled from 'styled-components'

import {colors} from '../constant/Variables'

export const Wrap = styled.div<{$loading: boolean}>`
  height: 100vh;
  background: ${colors.black[50]};
  display: ${(props) => props.$loading ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  div {
    height: 65vh;
  }
`
