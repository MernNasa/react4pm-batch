import { createRoot } from "react-dom/client";
import App from "./App";
import "./app.css"
import { Provider } from "react-redux";
import { store } from "./app/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}> 
    <App/>
  </Provider>
)