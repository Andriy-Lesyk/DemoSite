import styled from '@emotion/styled';
import { AiOutlineClose } from 'react-icons/ai';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWrapper = styled.div`
  width: 630px;
  border-radius: 10px;
  height: 80%;
  overflow: hidden;
  background-color: white;
`;

export const Modal = styled.div`
  position: relative;
  width: 630px;
  max-height: 100%;
  background-color: white;
  overflow-y: auto;
  padding: 40px;
`;

export const PartName = styled.h3`
  margin: 10px 0 0 0;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
`;

export const PartDescription = styled.span`
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 12px;
`;

export const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 20px;
  top: 20px;
  &:hover {
    scale: 1.3;
  }
`;
