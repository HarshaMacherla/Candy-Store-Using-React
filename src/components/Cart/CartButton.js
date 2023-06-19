import React, { useContext } from "react";
import styles from "./CartButton.module.css";
import CandyContext from "../../candy-context/CandyContext";

const CartButton = (props) => {
  const { candyCart } = useContext(CandyContext);

  return (
    <button
      onClick={() => props.setCartIsShown(true)}
      className={styles.button}
    >
      {`Cart ${candyCart.totalCandies > 0 ? candyCart.totalCandies : ""}`}
    </button>
  );
};

export default CartButton;
