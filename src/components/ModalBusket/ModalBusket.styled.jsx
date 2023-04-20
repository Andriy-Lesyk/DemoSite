import styled from '@emotion/styled';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { AiFillDelete } from 'react-icons/ai';
import { TbMoodSad2 } from 'react-icons/tb';

export const Modal = styled.div`
  position: relative;
  width: 750px;
  border-radius: 10px;
  background-color: white;
  padding: 40px;
`;
export const BusketList = styled.ul``;
export const BusketItem = styled.li`
  display: grid;
  grid-template-columns: 200px 150px 40px 65px 65px 40px 50px 50px 50px;
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
export const TitleIconSad = styled(TbMoodSad2)`
  width: 40px;
  height: 40px;
  margin-left: 10px;
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
