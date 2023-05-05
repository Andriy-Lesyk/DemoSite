import React from 'react';
import {
  List,
  Item,
  Text,
  TextTitle,
  ContactBox,
  EmailIcon,
  PhoneIcon,
  Link,
} from '../SideBar/SideBar.styled';
import { Div } from './SideBarConst.styled';
import { useCont } from 'components/Context/Context';

function SideBarConst() {
  const {
    handleFilterByTypeConst,
    handleDenyFilterConst,
    clickItem,
    arrTypesOfGoods,
  } = useCont();
  return (
    <div>
      <Div>
        <TextTitle onClick={handleDenyFilterConst}>Всі товари</TextTitle>
        <List>
          {arrTypesOfGoods.map((el, i) => (
            <Item
              style={{
                backgroundColor: i === clickItem ? ' #e5eb34' : 'transparent',
              }}
              key={i}
              onClick={() => handleFilterByTypeConst(i)}
            >
              <Text>{el}</Text>
            </Item>
          ))}
        </List>
        <TextTitle>Контакти</TextTitle>
        <ContactBox>
          <PhoneIcon />
          <Link href="#">
            <Text>+380669556494</Text>
          </Link>
        </ContactBox>
        <ContactBox style={{ marginTop: '8px' }}>
          <EmailIcon />
          <Link href="mailto: lesikandrey.uh@gmail.com">
            <Text>lesikandrey.uh@gmail.com</Text>
          </Link>
        </ContactBox>
        <TextTitle>Оплата і доставка</TextTitle>
        <TextTitle>Блог</TextTitle>
      </Div>
    </div>
  );
}

export default SideBarConst;
