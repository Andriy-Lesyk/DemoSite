import styled from '@emotion/styled';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

export const Div = styled.div`
  position: absolute;
  z-index: 90;
  height: 100%;
  margin: 0;
  width: 300px;
  background-color: white;
  padding: 25px 0;
  border-right: 3px solid #6d6e6d;

  &.entering {
    animation: show 0.3s forwards;
  }
  &.exiting {
    animation: close 0.3s forwards;
  }
  @keyframes show {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes close {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 10px;
`;
export const TextTitle = styled.h3`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 26px;
  cursor: pointer;
  @media screen and (max-width: 702px) {
    margin: 15px 0;
  }
`;

export const Item = styled.li`
  width: max-content;
  padding: 0;
  list-style-type: none;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const Text = styled.span`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 18px;
  color: #6d6e6d;
  cursor: pointer;
`;
export const ContactBox = styled.div`
  width: max-content;
  padding: 0 10px;
  display: flex;
  align-items: center;
  &:hover,
  &:focus {
    background-color: #e5eb34;
  }
`;
export const PhoneIcon = styled(BsFillTelephoneFill)`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  fill: #6d6e6d;
`;
export const EmailIcon = styled(GrMail)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  fill: #6d6e6d;
`;
export const Link = styled.a`
  text-decoration: none;
  display: flex;
  align-items: baseline;
`;
