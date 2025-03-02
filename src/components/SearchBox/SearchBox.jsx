import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search contacts..."
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default SearchBox;