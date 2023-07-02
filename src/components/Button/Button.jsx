import styles from './Button.module.scss';

const Button = ({text, handleClick, disabled, isLoading, isActive}) => {
    
  return (
    <button
        className={`${styles.button} ${isLoading && styles.load} ${isActive && styles.active} ${disabled && styles.disabled}`}
        onClick={handleClick}
        disabled={isLoading || disabled || isActive} >
            {text}
    </button>
  )
}

export default Button