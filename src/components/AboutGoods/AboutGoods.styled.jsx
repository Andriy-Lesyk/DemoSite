import styled from '@emotion/styled';
import { AiFillHeart } from 'react-icons/ai';
import { MdTrolley } from 'react-icons/md';
import { GiAbstract050 } from 'react-icons/gi';

export const Section = styled.section`
  position: relative;
  background-color: #e5eb34;
  padding: 15px 0;
  @media screen and (max-width: 768px) {
    padding: 8px 0;
  }
`;
export const SectionBtn = styled.button`
  @media screen and (max-width: 2000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 40px;
    display: none;
    background-color: #6d6e6d;
    border-radius: 10px;
    border-color: #6d6e6d;
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 18px;
    color: white;
  }
  @media screen and (max-width: 702px) {
    display: flex;
    position: absolute;
    margin-top: 10px;
    width: 160px;
    font-size: 14px;
    height: 35px;
    top: 21px;
    left: 58px;
  }
`;
export const Input = styled.input`
  @media screen and (max-width: 2000px) {
    width: 700px;
    height: 40px;
    border: 2px solid #6d6e6d;
    border-radius: 10px;
    padding-left: 15px;
    &::placeholder {
      padding-left: 20px;
    }
  }
  @media screen and (max-width: 1280px) {
    width: 400px;
    margin-left: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 35px;
  }
`;
export const LikesBox = styled.div`
  position: relative;
  width: max-content;
  height: 40px;
  display: flex;
  //align-items: ;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    height: 30px;
  }
`;
export const Heart = styled(AiFillHeart)`
  height: 25px;
  width: 25px;
  margin-right: 30px;
  fill: #6d6e6d;
  &:hover,
  &:focus {
    scale: 1.2;
  }
  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;
export const Basket = styled(MdTrolley)`
  height: 25px;
  width: 25px;
  fill: #6d6e6d;
  &:hover,
  &:focus {
    scale: 1.2;
  }
  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const Catalog = styled(GiAbstract050)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  fill: white;
  @media screen and (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
`;
export const Btn = styled.button`
  width: max-content;
  background-color: transparent;
  border: transparent;
`;
export const SectionBox = styled.div`
  @media screen and (max-width: 2000px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: end;
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
  right: -7px;
  top: -4px;
`;
export const CountHeart = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  right: 58px;
  top: -4px;
`;
