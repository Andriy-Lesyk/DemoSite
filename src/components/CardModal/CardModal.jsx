import React, { useEffect } from 'react';
import { useCont } from 'components/Context/Context';
import {
  Overlay,
  Modal,
  PartName,
  PartDescription,
  CloseIcon,
} from './CardModal.styled';
import { CardName, CardImg } from 'components/CardsBlock/CardsBlock.styled';

function CardModal() {
  const { modalData, closeCardModal } = useCont();

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeCardModal();
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
      closeCardModal();
    }
  };

  return (
    modalData && (
      <Overlay onClick={handleBackdropClick}>
        <Modal>
          <CardName>{modalData.name}</CardName>
          <CardImg src={modalData.img} />
          <PartName>КОМПЛЕКТ ПОСТАВКИ</PartName>
          <PartDescription>{modalData.complect}</PartDescription>
          <PartName>ТЕХНІЧНІ ХАРАКТЕРИСТИКИ</PartName>
          <PartDescription>{modalData.technic}</PartDescription>
          <PartName>ЯК КОРИСТУВАТИСЬ</PartName>
          <PartDescription>{modalData.instruction}</PartDescription>
          <CloseIcon onClick={closeCardModal} />
        </Modal>
      </Overlay>
    )
  );
}

export default CardModal;
