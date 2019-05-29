const reducer = (state = [], action) => {
  switch (action.type) {
    case "CUSTOMER_DATA":
      let newState = [...state, ...action.data];
      return newState;
    case "ADD_CUSTOMER":
      let newCustomer = [...state, action.customer];
      return newCustomer;
    default:
      return state;
  }
};

export default reducer;
