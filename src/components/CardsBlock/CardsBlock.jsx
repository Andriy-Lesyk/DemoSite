import React from 'react';
import Container from 'components/Container/Container';
import { useCont } from 'components/Context/Context';
import CardModal from 'components/CardModal/CardModal';
import {
  CardsBox,
  CardItem,
  CardImg,
  CardName,
  Section,
  Price,
  PriceMeaning,
  CardBtn,
} from './CardsBlock.styled';

function CardsBlock() {
  const { data, showCardModal, handleShowModalCard, handleAddBusketData } =
    useCont();

  return (
    <Section>
      <Container>
        <CardsBox>
          {data.map(({ name, img, id, price }, i) => (
            <CardItem key={id} onClick={e => handleShowModalCard(e, i)}>
              <CardImg src={img} />
              <CardName>{name}</CardName>
              <Price>Ціна:</Price>
              <PriceMeaning>{price}₴</PriceMeaning>
              <CardBtn onClick={() => handleAddBusketData(i)}>
                Додати в кошик
              </CardBtn>
            </CardItem>
          ))}
        </CardsBox>
        {showCardModal && <CardModal />}
      </Container>
    </Section>
  );
}

export default CardsBlock;
