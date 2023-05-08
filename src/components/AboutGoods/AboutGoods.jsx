import React from 'react';
import Container from 'components/Container/Container';
import ModalBusket from 'components/ModalBusket/ModalBusket';
import ModalHeart from 'components/ModalHeart/ModalHeart';
import { useCont } from 'components/Context/Context';
import {
  Section,
  SectionBox,
  Input,
  LikesBox,
  Heart,
  Basket,
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
    handleCloseBurgerMenu,
  } = useCont();

  return (
    <Section>
      <Container>
        <SectionBox>
          <Input
            placeholder="Я шукаю..."
            onChange={handleFilter}
            onClick={handleCloseBurgerMenu}
          />
          <LikesBox>
            <Heart onClick={openHeartModal} />
            <Basket onClick={openBusketModal} />
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
