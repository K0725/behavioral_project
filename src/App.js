import "./App.css";
import MainRoutes from "./routes/routes";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainRoutes />
      </Provider>
    </div>
  );
}

export default App;