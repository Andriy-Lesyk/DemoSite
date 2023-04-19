import React from 'react';
import { Div } from './Container.styled';

function Container({ children }) {
  return <Div>{children}</Div>;
}

export default Container;
