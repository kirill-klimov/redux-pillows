import styled from 'styled-components';

import { ReactComponent as ClearButtonSvg } from '../../assets/trashbox.svg';

export const ItemContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const ItemIcon = styled.div`
  height: 45px;
  width: 45px;
  background-image: url(" ${({imageUrl}) => imageUrl } ");
  background-size: cover;
  background-position: center;
`;

export const InfoContainer = styled.div`
  flex: 1 1 1px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  justify-content: center;

  span:first-of-type {
    width: max-content;
    overflow: hidden;
  }
`;

export const ClearButton = styled(ClearButtonSvg)`
  height: 20px;
  width: 20px;
  margin: auto 0;
  cursor: pointer;
`;