import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { ReactComponent as LogoSvg } from '../../assets/logo128.svg'



export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OptionContainer = styled.div`
  width: 70%;
  max-width: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OptionLink = styled(RouterLink)`
  font-weight: 300;
  line-height: 64px;
  font-size: 1rem;
  user-select: none;

  &:hover {
    color: grey;
  }
`;

export const Logo = styled(LogoSvg)`
  height: 64px;
  width: 64px;
`;