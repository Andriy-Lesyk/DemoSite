import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useCont } from 'components/Context/Context';
import { Overlay, CloseIcon } from 'components/CardModal/CardModal.styled';
import { DeleteIcon } from 'components/ModalBusket/ModalBusket.styled';
import {
  Modal,
  Title,
  HeartList,
  HearttItem,
  HeartName,
  HeartImg,
  HeartDescript,
  ModalWrapper,
} from './ModalHeart.styled';

function ModalHeart() {
  const { closeHeartModal, heartData, handleDeleteHeartItem } = useCont();

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeHeartModal();
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
      closeHeartModal();
    }
  };
  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalWrapper>
        <Modal>
          <CloseIcon onClick={closeHeartModal} />
          <Title>Закладки</Title>
          <HeartList>
            {heartData.map(({ name, img }, i) => (
              <HearttItem key={uuidv4()}>
                <HeartName>{name}</HeartName>
                <HeartImg src={img} />
                <DeleteIcon
                  onClick={() => handleDeleteHeartItem(i)}
                  style={{ display: 'flex', alignSelf: 'center' }}
                />
              </HearttItem>
            ))}
          </HeartList>
        </Modal>
      </ModalWrapper>
    </Overlay>
  );
}

export default ModalHeart;
