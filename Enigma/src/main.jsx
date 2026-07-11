import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import "./index.css";
import { Provider } from "react-redux";
import AppStore from "./Utils/AppStore";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={AppStore}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </StrictMode>
);