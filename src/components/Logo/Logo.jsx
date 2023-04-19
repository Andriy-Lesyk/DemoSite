import React from 'react';
import { Log, MainText, Text, LogBox, LogoTopBox } from './Logo.styled';

function Logo() {
  return (
    <LogBox>
      <LogoTopBox>
        <Log />
        <MainText>KUPUYVSE</MainText>
      </LogoTopBox>
      <Text>you can</Text>
    </LogBox>
  );
}

export default Logo;
