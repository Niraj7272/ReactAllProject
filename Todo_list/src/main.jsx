import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { IContextProvider } from "./context/IContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IContextProvider> 
    <App />
    <ToastContainer></ToastContainer>
    </IContextProvider>  
  </StrictMode>
);
