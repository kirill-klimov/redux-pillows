import styled from 'styled-components'
import { ReactComponent as CartIconSvg } from '../../assets/cart.svg'

export const CartIconContainer = styled.div`
  position: relative;
  height: 40px;
  width: 40px;
  cursor: pointer;
  box-sizing: content-box;
  padding: 4px;
  border-radius: 3px;  
`;

export const CartIcon = styled(CartIconSvg)`
  height: 40px;
  width: 40px;
`;

export const Counter = styled.span`
  position: absolute;
  top: 58%;
  color: grey;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 0.9rem;
  font-weight: 500;
  user-select: none;
`;

export const CartContainer = styled.div`
  position: relative;
`;
