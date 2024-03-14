import Card from '../Card/Card';

import './List.css';

function List({ listCards, setListCards }) {

  return (
    <section className="list">
      <ul className="list__container">
        <h3 className="list__title">Код</h3>
        <h3 className="list__title">Название</h3>
        <h3 className="list__title">Цена</h3>
      </ul>
      {listCards.map((item) => {
        return <Card
          code={item.code}
          name={item.name}
          price={item.price}
        />
      })}
    </section>
  )
}

export default List;
