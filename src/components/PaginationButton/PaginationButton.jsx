import { useEffect, useState } from 'react';
import styles from './PaginationButton.module.scss';

const PaginationButton = ({text, handleClick, value, curentPage, disabled}) => {
    const [isLoading, setIsLoading] = useState(false)
    const isActive = curentPage === text ? true: false
    const onClick = () => {
        setIsLoading(true)
        handleClick(value)
    }
    useEffect(() => {
        setIsLoading(false)
    }, [value, curentPage])
    
  return (
    <button
        className={`${styles.button} ${isLoading && styles.load} ${isActive && styles.active} ${disabled && styles.disabled}`}
        onClick={onClick}
        disabled={isLoading || disabled || isActive} >
            {text}
    </button>
  )
}

export default PaginationButton