import React from 'react';
import Container from 'components/Container/Container';
import Logo from 'components/Logo/Logo';
import ModalBusket from 'components/ModalBusket/ModalBusket';
import ModalHeart from 'components/ModalHeart/ModalHeart';
import { useCont } from 'components/Context/Context';
import {
  SectionTop,
  Inform,
  SectionBox,
  InformBox,
  Head,
  BurgerMenuIcon,
  InformBoxForTablet,
  Input,
  LikesBox,
  Heart,
  Basket,
  Count,
  CountHeart,
  SectionBtn,
  Catalog,
  Divs,
} from './Header.styled';

function Header() {
  const {
    showBurgerMenu,
    handleShowBurgerMenu,
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
  );
}

export default Header;
