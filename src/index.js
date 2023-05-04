import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
