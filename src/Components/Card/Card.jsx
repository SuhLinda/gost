import './Card.css';

function Card({ code, name, price }) {
  return (
    <ul className="list__container card">
      <h3 className="card__text">{code}</h3>
      <h3 className="card__text">{name}</h3>
      <h3 className="card__text">{`${price} p`}</h3>
    </ul>
  )
}

export default Card;
