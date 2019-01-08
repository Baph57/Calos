import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// React/Redux stuff
import store from "./Redux/store";
import { Provider } from "react-redux";

// Import the MDBootstrap CSS
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

ReactDOM.render(
    <Provider store={store}>        
    <App />
    </Provider>,
    document.getElementById("root")
);
