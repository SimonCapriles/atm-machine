import Button from 'react-bootstrap/Button';

const Account = ({account, index, remove, select}) => {
    return (
        <div>
            <div className="account" onClick={function(){select(account.Number)}}>{account.Number} <Button className="delete" onClick={function(){remove(index)}}>Delete</Button></div>
        </div>
    )
};

export default Account