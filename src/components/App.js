import Counter from "./Counter";
import { Provider } from "react-redux";
import store from "../store/index";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
