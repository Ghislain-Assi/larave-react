import "./bootstrap";
import react from "react";
import reactDOM from "react-dom/client";
import Appli from "./components/appli";
import { BrowserRouter } from "react-router-dom";

reactDOM.createRoot(document.getElementById("appli")).render(
    <BrowserRouter>
        <Appli />
    </BrowserRouter>
);
