import React from "react";
import Counter from "../Counter";
import styles from './Employee.module.scss';


const EmployeeCard = (props) => {
  const {
    name,
    role,
  } = props.employee;

  return (    
    <div className={styles.employeeCard}>
      {/* <p>employee card working</p> */}
      
      <p data-testid='name' className={styles.name}>{name}</p>
      <p data-testid='role' className={styles.role}>{role}</p>      
      <Counter />
    </div>
  )
}

export default EmployeeCard;
