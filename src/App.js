import './App.css';
import React, {useState} from 'react';
import ATMDeposit from "./ATMDeposit";
import AccountForm from "./AccountForm";
import Account from "./Account";

function App() {
    const [accounts, setAccounts] = useState([
        {
            Number: '10000-1',
            Balance: 1000
        }
    ])
    const [account, setAccount] = useState('')
    const [deposit, setDeposit] = React.useState(0);
    const [totalState, setTotalState] = useState(0);
    const [isDeposit, setIsDeposit] = useState(true);
    const [atmMode, setAtmMode] = React.useState("")
    const [validTransaction, setValidTransaction] = React.useState(false);

    let status = `${account} Balance $ ${totalState} `;

    const addAccount = (Number) => {
        const newAccounts = [...accounts, {Number, Balance: 0}];
        setAccounts(newAccounts);
    }
    const removeAccount = index => {
        let temp = [...accounts];
        temp.splice(index, 1);
        setAccounts(temp);
        if (account === accounts[index].Number){
            setAccount('')
        }
    }

    const selectAccount = (account, balance, accounts) => {
        setAccount(account);
        setTotalState(balance);
        console.log(accounts)
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
        // eslint-disable-next-line no-mixed-operators
        if (deposit > totalState && atmMode === 'Cash Back' || account === '') {
            setValidTransaction(true);
        } else {
            let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
            setTotalState(newTotal);
            let temp = [...accounts];
            const index = (temp.findIndex(acc => acc.Number === account))
            temp.splice(index, 1, {Number: account, Balance: newTotal});
            setAccounts(temp);
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
            <div className="account-list" >
                {accounts.map((account, i) => (
                    <Account key={i} index={i} account={account} remove={removeAccount} select={selectAccount}/>
                ))}
                <AccountForm addAccount={addAccount} />
            </div>
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
