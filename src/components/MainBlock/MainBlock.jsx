import React from 'react';
import SideBar from 'components/SideBar/SideBar';
import SideBarConst from 'components/SideBarConst/SideBarConst';
import CardsBlock from 'components/CardsBlock/CardsBlock';
import Container from 'components/Container/Container';
import { Section, Wrapper } from './MainBlock.styled';

function MainBlock() {
  return (
    <Section>
      <Container>
        <Wrapper style={{ display: 'flex' }}>
          <SideBar />
          <SideBarConst />
          <CardsBlock />
        </Wrapper>
      </Container>
    </Section>
  );
}

export default MainBlock;
