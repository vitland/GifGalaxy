import { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';
import styles from './Searchbar.module.scss';

const Searchbar = () => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const onClear = () => {
    setValue('');
  };

  return (
    <form className={styles.search} onSubmit={onSubmit}>
      <button type='submit'>
        <FaMagnifyingGlass className={styles.searchBtn} />
      </button>
      <input
        type='text'
        name='search'
        value={value}
        className={styles.input}
        onChange={onChange}
        placeholder='Поиск гиф'
      />
      <button type='button' onClick={onClear}>
        <FaXmark className={styles.clearBtn} />
      </button>
    </form>
  );
};

export default Searchbar;
