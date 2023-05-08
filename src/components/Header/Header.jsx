import React from 'react';
import Container from 'components/Container/Container';
import Logo from 'components/Logo/Logo';
import ModalBusket from 'components/ModalBusket/ModalBusket';
import ModalHeart from 'components/ModalHeart/ModalHeart';
import { useCont } from 'components/Context/Context';
import {
  SectionTop,
  SectionBox,
  Head,
  Input,
  LikesBox,
  Heart,
  Basket,
  Count,
  CountHeart,
  SectionBtn,
  Catalog,
  Divs,
  Wrapper,
} from './Header.styled';

function Header() {
  const {
    handleFilter,
    handleCloseBurgerMenu,
    TotalCount,
    openHeartModal,
    showHeartModal,
    heartData,
    showBusketModal,
    openBusketModal,
    handleToggleSideBar,
  } = useCont();

  return (
    <Wrapper>
      <Head>
        <SectionTop>
          <Container>
            <SectionBox>
              <Divs>
                <Logo />
                <SectionBtn onClick={handleToggleSideBar}>
                  <Catalog />
                  КАТАЛОГ
                </SectionBtn>
              </Divs>
              <Divs>
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
              </Divs>
            </SectionBox>
            {showBusketModal && <ModalBusket />}
            {showHeartModal && <ModalHeart />}
          </Container>
        </SectionTop>
      </Head>
    </Wrapper>
  );
}

export default Header;
