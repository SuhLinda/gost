import { useState, useEffect } from 'react';

import { oksApi } from '../../utils/ApiOks.jsx';

import Announcement from '../Announcement/Announcement';
import List from '../List/List';

import './App.css';

function App() {
  const [listCards, setListCards] = useState([]);

  useEffect(() => {
    oksApi.getOks()
      .then((listCards) => {
        setListCards(listCards);
      })
      .catch((err) => {
        console.log(`ошибка: ${err}`);
      })
      .finally(() => {

      })
  }, []);

  return (
    <div className="app">
      <Announcement
        listCards={listCards}
        setListCards={setListCards}
      />
      <List
        listCards={listCards}
        setListCards={setListCards}
      />
    </div>
  );
}

export default App;
