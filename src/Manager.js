import React, {useState} from 'react';
import AccountForm from "./AccountForm";
import Account from "./Account";

const Manager = ({setAccount}) => {
    const [accounts, setAccounts] = useState([
        {Number: '10000-1'}
    ])

    const addAccount = Number => {
        const newAccounts = [...accounts, {Number}];
        setAccounts(newAccounts);
    }
    const removeAccount = index => {
        let temp = [...accounts];
        temp.splice(index, 1);
        setAccounts(temp);
        console.log(index)
    }

    return (
        <div className="account">
            <div className="account-list" >
                {accounts.map((account, i) => (
                    <Account key={i} index={i} account={account} remove={removeAccount} select={setAccount}/>
                ))}
                <AccountForm addAccount={addAccount} />
            </div>
        </div>
    );
};

export default Manager