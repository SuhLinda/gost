import {useState, useEffect} from 'react';

import {oksApi} from '../../utils/ApiOks';
import {LIST, ERROR} from '../../utils/utils';

import Announcement from '../Announcement/Announcement';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {
  const [listCards, setListCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [image, setImage] = useState('');
  const [text, setText] = useState('');

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

  function openInfoTooltip() {
    setInfoTooltipOpen(true);
  }

  function closeInfoTooltip() {
    setInfoTooltipOpen(false);
  }

  return (
    <div className="app">
      <Announcement
        listCards={listCards}
        setListCards={setListCards}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        openInfoTooltip={openInfoTooltip}
        closeInfoTooltip={closeInfoTooltip}
        setImage={setImage}
        setText={setText}
      />
      <InfoTooltip
        image={image}
        text={text}
        isOpen={isInfoTooltipOpen}
        onClose={closeInfoTooltip}
      />
    </div>
  )
}

export default App;
