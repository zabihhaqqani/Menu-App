import { useContext, useState } from "react";
import { Context } from "../PizzaContext/Context";
import { NavLink, useNavigate, BrowserRouter } from "react-router-dom";
import { ProductCart } from "./ProductCart";

export function Menu() {
  const { dispatch, filteredByCategoryData } = useContext(Context);

  return (
    <div>
      <h1>Filters:</h1>
      <input
        onChange={(e) =>
          dispatch({ type: "FILTER_BY_NAME", payload: e.target.value })
        }
        placeholder="Search Food Here"
        type="text"
      />
      <span>
        <label>
          <input
            onChange={(e) => {
              dispatch({
                type: "FILTER_BY_CATEGORY",
                payload: e.target.value
              });
            }}
            value="is_vegetarian"
            type="checkbox"
          ></input>
          Veg
        </label>
        <label>
          <input
            onChange={(e) => {
              dispatch({
                type: "FILTER_BY_CATEGORY",
                payload: e.target.value
              });
            }}
            value="is_spicy"
            type="checkbox"
          ></input>
          Spicy
        </label>
      </span>
      <span>
        <label>
          <input
            onChange={(e) =>
              dispatch({ type: "SORT_BY_PRICE", payload: e.target.value })
            }
            name="sort"
            value="low"
            type="radio"
          />
          Sort (price) low to high
        </label>
        <label>
          <input
            onChange={(e) =>
              dispatch({ type: "SORT_BY_PRICE", payload: e.target.value })
            }
            name="sort"
            value="high"
            type="radio"
          />
          Sort (price) high to low
        </label>
      </span>
      <h1>Menu</h1>
      <div className="container">
        {filteredByCategoryData?.length > 0 ? (
          <>
            {filteredByCategoryData?.map((item) => {
              return <ProductCart key={item.id} item={item} />;
            })}
          </>
        ) : (
          "No Food found"
        )}
      </div>
    </div>
  );
}
