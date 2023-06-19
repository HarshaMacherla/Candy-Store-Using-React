import React, { useState } from "react";
import CandyForm from "./components/Form/CandyForm";
import CandyStock from "./components/Stock/CandyStock";
import CartButton from "./components/Cart/CartButton";
import { Candies } from "./candy-context/CandyContext";
import CandyCart from "./components/Cart/CandyCart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  return (
    <Candies>
      {cartIsShown && <CandyCart setCartIsShown={setCartIsShown} />}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <CandyForm />
        </div>
        <div>
          <CartButton setCartIsShown={setCartIsShown} />
        </div>
      </div>
      <CandyStock />
    </Candies>
  );
}

export default App;
