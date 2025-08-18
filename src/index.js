import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HeadProvider } from "react-head";

document.documentElement.classList.add('dark');

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* HeadProvider est pour le SEO avec react head */}
    <HeadProvider>  
      <App />
    </HeadProvider>  
  </React.StrictMode>
);
