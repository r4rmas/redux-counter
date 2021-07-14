import { connect } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "../store/actions";

const Counter = (props) => {
  const add = () => props.incrementCounter(1);
  const subtract = () => props.decrementCounter(1);
  const reset = () => props.resetCounter();

  return (
    <div>
      <span>{props.count}</span>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = { incrementCounter, decrementCounter, resetCounter };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
