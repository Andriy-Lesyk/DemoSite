import React, { useState, useContext } from 'react';
import dat from '../data.json';

const Context = React.createContext();

export const useCont = () => {
  return useContext(Context);
};

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState(dat);
  const [showCardModal, setShowCardModal] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [busketData, setBusketData] = useState([]);
  const [showBusketModal, setShowBusketModal] = useState(false);
  const [heartData, setHeartData] = useState([]);
  const [showHeartModal, setShowHeartModal] = useState(false);
  const [clickItem, setClickItem] = useState(null);
  const [showSideBar, setShowSideBar] = useState(false);
  const [clickHeartData, setClickHeartData] = useState([]);
  const [arrTypesOfGoods, setArrTypesOfGoods] = useState([
    'Портативні зарядні пристрої',
    'Інвертори',
    'Портативні електростанції',
    'Контролери',
  ]);

  const handleToggleSideBar = () => setShowSideBar(!showSideBar);

  const handleCloseSideBar = () => setShowSideBar(false);

  const openCardModal = () => setShowCardModal(true);
  const closeCardModal = () => setShowCardModal(false);

  const openBusketModal = () => setShowBusketModal(true);
  const closeBusketModal = () => setShowBusketModal(false);

  const openHeartModal = () => setShowHeartModal(true);
  const closeHeartModal = () => setShowHeartModal(false);

  let filter;

  const handleFilter = e => {
    filter = e.currentTarget.value;
    let dataFil = dat;
    if (filter) {
      dataFil = data.filter(x => x.name.includes(filter.toUpperCase()));
      setData(dataFil);
    } else {
      setData(dat);
    }
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
    if (window.confirm('Ви дійсно хочете видалити товар?')) {
      const busk = busketData.filter(x => x !== busketData[i]);
      setBusketData(busk);
    }
  };
  const handleCleanBusket = () => {
    if (window.confirm('Ви бажаєте очистити кошик?')) {
      setBusketData([]);
    }
  };
  const handleToggleHeartItem = i => {
    if (!heartData.includes(dat[i])) {
      heartData.push(dat[i]);
      setHeartData([...heartData]);
      clickHeartData.push(i);
      setClickHeartData([...clickHeartData]);
    } else {
      if (heartData.length === 1) {
        let arr = heartData;
        arr.splice(0, 1);
        setHeartData([...arr]);
      } else {
        const del = heartData.filter(
          x => x !== heartData[heartData.indexOf(dat[i])]
        );
        setHeartData(del);
      }
      if (clickHeartData.length === 1) {
        let arr = clickHeartData;
        arr.splice(0, 1);
        setClickHeartData([...arr]);
      } else {
        const delet = clickHeartData.filter(x => x !== i);
        setClickHeartData(delet);
      }
    }
  };

  const handleDeleteHeartItem = i => {
    const del = heartData.filter(x => x !== heartData[i]);
    let arr = clickHeartData.filter(x => x !== dat.indexOf(heartData[i]));
    setClickHeartData(arr);
    setHeartData(del);
  };

  const handleFilterByType = i => {
    const filter = dat.filter(x => Number(x.type) === i);
    setData(filter);
    setClickItem(i);
    handleCloseSideBar();
  };
  const handleDenyFilter = () => {
    setData(dat);
    setClickItem(null);
    handleCloseSideBar();
  };
  const handleFilterByTypeConst = i => {
    const filter = dat.filter(x => Number(x.type) === i);
    setData(filter);
    setClickItem(i);
  };
  const handleDenyFilterConst = () => {
    setData(dat);
    setClickItem(null);
  };

  return (
    <Context.Provider
      value={{
        handleFilter,
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
        handleToggleHeartItem,
        heartData,
        handleDeleteHeartItem,
        handleCleanBusket,
        handleFilterByType,
        handleDenyFilter,
        clickItem,
        showSideBar,
        handleToggleSideBar,
        handleFilterByTypeConst,
        handleDenyFilterConst,
        arrTypesOfGoods,
        clickHeartData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
