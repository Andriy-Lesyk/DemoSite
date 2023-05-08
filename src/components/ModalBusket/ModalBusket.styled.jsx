import styled from '@emotion/styled';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { AiFillDelete } from 'react-icons/ai';
import { FaSmileWink } from 'react-icons/fa';
import { GiShoppingCart } from 'react-icons/gi';

export const ModalWrapper = styled.div`
  width: 730px;
  border-radius: 10px;
  height: 80%;
  overflow: hidden;
  background-color: white;
  @media screen and (max-width: 800px) {
    width: 310px;
  }
`;

export const Modal = styled.div`
  position: relative;
  align-items: center;
  width: 730px;
  max-height: 100%;
  background-color: white;
  padding: 40px;
  overflow-y: auto;
  @media screen and (max-width: 800px) {
    width: 310px;
    padding: 40px 20px;
  }
`;
export const BusketList = styled.ul`
  padding: 0;
`;
export const BusketItem = styled.li`
  display: grid;
  grid-template-columns: 200px 110px 40px 65px 65px 35px 40px 40px 40px;
  align-self: center;
  &:not(:last-child) {
    border-bottom: 1px solid #dedcd7;
    margin-top: 5px;
  }
  @media screen and (max-width: 800px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
export const TotalPrice = styled.span`
  display: flex;
  width: max-content;
  margin: 0 auto;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
`;

export const BusketImg = styled.img`
  width: 100px;
  height: 90px;
  @media screen and (max-width: 800px) {
    width: 50px;
    height: 45px;
    display: none;
  }
`;
export const BusketName = styled.h3`
  margin: 20px 0 10px 0;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 15px;
  @media screen and (max-width: 800px) {
    font-size: 13px;
  }
`;

export const PlusIcon = styled(AiOutlinePlusCircle)`
  width: 20px;
  height: 20px;
  &:hover,
  &:focus {
    cursor: pointer;
    scale: 1.2;
  }
`;
export const MinesIcon = styled(AiOutlineMinusCircle)`
  width: 20px;
  height: 20px;
  &:hover,
  &:focus {
    cursor: pointer;
    scale: 1.2;
  }
`;
export const IconBtn = styled.button`
  display: flex;
  align-self: center;
  width: max-content;
  background-color: transparent;
  border-color: transparent;
`;
export const Price = styled.span`
  display: flex;
  align-self: center;
  margin: 0;
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 14px;
`;

export const CleanBusket = styled.p`
  font-family: 'Roboto';
  font-weight: 300;
  margin-left: 200px;
  font-size: 14px;
  color: grey;
  cursor: pointer;
  &:hover,
  &:focus {
    color: black;
  }
  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;

export const PriceMeaning = styled.span`
  display: flex;
  align-self: center;
  margin: 0;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  @media screen and (max-width: 800px) {
    font-size: 14px;
    margin: 0 3px;
  }
`;
export const TitleBox = styled.div`
  display: flex;
  width: max-content;
  margin: 0 auto;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    //align-items: flex-start;
  }
`;
export const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 30px;
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
`;
export const TitleIcon = styled(SlBasket)`
  width: 30px;
  height: 30px;
  margin-left: 10px;
`;

export const EmptyBusketIcon = styled(GiShoppingCart)`
  width: 200px;
  height: 200px;
  margin-top: 70px;
  fill: green;
  @media screen and (max-width: 800px) {
    width: 120px;
    height: 120px;
  }
`;
export const TitleIconSmile = styled(FaSmileWink)`
  width: 25px;
  height: 25px;
  margin-left: 10px;
  fill: #e5eb34;
`;
export const BusketBtn = styled.button`
  margin: 0 auto;
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

export const DeleteIcon = styled(AiFillDelete)`
  width: 20px;
  height: 20px;
  &:hover,
  &:focus {
    cursor: pointer;
    scale: 1.2;
  }
`;
