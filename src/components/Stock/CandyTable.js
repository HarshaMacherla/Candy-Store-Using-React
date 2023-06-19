import React, { useContext } from "react";
import styles from "./CandyTable.module.css";
import CandyContext from "../../candy-context/CandyContext";

const CandyTable = (props) => {
  const { candyStock, candyCart } = useContext(CandyContext);

  const addToCart = (candy, quantity) => {
    candyCart.addToCart({ ...candy, quantity: quantity });
  };

  const candyItems = candyStock.stock.map((candy) => (
    <tr key={candy.name}>
      <td>{candy.name}</td>
      <td>{candy.description}</td>
      <td>{candy.price}</td>
      <td>
        <button onClick={() => addToCart(candy, 1)}>Buy 1</button>
      </td>
      <td>
        <button onClick={() => addToCart(candy, 2)}>But 2</button>
      </td>
      <td>
        <button onClick={() => addToCart(candy, 3)}>Buy 3</button>
      </td>
    </tr>
  ));

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Candy Name</th>
          <th>Description</th>
          <th>Price</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>{candyItems}</tbody>
    </table>
  );
};

export default CandyTable;
