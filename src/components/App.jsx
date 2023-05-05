import Header from './Header/Header';
import MainBlock from './MainBlock/MainBlock';
import Footer from './Footer/Footer';
import { ContextProvider } from './Context/Context';

export const App = () => {
  return (
    <ContextProvider>
      <Header />
      <MainBlock />
      <Footer />
    </ContextProvider>
  );
};
