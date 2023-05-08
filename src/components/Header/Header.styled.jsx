import styled from '@emotion/styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillHeart } from 'react-icons/ai';
import { MdTrolley } from 'react-icons/md';
import { GiAbstract050 } from 'react-icons/gi';

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Head = styled.header`
  position: relative;
  display: block;
`;

export const SectionTop = styled.section`
  padding: 20px 0;
  background-color: #6d6e6d;
  @media screen and (max-width: 768px) {
    padding: 15px 0;
  }
`;

export const Input = styled.input`
  @media screen and (max-width: 2000px) {
    width: 100%;
    height: 40px;
    border: 2px solid #e5eb34;
    border-radius: 10px;
    margin-right: 20px;
    padding-left: 15px;
    &::placeholder {
      padding-left: 20px;
    }
  }
`;

export const Inform = styled.span`
  @media screen and (max-width: 2000px) {
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 16px;
    color: #e5eb34;
    &:not(:last-child) {
      margin-right: 30px;
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
    color: #6d6e6d;
    font-size: 13px;
    &:not(:last-child) {
      margin-right: 0;
    }
  }
`;
export const SectionBox = styled.div`
  @media screen and (max-width: 2000px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: 910px) {
    flex-direction: column;
  }
`;
export const Divs = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;
export const InformBox = styled.div`
  width: max-content;
  @media screen and (max-width: 768px) {
    position: absolute;
    padding: 5px 10px;
    background-color: #e5eb34;
    top: 61px;
    right: 25px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    border: 2px solid #6d6e6d;
    z-index: 10;
  }
`;
export const InformBoxForTablet = styled.div`
  width: max-content;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const BurgerMenuIcon = styled(GiHamburgerMenu)`
  fill: #e5eb34;
  margin-right: 10px;
  width: 15px;
  height: 15px;
  &:focus,
  &:hover {
    scale: 1.2;
  }
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const LikesBox = styled.div`
  position: relative;
  width: max-content;
  height: 40px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    height: 30px;
  }
`;
export const Heart = styled(AiFillHeart)`
  height: 25px;
  width: 25px;
  margin-right: 30px;
  fill: #e5eb34;
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
  fill: #e5eb34;
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
  fill: #6d6e6d;
  @media screen and (max-width: 768px) {
    width: 15px;
    height: 15px;
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
  right: 45px;
  top: -4px;
`;
export const SectionBtn = styled.button`
  @media screen and (max-width: 2000px) {
    display: none;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    background-color: #e5eb34;
    border-radius: 10px;
    border-color: #e5eb34;
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 16px;
    color: #6d6e6d;

    @media screen and (max-width: 910px) {
      display: flex;
    }
  }
`;
