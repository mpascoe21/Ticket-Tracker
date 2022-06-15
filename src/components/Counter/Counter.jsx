import React, { useState } from "react";
import styles from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const limitDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.counter}>
      <p>Counter</p>
      <div className={styles.countContainer}>
        <button className={styles.button} onClick={() => limitDecrement()}>
          -
        </button>
        <span className={styles.count}>{count}</span>
        <button className={styles.button} onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
