import Header from './Header/Header';
import AboutGoods from './AboutGoods/AboutGoods';
import CardsBlock from './CardsBlock/CardsBlock';
import Footer from './Footer/Footer';
import { ContextProvider } from './Context/Context';

export const App = () => {
  return (
    <ContextProvider>
      <Header />
      <AboutGoods />
      <CardsBlock />
      <Footer />
    </ContextProvider>
  );
};
