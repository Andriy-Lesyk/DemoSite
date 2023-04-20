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
  const [heartData, setHeartData] = useState([]);
  const [showHeartModal, setShowHeartModal] = useState(false);

  const openCardModal = () => setShowCardModal(true);
  const closeCardModal = () => setShowCardModal(false);

  const openBusketModal = () => setShowBusketModal(true);
  const closeBusketModal = () => setShowBusketModal(false);

  const openHeartModal = () => setShowHeartModal(true);
  const closeHeartModal = () => setShowHeartModal(false);

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
      setBusketData([...busketData]);
    } else {
      setBusketData(prev => [...prev, { ...dat[i], count: 1 }]);
    }
  };

  const CountPlus = i => {
    busketData[i].count += 1;
    setBusketData([...busketData]);
  };
  const CountMinus = i => {
    if (busketData[i].count > 0) {
      busketData[i].count -= 1;
      setBusketData([...busketData]);
    }
  };

  const handleDeleteBusketItem = i => {
    if (window.confirm('Дійсно хочете видалити товар?')) {
      const busk = busketData.filter(x => x !== busketData[i]);
      setBusketData(busk);
    }
  };
  const handleAddHeartItem = i => {
    if (!heartData.includes(dat[i])) {
      heartData.push(dat[i]);
      setHeartData([...heartData]);
    }
  };

  const handleDeleteHeartItem = i => {
    const del = heartData.filter(x => x !== heartData[i]);
    setHeartData(del);
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
        openHeartModal,
        closeHeartModal,
        showHeartModal,
        handleAddHeartItem,
        heartData,
        handleDeleteHeartItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};
