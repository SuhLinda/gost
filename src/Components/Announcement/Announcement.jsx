import { useState } from 'react';

import { oksApi } from '../../utils/ApiOks.jsx';
import {
  regexp,
  LIST,
  ANNOUNCEMENT,
  NAME,
  OKS,
  PLACE_AN_AD,
  TEXT_BASED_OKS,
  CARD
} from '../../utils/utils.jsx';

import Option from '../Option/Option';
import List from '../List/List';
import Results from '../Results/Results';
import Preloader from '../Preloader/Preloader';

function Announcement({listCards, isLoading, setIsLoading}) {
  const [search, setSearch] = useState([]);
  const [arrSearch, setArrSearch] = useState({});
  const [data, setData] = useState([]);
  const [choice, setChoice] = useState([]);
  const [coincidence, setCoincidence] = useState(false);


  async function handleWordsSearch() {
    if (search.length > 0) {
      try {
        const arrSearch = search.match(regexp);
        setArrSearch(arrSearch);

        if (arrSearch) {
          oksApi.searchOks(arrSearch)
            .then((data) => {
              // Init an array for holding rows data
              const results = [];

              data.forEach((element) => {
                results.push(element);
              })

              setData(results);
            })
            .catch((err) => {
              console.log(`ошибка: ${err}`);
            })
        } else {
          //вывести окно с предложением о несоответствии с базой
        }
      } catch (err) {
        console.log(`ошибка: ${err}`);
      } finally {
        //
      }
    }
  }

  async function handleChange(evt) {

    evt.preventDefault();

    const arrOks = JSON.parse(localStorage.getItem(LIST));

    // Init an array for holding rows data
    let oks = [];

    arrOks.forEach((element) => {

      if (element.name === evt.target.value) {
        oks.push(element);
        if (evt) {

            console.log('item')

        }
      }
    })
    setChoice(oks);
    setCoincidence(true);

    localStorage.setItem(CARD, JSON.stringify(oks));
  }

  function handleSearchChange(evt) {
    setSearch(evt.target.value);
  }

  function handleSearchSubmit(evt) {
    evt.preventDefault();

    if (!search) {
      //setIsSearchErr(true);
      return;
    }
    handleWordsSearch();
  }

  return (
    <section className="announcement">
      <h2 className="announcement__title">{ANNOUNCEMENT}</h2>
      <form
        className="announcement__form"
        name="myForm"
        onSubmit={handleSearchSubmit}
      >
        <fieldset className="announcement__fieldset">
          <label className="announcement__label">{NAME}</label>
          <input
            className="announcement__input"
            placeholder="Введите название объявления"
            type="text"
            minLength="10"
          />
          <label className="announcement__label">{ANNOUNCEMENT}</label>
          <textarea
            className="announcement__input announcement__textarea"
            placeholder="Введите текст объявления"
            onChange={handleSearchChange}
          />
          <label className="announcement__label">{OKS}</label>
          {isLoading ? (
            <Preloader/>
          ) : (
            <select
              className="announcement__select"
              multiple
              name="formSelected"
              onChange={handleChange}
            >
              {listCards.map((item) => {
                return <Option
                  key={item.code}
                  code={item.code}
                  name={item.name}
                  value={item.name}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              })}
            </select>
          )}
        </fieldset>
        <div className="announcement__btns">
          <button
            className="announcement__btn"
            type="button"
          >
            {PLACE_AN_AD}
          </button>
          <button
            className="announcement__btn"
            type="submit"
          >
            {TEXT_BASED_OKS}
          </button>
        </div>
      </form>
      <List
        choice={choice}
        coincidence={coincidence}
      />
      <Results
        key={data.query}
        data={data}
      />
    </section>)
}

export default Announcement;
