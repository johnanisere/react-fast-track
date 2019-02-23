const initialState = {
  testing: "React"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "test": {
      return {
        ...state,
        testing: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default reducer;
