import { useState, useEffect } from 'react';

import { oksApi } from '../../utils/ApiOks';
import { LIST, ERROR } from '../../utils/utils';

import Announcement from '../Announcement/Announcement';

function App() {
  const [listCards, setListCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    oksApi.getOks()
      .then((listCards) => {
        setIsLoading(true);
        setListCards(listCards);
        localStorage.setItem(LIST, JSON.stringify(listCards));
      })
      .catch((err) => {
        console.log(`ERROR ${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  return (
    <div className="app">
      <Announcement
        listCards={listCards}
        setListCards={setListCards}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

export default App;
