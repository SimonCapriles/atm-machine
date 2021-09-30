import Button from "react-bootstrap/Button";

const ATMDeposit = ({onChange, isDeposit, isValid}) => {
    const choice = ["Deposit", "Cash Back"];
    return (
        <label className="label huge">
            <h3> {choice[Number(!isDeposit)]}</h3>
            <input type="number" width="200" onChange={onChange} id="number-input"/>
            <Button type="submit" width="200" value="Submit" id="submit-input" disabled={isValid}>Submit</Button>
        </label>
    );
};

export default ATMDeposit