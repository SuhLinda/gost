function Option({ code, name, value }) {
  return (
    <option className="option" value={value}>
      {`${code} ${name}`}
    </option>
  )
}

export default Option;
