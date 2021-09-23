import './App.css';
import React, {useState} from 'react';
import ATMDeposit from "./ATMDeposit";
import Manager from "./Manager";

function App() {
    const [account, setAccount] = useState('')
    const [deposit, setDeposit] = React.useState(0);
    const [totalState, setTotalState] = useState(0);
    const [isDeposit, setIsDeposit] = useState(true);
    const [atmMode, setAtmMode] = React.useState("")
    const [validTransaction, setValidTransaction] = React.useState(false);

    let status = `${account} Balance $ ${totalState} `;

    const selectAccount = (account) => {
        console.log(account)
        setAccount(account);
    }

    const handleChange = (event) => {
        setDeposit(Number(event.target.value));
        if (Number(event.target.value) <= 0) {
            setValidTransaction(true);
        } else {
            setValidTransaction(false);
        }
        if (Number(event.target.value) > totalState && atmMode === 'Cash Back') {
            setValidTransaction(true);
        }
    };
    const handleSubmit = (event) => {
        if (deposit > totalState && atmMode === 'Cash Back') {
            setValidTransaction(true);
        } else {
            let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
            setTotalState(newTotal);
        }
        event.preventDefault();
    };
    const handleModeSelect = (event) => {
        setAtmMode(event.target.value)
        if (event.target.value === 'Deposit') {
            setIsDeposit(true)
        } else {
            setIsDeposit(false)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Select a bank account</label>
            <Manager setAccount={selectAccount}/>
            {
                (account !== '') &&
                <div>
                    <h2 id="total">{status}</h2>
                    <label>Select an action below to continue</label>
                    <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
                    <option id="no-selection" value=""/>
                    <option id="deposit-selection" value="Deposit">Deposit</option>
                    <option id="cashback-selection" value="Cash Back">Cash Back</option>
                    </select>
                </div>
            }
            {
                (atmMode !== '') &&
                <ATMDeposit onChange={handleChange} isDeposit={isDeposit} isValid={validTransaction}/>
            }
        </form>
    );
}

export default App;
