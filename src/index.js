import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import SimpleReactLightbox from "simple-react-lightbox";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <SimpleReactLightbox>
        <App />
      </SimpleReactLightbox>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
