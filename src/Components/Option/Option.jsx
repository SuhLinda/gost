import './Option.css';

function Option({ code, name }) {
  return (
    <option>
      {`${code} ${name}`}
    </option>
)
}

export default Option;
