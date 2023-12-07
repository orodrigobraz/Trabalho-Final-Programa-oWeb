<<<<<<<< HEAD:front/src/Components/Forms/Input.jsx
import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name, value, onChange, error, onBlur, min }) => {
  return (
    <div className={styles.wrapper}>
        <label htmlFor={name} className={styles.label}> {label} </label>
        <input id={name} name={name} className={styles.input} type={type} value={value} onChange={onChange} onBlur={onBlur} min={min}/>
        {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

========
import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
        <label htmlFor={name} className={styles.label}> {label} </label>
        <input id={name} name={name} className={styles.input} type={type} value={value} onChange={onChange} onBlur={onBlur}/>
        {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

>>>>>>>> parent of dd5c0a7 (Merge branch 'main' of https://github.com/orodrigobraz/Trabalho-Final-ProgramacaoWeb):src/Components/Forms/Input.jsx
export default Input;