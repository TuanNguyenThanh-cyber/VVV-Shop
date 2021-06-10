const initialState = {
  dataLoveProduct: null,
};

function loveReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "LOVE_PRODUCT":
      return { ...state, dataLoveProduct: action.payload.data };
    case "NOTLOVE_PRODUCT":
      return { ...state, dataLoveProduct: action.payload.data };
    default:
      return state;
  }
}

export default loveReducer;
