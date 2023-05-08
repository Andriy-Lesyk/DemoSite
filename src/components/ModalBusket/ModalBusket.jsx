import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useCont } from 'components/Context/Context';
import { Overlay, CloseIcon } from 'components/CardModal/CardModal.styled';
import {
  Modal,
  BusketItem,
  BusketList,
  TotalPrice,
  BusketImg,
  BusketName,
  IconBtn,
  PlusIcon,
  MinesIcon,
  PriceMeaning,
  Price,
  Title,
  TitleIcon,
  TitleBox,
  BusketBtn,
  DeleteIcon,
  TitleIconSmile,
  ModalWrapper,
  CleanBusket,
  EmptyBusketIcon,
} from './ModalBusket.styled';

function ModalBusket() {
  const {
    busketData,
    closeBusketModal,
    CountPlus,
    CountMinus,
    handleDeleteBusketItem,
    handleCleanBusket,
  } = useCont();

  const MainPrice = busketData.reduce(
    (acc, el) => Number(el.price * el.count) + acc,
    0
  );

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeBusketModal();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeBusketModal();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalWrapper>
        <Modal>
          {busketData.length > 0 ? (
            <TitleBox>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Title>Кошик</Title>
                <TitleIcon />
              </div>
              <CleanBusket onClick={handleCleanBusket}>
                Очистити кошик
              </CleanBusket>
            </TitleBox>
          ) : (
            <TitleBox style={{ flexDirection: 'column' }}>
              <Title>Кошик пустий,</Title>
              <div style={{ display: 'flex' }}>
                <Price>але це завжди можна виправити</Price>
                <TitleIconSmile />
              </div>
              <EmptyBusketIcon />
            </TitleBox>
          )}
          <BusketList>
            {busketData.map(({ name, img, price, count }, i) => (
              <BusketItem key={uuidv4()}>
                <BusketName>{name}</BusketName>
                <BusketImg src={img} />
                <Price>Ціна:</Price>
                <PriceMeaning> {price * count}₴</PriceMeaning>
                <Price>Кількість:</Price>
                <PriceMeaning>{count}</PriceMeaning>

                <IconBtn
                  onClick={() => {
                    CountMinus(i);
                  }}
                >
                  <MinesIcon />
                </IconBtn>
                <IconBtn
                  onClick={() => {
                    CountPlus(i);
                  }}
                >
                  <PlusIcon />
                </IconBtn>
                <IconBtn onClick={() => handleDeleteBusketItem(i)}>
                  <DeleteIcon />
                </IconBtn>
              </BusketItem>
            ))}
          </BusketList>
          <CloseIcon onClick={closeBusketModal} />
          {busketData.length > 0 && (
            <TotalPrice>Загальна сума: {MainPrice}₴ </TotalPrice>
          )}
          {busketData.length > 0 && <BusketBtn>Оформити замовлення</BusketBtn>}
        </Modal>
      </ModalWrapper>
    </Overlay>
  );
}

export default ModalBusket;
