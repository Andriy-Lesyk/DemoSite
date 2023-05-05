import styled from '@emotion/styled';
import { GiAbstract070 } from 'react-icons/gi';

export const Log = styled(GiAbstract070)`
  height: 100%;
  fill: #e5eb34;
  margin-right: 10px;
`;
export const MainText = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #e5eb34;
  line-height: 0;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;
export const Text = styled.span`
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 300;
  font-size: 14px;
  color: #e5eb34;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const LogBox = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 135px;
  }
`;
export const LogoTopBox = styled.div`
  display: flex;
  align-items: center;
`;
