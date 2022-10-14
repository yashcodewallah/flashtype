import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from "./component/app/app";


// ReactDOM.render(<App />,document.getElementById("root"));
const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App />);
