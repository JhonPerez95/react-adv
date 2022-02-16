import styles from '../styles/styles.module.css'
import noImg from '../assets/no-image.jpg'
import { useState } from 'react'
export const ProductCard = () => {
  const [counter, setCounter] = useState(0)

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0))
  }
  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src="./coffee-mug.png"
        alt="coffe Mug"
      />
      {/* <img  className={styles.productImg} src={noImg} alt="coffe Mug" /> */}
      <span className={styles.productDescription}>Coffe Mug</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}> {counter} </div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
          +
        </button>
      </div>
    </div>
  )
}
