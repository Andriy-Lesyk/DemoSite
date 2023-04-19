import React from 'react';
import Container from 'components/Container/Container';
import Logo from 'components/Logo/Logo';
import {
  SectionTop,
  Inform,
  SectionBox,
  InformBox,
  Head,
} from './Header.styled';

function Header() {
  return (
    <Head>
      <SectionTop>
        <Container>
          <SectionBox>
            <Logo />
            <InformBox>
              <Inform>КОНТАКТИ</Inform>
              <Inform>ОПЛАТА І ДОСТАВКА</Inform>
              <Inform>БЛОГ</Inform>
            </InformBox>
          </SectionBox>
        </Container>
      </SectionTop>
    </Head>
  );
}

export default Header;
