import React from 'react';
import { useCont } from 'components/Context/Context';
import CardModal from 'components/CardModal/CardModal';
import {
  CardsBox,
  CardItem,
  CardImg,
  CardName,
  Price,
  PriceMeaning,
  CardBtn,
  HeartIcon,
  PriceHeartBox,
  ImgBox,
  Link,
} from './CardsBlock.styled';

function CardsBlock() {
  const {
    data,
    showCardModal,
    handleToggleHeartItem,
    handleShowModalCard,
    handleAddBusketData,
    clickHeartData,
  } = useCont();

  return (
    <div>
      <CardsBox>
        {data.map(({ name, img, id, price }, i) => (
          <CardItem key={id} onClick={e => handleShowModalCard(e, i)}>
            <ImgBox>
              <CardImg src={img} />
            </ImgBox>
            <CardName>{name}</CardName>
            <PriceHeartBox>
              <Price>Ціна:</Price>
              <PriceMeaning>{price}₴</PriceMeaning>
              <HeartIcon
                onClick={() => handleToggleHeartItem(i)}
                style={{ fill: clickHeartData.includes(i) ? 'red' : '#6d6e6d' }}
              />
            </PriceHeartBox>

            <CardBtn onClick={() => handleAddBusketData(i)}>
              Додати в кошик
            </CardBtn>
          </CardItem>
        ))}
      </CardsBox>
      {showCardModal && <CardModal />}
    </div>
  );
}

export default CardsBlock;
