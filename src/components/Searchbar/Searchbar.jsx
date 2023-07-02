import { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';
import styles from './Searchbar.module.scss';

const Searchbar = ({ onChange, onSubmit, onClear, query }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <form
      className={
        isActive ? `${styles.search} ${styles.active}` : `${styles.search}`
      }
      onSubmit={onSubmit}>
      <button type='submit'>
        <FaMagnifyingGlass
          className={
            isActive
              ? `${styles.searchBtn} ${styles.active}`
              : `${styles.searchBtn}`
          }
        />
      </button>
      <input
        type='text'
        name='search'
        value={query}
        className={styles.input}
        onChange={onChange}
        placeholder='Поиск гиф'
        onFocus={toggleActive}
        onBlur={toggleActive}
      />
      <button type='button' onClick={onClear}>
        <FaXmark
          className={
            isActive
              ? `${styles.clearBtn} ${styles.active}`
              : `${styles.clearBtn}`
          }
        />
      </button>
    </form>
  );
};

export default Searchbar;
