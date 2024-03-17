import { CODE, NAME, PRICE } from '../../utils/utils';

import Card from '../Card/Card';
import {numberFormat} from "../../utils/functions";
import {useState} from "react";

function List({ choice, coincidence, sum, setSum }) {

  return (
    <section className={coincidence ? "list__active" : "list"}>
      <ul className="list__container">
        <h3 className="list__title">{CODE}</h3>
        <h3 className="list__title">{NAME}</h3>
        <h3 className="list__title">{PRICE}</h3>
      </ul>
      {choice.map((item) => {
        return <Card
          key={item.code}
          code={item.code}
          name={item.name}
          price={item.price}
          choice={choice}
        />
      })}
      <span className="card__vector"></span>
      <p className="card__sum">ИТОГО:&nbsp;
        <span>{numberFormat(sum)} ₽</span>
      </p>
    </section>
  )
}

export default List;
