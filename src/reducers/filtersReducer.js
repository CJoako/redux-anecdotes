// filtersReducer.js
const filtersReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default filtersReducer;
