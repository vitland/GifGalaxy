import { useEffect, useState } from 'react';
import PaginationButton from '../PaginationButton/PaginationButton';
import styles from './Pagination.module.scss';
import getPaginationNumbers from './getPaginationNumbers';

const Pagination = ({ fetchSearch, query, pagination }) => {
  const [pages, setPages] = useState(null)
  const [curentPage, setCurentPage] = useState(1)
  useEffect(() => {
    setCurentPage((pagination.offset - 1) / 9 + 1)
    setPages(getPaginationNumbers(curentPage, pagination.total_count))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.offset, curentPage, query])

  const handleClick = (value) => {
    const offset = value * 9 - 8
    fetchSearch(query, offset)
  }
  return (
    <div className={styles.container}>
      <PaginationButton
        text='Назад'
        handleClick={handleClick}
        value={curentPage - 1}
        disabled={curentPage <= 1} />
      <div className={styles.wrapper}>
        {pages && pages.map(page => (
          <PaginationButton
            key={page}
            text={page}
            curentPage={curentPage}
            handleClick={handleClick}
            value={page}
            disabled={false} />
        ))}
      </div>
      <PaginationButton
        text='Вперед'
        handleClick={handleClick}
        value={curentPage + 1}
        disabled={curentPage * 9 >= pagination.total_count} />
    </div>
  )
}

export default Pagination