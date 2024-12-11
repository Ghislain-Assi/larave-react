import React from "react";
import { Routes, Route } from "react-router-dom";
import Home1 from "../components/home1";
import Home2 from "../components/home2";

const index = () => {
    return (
        <>
            <Routes>
                <Route path="/home1" element={<Home1 />} />
                <Route path="/home2" element={<Home2 />} />
            </Routes>
        </>
    );
};

export default index;
