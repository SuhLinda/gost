import { useState } from 'react';

function Card({ code, name, price, choice, setChoice, setCoincidence, setIsSearchErr, setIsDisabled }) {
  const [elementIndex, setElementIndex] = useState([]);

  function handleClickClose() {
    choice.filter((item) => {
      return setElementIndex(item.code);
    })

    choice.splice(elementIndex, 1);

    setChoice((state) =>
      state.filter((item) =>
        item
      ));

    if (choice.length > 0) {
      setCoincidence(true);
      setIsSearchErr(false);
      setIsDisabled(false);
    } else {
      setCoincidence(false);
      setIsSearchErr(true);
      setIsDisabled(true);
    }
  }

  return (
    <ul className={choice ? "list__container card__active" : "list__container card"}>
      <h3 className="card__text">{code}</h3>
      <h3 className="card__text">{name}</h3>
      <h3 className="card__text">{`${price} p`}</h3>
      <button
        className="card__btn-close"
        type="button"
        onClick={handleClickClose}
      >
        X
      </button>
    </ul>
  )
}

export default Card;
