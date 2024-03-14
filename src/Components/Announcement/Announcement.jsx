import { useState, useEffect } from 'react';

import Option from '../Option/Option';

import './Announcement.css';

function Announcement({listCards}) {
  const [search, setSearch] = useState(JSON.parse(localStorage.getItem('search')) || []);

  useEffect(() => {
    const searchWords = JSON.parse(localStorage.getItem('search'));
    console.log('1')

    if (searchWords.length > 0) {
      console.log(searchWords)
    } else {
    setSearch([]);
  }
}, [search] );

async function handleWordsSearch(words) {

  if (search.length > 0) {
    return listCards.filter((words, search) => {
      setSearch(search);

    })
  }
}

function handleSearchChange(evt) {
  setSearch(evt.target.value);

  localStorage.setItem('search', JSON.stringify(evt.target.value));
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
