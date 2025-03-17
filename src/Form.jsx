import PropTypes from "prop-types";

Form.propTypes = {
  onHandler: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

function Form({ onHandler, query, setQuery }) {
  return (
    <form onSubmit={onHandler}>
      <input
        type="text"
        placeholder="Please Enter Your City"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default Form;
