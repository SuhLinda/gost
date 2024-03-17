import { CODE, NAME, PRICE } from '../../utils/utils';

import Card from '../Card/Card';

function List({ choice, coincidence }) {

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
    </section>
  )
}

export default List;
