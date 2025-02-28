import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Transactions from "./pages/Transactions";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/transactions" element={<Transactions />} />
            </Routes>
        </Router>
    );
}

export default App;