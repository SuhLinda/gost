import { CODE, NAME, PRICE } from '../../utils/utils';

import Card from '../Card/Card';
import {numberFormat} from "../../utils/functions";

function List({ choice, setChoice, coincidence, isSelected, setIsSelected }) {
  let total = 0;

  return (
    <section className={coincidence ? "list__active" : "list"}>
      <ul className="list__container">
        <h3 className="list__title">{CODE}</h3>
        <h3 className="list__title">{NAME}</h3>
        <h3 className="list__title">{PRICE}</h3>
      </ul>
      {choice.map((item) => {
        total += item.price;
        return <Card
          key={item.code}
          code={item.code}
          name={item.name}
          price={item.price}
          choice={choice}
          setChoice={setChoice}
          elementIndex={item.code}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      })}
      <span className="card__vector"></span>
      <p className="card__sum">ИТОГО:&nbsp;
        <span>{numberFormat(total)} ₽</span>
      </p>
    </section>
  )
}

export default List;
