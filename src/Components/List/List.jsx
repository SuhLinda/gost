import { CODE, NAME, PRICE, NUMBER_ZERO } from '../../utils/utils';

import { numberFormat } from '../../utils/functions';

import Card from '../Card/Card';

function List({ choice, setChoice, coincidence, setCoincidence, setIsSearchErr, setIsDisabled }) {
  let total = NUMBER_ZERO;

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
          setCoincidence={setCoincidence}
          setIsSearchErr={setIsSearchErr}
          setIsDisabled={setIsDisabled}
        />
      })}
      <span className="card__vector"></span>
      <p className="card__sum">ИТОГО:&nbsp;
        <span>
          {numberFormat(total)} ₽
        </span>
      </p>
    </section>
  )
}

export default List;
