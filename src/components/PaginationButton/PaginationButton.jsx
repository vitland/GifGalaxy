import { useEffect, useState } from 'react';
import Button from '../Button/Button';

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
    <Button
      {...{disabled, isActive, isLoading, text}}
      handleClick={onClick} />
  )
}

export default PaginationButton