import { useContext } from "react";
import { Context } from "../PizzaContext/Context";

export function ProductCart({ item }) {
  const { addToCartHandler, cartData } = useContext(Context);
  const { id, name, description, price, delivery_time, image } = item;
  return (
    <div>
      <img src={image} alt="pizza" height="150px" width="200px" />
      <p>Name:{name}</p>
      <p>Description:{description}</p>
      <br />
      <p>Price:{price}</p>
      <p>Delivery Time:{delivery_time} mins</p>

      <button
        onClick={(e) => {
          addToCartHandler(item, e);
        }}
        style={{ padding: "0.5rem" }}
      >
        {cartData?.find((item) => item.id === id)
          ? "Added To Cart"
          : "Add to Cart"}
      </button>
    </div>
  );
}
