import { Provider } from "react-redux";
import store from "./Redux/store";
import Home from "./Pages/Home";
import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
