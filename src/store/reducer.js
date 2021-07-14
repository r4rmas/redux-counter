const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.num };
    case "DECREMENT":
      return { count: state.count - action.num };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
};

export default reducer;
