import headerBg from '../../assets/header-bg.png'

import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-image: url(${headerBg});
  background-repeat: no-repeat;
  background-size: 100%;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding-top: 4rem;
  padding-bottom: 8.375rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
