import styled from '@emotion/styled';

export const Div = styled.div`
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
  @media screen and (max-width: 910px) {
    display: none;
  }
`;
