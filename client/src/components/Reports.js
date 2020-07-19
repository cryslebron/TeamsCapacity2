import React, { useState } from 'react';

const Reports = () => {
    const [counter, setCounter] = useState(0);
    return(
        <div className="container">
            <h1>Reports</h1>
            <button onClick={() => setCounter(counter+1)}>{counter}</button>
        </div>
    )
}

export default Reports;