import React, { useState } from 'react';
import styles from './App.module.scss';
//import Counter from './components/Counter';
import EmployeeCard from './components/Employee';

import team from './data/team';


const App = () => {

  const getEmployeeCardJsx = (employee) => (
    <div key={employee.id}>
      <EmployeeCard employee={employee} />
    </div>
  );

  return (    
    <div className={styles.app}>
      <h1 className={styles.header}>Ticket Tracker</h1>
      <section className={styles.team}>{team.map(getEmployeeCardJsx)}</section>    
    </div>    
   );
}

export default App;
