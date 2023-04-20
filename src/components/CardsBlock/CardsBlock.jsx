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
  HeartIcon,
  PriceHeartBox,
} from './CardsBlock.styled';

function CardsBlock() {
  const {
    data,
    showCardModal,
    handleShowModalCard,
    handleAddBusketData,
    handleAddHeartItem,
  } = useCont();

  return (
    <Section>
      <Container>
        <CardsBox>
          {data.map(({ name, img, id, price }, i) => (
            <CardItem key={id} onClick={e => handleShowModalCard(e, i)}>
              <CardImg src={img} />
              <CardName>{name}</CardName>
              <PriceHeartBox>
                <Price>Ціна:</Price>
                <PriceMeaning>{price}₴</PriceMeaning>
                <HeartIcon onClick={() => handleAddHeartItem(i)} />
              </PriceHeartBox>

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
