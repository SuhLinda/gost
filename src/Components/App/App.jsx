import { useState, useEffect } from 'react';

import { oksApi } from '../../utils/ApiOks.jsx';

import Announcement from '../Announcement/Announcement';
import List from '../List/List';

import './App.css';

function App() {
  const [listCards, setListCards] = useState(JSON.parse(localStorage.getItem('list')) || []);

  useEffect(() => {
    oksApi.getOks()
      .then((listCards) => {
        setListCards(listCards);
        localStorage.setItem('list', JSON.stringify(listCards));
      })
      .catch((err) => {
        console.log(`ошибка: ${err}`);
      })
      .finally(() => {

      })
  }, []);

  async function handleWordsSearch(words, search) {

    return listCards.filter((words) => {
      console.log(words, search)
    })
  }

  return (
    <div className="app">
      <Announcement
        listCards={listCards}
        setListCards={setListCards}
        onSearch={handleWordsSearch}
      />
      <List
        listCards={listCards}
        setListCards={setListCards}
      />
    </div>
  );
}

export default App;
