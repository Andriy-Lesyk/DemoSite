import styled from '@emotion/styled';
import { FaThumbsUp } from 'react-icons/fa';

export const CardsBox = styled.ul`
  background-color: #f2f5f5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  gap: 30px;
  padding: 30px;
  margin: 0;
  @media screen and (max-width: 1450px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 1016px) {
    grid-template-columns: 1fr 1fr;
    padding: 20px;
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
  @media screen and (max-width: 360px) {
    padding: 10px;
  }
`;
export const CardItem = styled.li`
  @media screen and (max-width: 2000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    max-width: 284px;
    background-color: white;
    border-radius: 10px;
    padding-bottom: 30px;
  }
`;
export const ImgBox = styled.div`
  width: 250px;
  height: 200px;
  display: flex;
  align-items: center;
  pointer-events: none;
`;

export const CardImg = styled.img`
  width: 250px;
  max-height: 200px;
  pointer-events: none;
`;
export const CardName = styled.h3`
  text-align: center;
  margin: 20px 0 10px 0;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 18px;
  pointer-events: none;
`;

export const Price = styled.p`
  margin: 0;
  margin: 15px 10px 0;
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 14px;
  pointer-events: none;
`;
export const PriceMeaning = styled.p`
  margin: 0;
  margin-top: 5px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  pointer-events: none;
`;
export const CardBtn = styled.button`
  position: relative;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  background-color: #e5eb34;
  border-radius: 10px;
  border-color: #6d6e6d;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  color: #6d6e6d;
  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #bac423;
  }
`;
export const Count = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  right: -10px;
  top: -4px;
`;
export const HeartIcon = styled(FaThumbsUp)`
  width: 25px;
  height: 25px;
  fill: #6d6e6d;
  flex-grow: 1;
  margin-top: 5px;
  &:focus,
  &:hover {
    scale: 1.2;
  }
`;
export const PriceHeartBox = styled.div`
  display: flex;
  align-items: baseline;
  width: 200px;
`;
export const Link = styled.a``;
