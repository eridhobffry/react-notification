import { constants } from "../actions";

const initialState = {
  value: 0
};

const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.INCREMENT:
      return { ...state, value: state.value + 1 };
    case constants.DECREASE:
      return { ...state, value: state.value - 1 };
  }
};

export default addReducer;
