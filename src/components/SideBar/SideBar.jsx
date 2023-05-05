import React from 'react';
import { Transition } from 'react-transition-group';
import {
  Div,
  List,
  Item,
  Text,
  TextTitle,
  ContactBox,
  EmailIcon,
  PhoneIcon,
  Link,
} from './SideBar.styled';
import { useCont } from 'components/Context/Context';

function SideBar() {
  const {
    handleFilterByType,
    handleDenyFilter,
    clickItem,
    showSideBar,
    arrTypesOfGoods,
  } = useCont();

  return (
    <div>
      <Transition in={showSideBar} timeout={400} mountOnEnter unmountOnExit>
        {state => (
          <Div className={state}>
            <TextTitle onClick={handleDenyFilter}>Всі товари</TextTitle>
            <List>
              {arrTypesOfGoods.map((el, i) => (
                <Item
                  style={{
                    backgroundColor:
                      i === clickItem ? ' #e5eb34' : 'transparent',
                  }}
                  key={i}
                  onClick={() => handleFilterByType(i)}
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
        )}
      </Transition>
    </div>
  );
}

export default SideBar;
