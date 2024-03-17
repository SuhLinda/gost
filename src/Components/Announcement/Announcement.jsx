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
  CARD,
  SELECT_OKS_SECTION,
  SUCCESSFULLY_POSTED,
} from '../../utils/utils.jsx';

import imageInfoTooltipSuccess from '../../images/info-tooltip_successfully.svg';

import Option from '../Option/Option';
import List from '../List/List';
import Results from '../Results/Results';
import Preloader from '../Preloader/Preloader';

function Announcement({ listCards, isLoading, setIsLoading, openInfoTooltip, setImage, setText }) {
  const [search, setSearch] = useState([]);
  const [arrSearch, setArrSearch] = useState({});
  const [data, setData] = useState([]);
  const [choice, setChoice] = useState([]);
  const [coincidence, setCoincidence] = useState(false);
  const [isSearchErr, setIsSearchErr] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [value, setValue] = useState([]);
  const [sum, setSum] = useState([]);

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
        }
      } catch (err) {
        console.log(`ошибка: ${err}`);
      }
    }
  }

  function handleChange(evt) {
    evt.preventDefault();

    const arrOks = JSON.parse(localStorage.getItem(LIST));
    let selectedOks = [];
    let sumOks = [];
    let options = evt.target.options;

    let selectedValues = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    arrOks.forEach((item) => {
      selectedValues.forEach((value) => {
        if (item.name === value) {
          selectedOks.push(item);
          sumOks.push(item.price);
        }
      })
    });

    calculateTheAmount();

    setChoice(selectedOks);
    setSum(sumOks);
    setCoincidence(true);
    setIsSearchErr(false);
    setIsDisabled(false);
    localStorage.setItem(CARD, JSON.stringify(selectedValues));
  }

  function calculateTheAmount() {
    if (sum.length > 0) {
      for (let i = 0, l = sum.length; i < l; i++) {
        console.log(sum)
      }
    }
  }

  function handleSearchChange(evt) {
    setSearch(evt.target.value);
  }

  function handleValueChange(evt) {
    setValue(evt.target.value)
  }

  function handleSearchSubmit(evt) {
    evt.preventDefault();

    if (!search) {
      setIsSearchErr(true);
      return;
    }
    handleWordsSearch();
  }

  function handleBtnClick() {
    openInfoTooltip();
    setImage(imageInfoTooltipSuccess);
    setText(`${ANNOUNCEMENT} ${value} ${SUCCESSFULLY_POSTED}`);
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
            name="name"
            minLength="2"
            onChange={handleValueChange}
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
        {isSearchErr &&
          <span className="announcement__error">{SELECT_OKS_SECTION}</span>
        }
        <div className="announcement__btns">
          {isDisabled ? (
            <button
            className="announcement__btn"
            type="button"
            disabled="disabled"
          >
            {PLACE_AN_AD}
          </button>
          ) : (
              <button
              className="announcement__btn"
              type="button"
              onClick={handleBtnClick}
            >
              {PLACE_AN_AD}
            </button>
            )}
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
        sum={sum}
        setSum={setSum}
      />
      <Results
        key={data.query}
        data={data}
      />
    </section>
  )
}

export default Announcement;
