import styled from '@emotion/styled';
import { AiOutlineLike } from 'react-icons/ai';

export const Section = styled.section`
  background-color: #f2f5f5;
`;
export const CardsBox = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  padding-bottom: 50px;
  margin: 0;
`;
export const CardItem = styled.li`
  @media screen and (max-width: 2000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    width: 284px;
    background-color: white;
    border-radius: 10px;
    margin-top: 50px;
    padding: 10px;
    padding-bottom: 30px;
    &:not(:nth-child(4n)) {
      margin-right: 50px;
    }
    &:hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1482px) {
    &:not(:nth-child(4n)) {
      margin-right: 0;
    }
    &:not(:nth-child(3n)) {
      margin-right: 50px;
    }
  }
  @media screen and (max-width: 1127px) {
    &:not(:nth-child(3n)) {
      margin-right: 0;
    }
    &:not(:nth-child(2n)) {
      margin-right: 50px;
    }
  }
  @media screen and (max-width: 780px) {
    &:not(:nth-child(2n)) {
      margin-right: 30px;
    }
  }
  @media screen and (max-width: 723px) {
    &:not(:nth-child(2n)) {
      margin-right: 0;
    }
  }
`;

export const CardImg = styled.img`
  width: 250px;
  height: 200px;
  pointer-events: none;
`;
export const CardName = styled.h3`
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
export const HeartIcon = styled(AiOutlineLike)`
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
