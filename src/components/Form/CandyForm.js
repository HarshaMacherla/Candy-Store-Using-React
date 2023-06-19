import React, { useContext, useRef } from "react";
import Input from "./Input";
import styles from "./CandyForm.module.css";
import CandyContext from "../../candy-context/CandyContext";

const CandyForm = (props) => {
  const { candyStock } = useContext(CandyContext);

  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const price = parseInt(priceRef.current.value);

    candyStock.addToStock({
      name,
      description,
      price,
    });

    nameRef.current.value = "";
    descriptionRef.current.value = "";
    priceRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input
        type="text"
        id="candyName"
        name="CandyName"
        label="Candy Name"
        ref={nameRef}
      />
      <Input
        type="text"
        id="description"
        name="Description"
        label="Description"
        ref={descriptionRef}
      />
      <Input
        type="number"
        id="price"
        name="Price"
        label="Price"
        ref={priceRef}
      />
      <button type="submit">Add Candy</button>
    </form>
  );
};

export default CandyForm;
