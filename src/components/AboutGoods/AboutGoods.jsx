import React from 'react';
import Container from 'components/Container/Container';
import ModalBusket from 'components/ModalBusket/ModalBusket';
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
} from './AboutGoods.styled';

function AboutGoods() {
  const { handleFilter, showBusketModal, openBusketModal, TotalCount } =
    useCont();

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
            <Btn>
              <Heart />
            </Btn>
            <Btn onClick={openBusketModal}>
              <Basket />
            </Btn>
            {TotalCount > 0 && <Count>{TotalCount}</Count>}
          </LikesBox>
        </SectionBox>
        {showBusketModal && <ModalBusket />}
      </Container>
    </Section>
  );
}

export default AboutGoods;
