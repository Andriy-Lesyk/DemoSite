import React from 'react';
import Container from 'components/Container/Container';
import ModalBusket from 'components/ModalBusket/ModalBusket';
import ModalHeart from 'components/ModalHeart/ModalHeart';
import { useCont } from 'components/Context/Context';
import {
  Section,
  SectionBtn,
  SectionBox,
  Input,
  LikesBox,
  Heart,
  Basket,
  Catalog,
  Btn,
  Count,
  CountHeart,
} from './AboutGoods.styled';

function AboutGoods() {
  const {
    handleFilter,
    showBusketModal,
    openBusketModal,
    TotalCount,
    openHeartModal,
    showHeartModal,
    heartData,
  } = useCont();

  return (
    <Section>
      <Container>
        <SectionBox>
          <SectionBtn>
            <Catalog />
            КАТАЛОГ ТОВАРІВ
          </SectionBtn>
          <Input placeholder="Я шукаю..." onChange={handleFilter} />
          <LikesBox>
            <Btn onClick={openHeartModal}>
              <Heart />
            </Btn>
            <Btn onClick={openBusketModal}>
              <Basket />
            </Btn>
            {TotalCount > 0 && <Count>{TotalCount}</Count>}
            {heartData.length > 0 && (
              <CountHeart>{heartData.length}</CountHeart>
            )}
          </LikesBox>
        </SectionBox>
        {showBusketModal && <ModalBusket />}
        {showHeartModal && <ModalHeart />}
      </Container>
    </Section>
  );
}

export default AboutGoods;
