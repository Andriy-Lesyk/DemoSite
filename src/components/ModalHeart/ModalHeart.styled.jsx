import styled from '@emotion/styled';

export const Modal = styled.div`
  position: relative;
  width: 600px;
  border-radius: 10px;
  background-color: white;
  padding: 40px;
`;
export const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 30px;
  text-align: center;
`;
export const HeartList = styled.ul``;
export const HearttItem = styled.li`
  display: grid;
  grid-template-columns: 200px 150px 160px 20px;
  align-self: center;
`;
export const HeartImg = styled.img`
  width: 100px;
  height: 90px;
`;
export const HeartName = styled.h3`
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
