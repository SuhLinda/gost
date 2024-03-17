import { CODE_OKS } from '../../utils/utils';

function Results({ data }) {
  return (
    <div className="results">
      <ul className="results__list">
        {data.map((item) => {
            return (
              <li
                className="results__text"
                key={item.query}
              >
                {item.query}&#58;&nbsp;
                <span key={item.results}>
                {CODE_OKS}&nbsp;{item.results}
              </span>
              </li>
            )}
        )}
      </ul>
    </div>
  )
}

export default Results;
