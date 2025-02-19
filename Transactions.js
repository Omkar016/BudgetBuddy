import React, { useEffect, useState } from "react";
import axios from "axios";

function Transactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/transactions")
            .then(response => setTransactions(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Transactions</h2>
            <ul>
                {transactions.map(tx => (
                    <li key={tx.id}>{tx.type} - ${tx.amount}</li>
                ))}
            </ul>
        </div>
    );
}

export default Transactions;