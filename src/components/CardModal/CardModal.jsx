import React, { useEffect } from 'react';
import { useCont } from 'components/Context/Context';
import {
  Overlay,
  Modal,
  PartName,
  PartDescription,
  CloseIcon,
  ModalWrapper,
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
        <ModalWrapper>
          <Modal>
            <CardName>{modalData.name}</CardName>
            <CardImg src={modalData.img} />
            {modalData.complect && <PartName>КОМПЛЕКТ ПОСТАВКИ</PartName>}
            <PartDescription>{modalData.complect}</PartDescription>
            {modalData.technic && <PartName>ТЕХНІЧНІ ХАРАКТЕРИСТИКИ</PartName>}
            <PartDescription>{modalData.technic}</PartDescription>
            {modalData.instruction && <PartName>ІНСТРУКЦІЇ</PartName>}
            <PartDescription>{modalData.instruction}</PartDescription>
            {modalData.safety && <PartName>ТЕХНІКА БЕЗПЕКИ</PartName>}
            <PartDescription>{modalData.safety}</PartDescription>
            <CloseIcon onClick={closeCardModal} />
          </Modal>
        </ModalWrapper>
      </Overlay>
    )
  );
}

export default CardModal;
