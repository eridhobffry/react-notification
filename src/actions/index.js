import constants from "../constants";
import { toast } from "react-toastify";

export const incrementAction = () => {
  return function(dispatch) {
    dispatch({
      type: constants.INCREMENT
    });
    toast.success("Hey its success");
  };
};

export const decreaseAction = () => {
  return function(dispatch) {
    dispatch({
      type: constants.DECREASE
    });
    toast.warn("Now its decrease");
  };
};
