export const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_DATA":
      return {
        ...state,
        pizzaData: action.payload
      };
    case "FILTER_BY_NAME":
      return {
        ...state,
        search: action.payload
      };
    case "SORT_BY_PRICE":
      return {
        ...state,
        sortByPrice: action.payload
      };
    case "FILTER_BY_CATEGORY":
      console.log(action.payload);

      return {
        ...state,
        sortByCategory: state?.sortByCategory?.includes(action.payload)
          ? state?.sortByCategory?.filter(
              (category) => category !== action.payload
            )
          : [...state?.sortByCategory, action.payload]
      };
    default:
      return state;
  }
};
