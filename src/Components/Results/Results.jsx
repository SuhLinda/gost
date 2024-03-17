import {CODE_OKS} from '../../utils/utils';

function Results({data}) {
  return (
    <>
      {data.map((item) => {
        return (
          <ul className="results">
            <li
              className="results__text"
            >
              {item.query}&#58;&nbsp;
              <span>
                {CODE_OKS}&nbsp;{item.results}
              </span>
              </li>
            </ul>
          )}
      )}
    </>
  )
}

export default Results;
