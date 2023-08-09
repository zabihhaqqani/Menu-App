import { useContext, useState } from "react";
import { Context } from "../PizzaContext/Context";

export function Cart() {
  const { cartData, cartLength } = useContext(Context);

  const totalPriceCalculation = cartData.reduce(
    (total, currItem) => total + currItem.price,
    0
  );

  const [totalPrice, setTotalPrice] = useState(totalPriceCalculation);

  const totalDeliveryTime = cartData.reduce(
    (totalTime, currItem) => totalTime + currItem.delivery_time,
    0
  );

  const coupounHandler = () => {
    setTotalPrice(totalPriceCalculation - 5);
  };
  // console.log(coupounHandler())

  return (
    <div>
      <h1>Cart</h1>
      {cartLength <= 0 ? (
        <h3>Empty Cart!!!</h3>
      ) : (
        <div>
          <h3>Total Delivery Time:{totalDeliveryTime} minutes </h3>
          <h3>Total Price:Rs:{totalPrice} </h3>
          <button onClick={coupounHandler}>Add Coupoun</button>
        </div>
      )}

      <div className="container">
        {cartData.map((item) => {
          const { id, name, description, price, delivery_time, image } = item;
          return (
            <div className="card" key={id}>
              {/* <img src={image} alt="pizza" height="150px" width="200px" /> */}
              <p>Name:{name}</p>
              <p>Description:{description}</p>
              <br />
              <p>Price:{price}</p>
              <p>Delivery Time:{delivery_time} mins</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
