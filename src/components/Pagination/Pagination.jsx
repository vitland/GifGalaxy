import { useState } from 'react';
import PaginationButton from '../PaginationButton/PaginationButton'
import styles from './Pagination.module.scss';
const initializationState = [1, 2, 3, 4, 5]

const Pagination = ({fetchSearch, query, pagination}) => {
  const [pages, setPages] = useState(initializationState)
  const curentPage = (pagination.offset - 1) / 9 + 1
  const handleClick = (value) => {
    const offset = value * 9 - 8
    fetchSearch(query, offset)
    if(value > 3) {
      setPages(pages.map((page, index) => {
        return value - 2 + index
      }))
    } else {
      setPages(initializationState)
    }
  }
  return (
    <div className={styles.container}>
      <PaginationButton
        text='Назад'
        handleClick={handleClick}
        value={curentPage - 1}
        disabled={curentPage > 1 ? false : true} />
      <div className={styles.wrapper}>
        {pages.map(page => (
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
        disabled={false} />
    </div>
  )
}

export default Pagination