import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: #fff;
`;
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 702px) {
    flex-direction: column;
  }
`;
