const reducer = (state, action) => {
  switch (action.type) {
    case "KEYWORD":
      state = {
        ...state,
        keyword: action.payload
      };
      break;
    default:
      break;
  }

  return state;
};

export default reducer;
