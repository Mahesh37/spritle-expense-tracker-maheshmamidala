import { useState } from "react";
import "./ExpenseInput.css"

interface ExpenseInputProps {
    balance: number;
    addOperation: (input: any) => void;
    removeOperation: (input: any) => void;
}
const ExpenseInput = (props: ExpenseInputProps) => {
    const [input, setInput] = useState(0);
    const inputtedExpense = (param: any) => {
        setInput(param.target.value)
    }

    const addOperation = (event: any) => {
        input > 0 && props.addOperation(input);
    }

    const removeOperation = (event: any) => {
        input > 0 && props.removeOperation(input);
    }
    return (
        <div className="expense-input">
            <div>
                Balance: {props.balance}
            </div>
           <form>
                <div>
                    <input type="number" onChange={(param) => inputtedExpense(param)} min={1} required={true}/>
                </div>
                <div>
                    <button type="button" onClick={addOperation}>Add</button>
                    <button type="button" onClick={removeOperation}>Remove</button>
                </div>
           </form>
        </div>
    )
}

export default ExpenseInput;