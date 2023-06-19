import React, { forwardRef } from "react";
import styles from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} name={props.name} ref={ref} />
    </div>
  );
});

export default Input;
