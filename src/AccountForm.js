import React, {useState} from 'react';
import Button from "react-bootstrap/Button";

const AccountForm = ({addAccount}) => {
    const [value,setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addAccount(value);
        setValue('');
    }

    return (
        <div>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add Account..."
                onChange={e => setValue(e.target.value)} />
            <Button className="delete" onClick={handleSubmit}>Add</Button>
        </div>
    )
};

export default AccountForm