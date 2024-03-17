import { numberFormat } from '../../utils/functions';

function Card({ code, name, price, choice }) {

  return (
    <>
      <ul className={choice ? "list__container card__active" : "list__container card"}>
        <h3 className="card__text">{code}</h3>
        <h3 className="card__text">{name}</h3>
        <h3 className="card__text">{`${price} p`}</h3>
      </ul>
    </>
  )
}

export default Card;
