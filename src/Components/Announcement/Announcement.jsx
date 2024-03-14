import { useState } from 'react';

//import { oksApi } from '../../utils/ApiOks.jsx';
import { breakpoint } from '../../utils/utils.jsx';

import Option from '../Option/Option';

import './Announcement.css';

function Announcement({listCards}) {
  const [search, setSearch] = useState([]);
  const [arraySearch, setArraySearch] = useState({})

  async function handleWordsSearch() {
    if (search.length > 0) {
      try {
        const arrSearch = search.split(breakpoint && " ");
        setArraySearch(arrSearch);
        arrSearch.filter((item) => {
          if (item.match('ГОСТ')) {

            console.log(item)
          }

        })


      } catch (err) {
        console.log(`ошибка: ${err}`);
      } finally {
      }
    }
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
      <h2 className="announcement__title">Объявление</h2>
      <form
        className="announcement__form"
        onSubmit={handleSearchSubmit}
      >
        <fieldset className="announcement__fieldset">
          <label className="announcement__label">Название</label>
          <input
            className="announcement__input"
            placeholder="Введите название объявления"
            type="text"
            minLength="10"
          />
          <label className="announcement__label">Объявление</label>
          <textarea
            className="announcement__input announcement__textarea"
            placeholder="Введите текст объявления"
            onChange={handleSearchChange}
          />
          <label className="announcement__label">Выберите ОКС</label>
          <select
            className="announcement__select"
            multiple="20"
          >
            {listCards.map((item) => {
              return <Option
                code={item.code}
                name={item.name}
              />
            })}
          </select>
        </fieldset>
        <div className="announcement__btns">
          <button
            className="announcement__btn"
            type="submit"
          >
            Разместить объявление
          </button>
          <button
            className="announcement__btn"
            type="submit"
          >
            Подобрать ОКС на основе текста объявления
          </button>
        </div>
      </form>
    </section>
  )
}

export default Announcement;
