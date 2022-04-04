import React, { useState } from "react";
import styles from './Counter.module.scss';


const Counter = () => {
  const [count, setCount] = useState(0)
 
  return (
    <div className={styles.counter}>
      <p>Counter</p>
      <div className={styles.countContainer}>
        <button className={styles.button} onClick={() => setCount(count - 1)}>-</button>
        <span className={styles.count}>{count}</span>
        <button className={styles.button} onClick={() => setCount(count + 1)}>+</button>
      </div>

    </div>
  )
}

export default Counter;
