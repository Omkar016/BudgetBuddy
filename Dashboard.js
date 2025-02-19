import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <h1>BudgetBuddy Dashboard</h1>
            <Link to="/transactions">View Transactions</Link>
        </div>
    );
}

export default Dashboard;