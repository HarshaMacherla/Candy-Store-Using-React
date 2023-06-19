import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CandyContext from "../../candy-context/CandyContext";
import styles from "./CandyCart.module.css";

const CandyCart = (props) => {
  const { candyCart } = useContext(CandyContext);

  let totalCost = 0;

  const candyList = candyCart.cart.map((candy) => {
    totalCost += candy.price * candy.quantity;
    return (
      <li key={candy.name}>
        <div>
          <span className={styles.name}>{candy.name}</span>
          {` X${candy.quantity}`}
        </div>
        <div>Rs. {candy.price} for each</div>
        <hr />
      </li>
    );
  });

  return (
    <Modal>
      <ul className={styles["list-items"]}>{candyList}</ul>
      <div className={styles.payment}>
        <h2 className={styles.total}>
          Total Cost: <span className={styles.amount}>Rs. {totalCost}</span>
        </h2>
        <button>Order</button>
        <button onClick={() => props.setCartIsShown(false)}>Close</button>
      </div>
    </Modal>
  );
};

export default CandyCart;
