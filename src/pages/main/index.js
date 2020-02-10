import React from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { incrementAction, decreaseAction } from "../../actions";

const Main = ({ value, incrementAction, decreaseAction }) => {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={incrementAction}>Increment</button>
      <button onClick={decreaseAction}>Decrease</button>
      <ToastContainer autoClose={5000} />
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.value
});

const mapDispatchToProps = dispatch => ({
  incrementAction: () => dispatch(incrementAction()),
  decreaseAction: () => dispatch(decreaseAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
