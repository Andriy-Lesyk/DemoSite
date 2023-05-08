import styled from '@emotion/styled';

export const Modal = styled.div`
  position: relative;
  width: 570px;
  height: 100%;
  background-color: white;
  padding: 40px;
  overflow-y: auto;
  @media screen and (max-width: 800px) {
    width: 340px;
    padding: 15px;
  }
`;
export const ModalWrapper = styled.div`
  width: 570px;
  border-radius: 10px;
  height: 80%;
  overflow: hidden;
  background-color: white;
  @media screen and (max-width: 800px) {
    width: 340px;
  }
`;
export const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 30px;
  text-align: center;
`;
export const HeartList = styled.ul`
  padding: 0;
`;
export const HearttItem = styled.li`
  display: grid;
  grid-template-columns: 250px 190px 20px;
  align-items: center;
  &:not(:last-child) {
    border-bottom: 1px solid #dedcd7;
    margin-top: 5px;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 200px 90px 20px;
  }
`;
export const HeartImg = styled.img`
  width: 100px;
  height: 90px;
  @media screen and (max-width: 800px) {
    width: 80px;
    height: 70px;
  }
`;
export const HeartName = styled.h3`
  padding: 0;
  margin: 20px 0 10px 0;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 15px;
`;
export const HeartDescript = styled.p`
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 15px;
  cursor: pointer;
  &:focus,
  &:hover {
    font-size: 16px;
  }
`;
