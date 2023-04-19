import React, { useState, useContext } from 'react';
import dat from '../data.json';

const Context = React.createContext();

export const useCont = () => {
  return useContext(Context);
};

export const ContextProvider = ({ children }) => {
  const [filter, setFilter] = useState('');
  const [showCardModal, setShowCardModal] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [busketData, setBusketData] = useState([]);
  const [showBusketModal, setShowBusketModal] = useState(false);

  const openCardModal = () => setShowCardModal(true);
  const closeCardModal = () => setShowCardModal(false);

  const openBusketModal = () => setShowBusketModal(true);
  const closeBusketModal = () => setShowBusketModal(false);

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const handleShowModalCard = (e, i) => {
    if (e.target.nodeName === 'LI') {
      setModalData(dat[i]);
      openCardModal();
    }
  };

  const TotalCount = busketData.reduce((acc, el) => Number(el.count) + acc, 0);

  const handleAddBusketData = i => {
    const findItem = busketData.find(obj => obj.id === dat[i].id);
    if (findItem) {
      busketData[busketData.indexOf(findItem)].count += 1;
      setBusketData(busketData);
    } else {
      setBusketData(prev => [...prev, { ...dat[i], count: 1 }]);
    }
  };

  const CountPlus = i => {
    busketData[i].count += 1;
    setBusketData(busketData);
  };
  const CountMinus = i => {
    if (busketData[i].count > 0) {
      busketData[i].count -= 1;
      setBusketData(busketData);
    }
  };

  const handleDeleteBusketItem = i => {
    busketData.splice(i, 1);
    setBusketData(busketData);
  };

  let data = dat;
  filter && (data = dat.filter(x => x.name.includes(filter.toUpperCase())));

  return (
    <Context.Provider
      value={{
        handleFilter,
        filter,
        data,
        showCardModal,
        handleShowModalCard,
        modalData,
        closeCardModal,
        openCardModal,
        handleAddBusketData,
        busketData,
        showBusketModal,
        openBusketModal,
        closeBusketModal,
        CountPlus,
        CountMinus,
        TotalCount,
        handleDeleteBusketItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};
