import Button from "react-bootstrap/Button";

const Account = ({account, index, remove, select}) => {

    return (
        <div>
            <div className="account" onClick={function(){select(account.Number, account.Balance)}}>
                Acc: {account.Number} | Balance: {account.Balance}
            </div>
            <Button className="delete btn-danger" onClick={function(){remove(index)}}>
                Delete
            </Button>
        </div>
    )
};

export default Account