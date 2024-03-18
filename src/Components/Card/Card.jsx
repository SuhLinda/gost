import {useState} from "react";

function Card({ code, name, price, choice, setChoice, isSelected, setIsSelected }) {
  const [elementIndex, setElementIndex] = useState([]);

  function handleClickClose() {
    choice.filter((item) => {
      // console.log(item.code)
      return setElementIndex(item.code)
      // console.log(elementIndex)
    })

    console.log(choice);
    console.log(elementIndex);
    let result = choice.splice(elementIndex, 1);

    setChoice(choice)

    console.log(result);
    // setIsSelected(false);
  }

  return (
    <>
      {isSelected &&
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
      }
    </>
  )
}

export default Card;
