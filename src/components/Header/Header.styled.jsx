import styled from '@emotion/styled';
export const Head = styled.header``;

export const SectionTop = styled.section`
  padding: 30px 0;
  background-color: #6d6e6d;
`;

export const Inform = styled.span`
  @media screen and (max-width: 2000px) {
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 18px;
    color: #e5eb34;
    &:not(:last-child) {
      margin-right: 40px;
    }
    &:hover,
    &:focus {
      border-bottom: 2px solid #e5eb34;
    }
  }
  @media screen and (max-width: 1280px) {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
export const SectionBox = styled.div`
  @media screen and (max-width: 2000px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const InformBox = styled.div`
  width: max-content;
  @media screen and (max-width: 768px) {
    margin-top: 15px;
  }
`;
