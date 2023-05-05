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
`;

export const Modal = styled.div`
  position: relative;
  width: 730px;
  max-height: 100%;
  background-color: white;
  padding: 40px;
  overflow-y: auto;
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
`;
export const BusketName = styled.h3`
  margin: 20px 0 10px 0;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 15px;
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
  font-size: 14px;
  color: grey;
  cursor: pointer;
  &:hover,
  &:focus {
    color: black;
  }
`;

export const PriceMeaning = styled.span`
  display: flex;
  align-self: center;
  margin: 0;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
`;
export const TitleBox = styled.div`
  display: flex;
  width: max-content;
  margin: 0 auto;
  align-items: center;
`;
export const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 30px;
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
