import { createContext, useEffect, useReducer, useState } from "react";
import { fakeFetch } from "../API/api";
import { reducer } from "../reducer/reducer";

export const Context = createContext();

export function MenuContext({ children }) {
  const [menuData, setMenuData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [goToCart, setGoToCart] = useState(false);

  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/menu");
      if (response.status === 200) {
        setMenuData(response?.data?.menu);
        dispatch({ type: "INITIAL_DATA", payload: response?.data?.menu });
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const initialState = {
    pizzaData: [],

    search: "",
    sortByPrice: "",
    sortByCategory: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const filteredBySearch = [...menuData]?.filter((menu) =>
    menu?.name.toLowerCase().includes(state?.search?.toLowerCase().trim())
  );

  const sortByPriceData = filteredBySearch?.sort((a, b) =>
    state?.sortByPrice === "low" ? a.price - b.price : b.price - a.price
  );

  const filteredByCategoryData = sortByPriceData?.filter((menu) =>
    state?.sortByCategory?.length > 0
      ? menu[state?.sortByCategory]
      : sortByPriceData
  );

  console.log(state?.sortByCategory);

  const addToCartHandler = (itemClicked) => {
    if (cartData.find((item) => item.id === itemClicked.id)) {
      setCartData(cartData);
    } else {
      setCartData([...cartData, itemClicked]);
    }
  };

  const cartLength = cartData.length;

  return (
    <Context.Provider
      value={{
        addToCartHandler,
        cartData,
        cartLength,
        goToCart,
        state,
        dispatch,
        filteredByCategoryData
      }}
    >
      {children}
    </Context.Provider>
  );
}
