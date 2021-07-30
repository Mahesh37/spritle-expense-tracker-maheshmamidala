import { useState, useReducer } from 'react';
import './App.css';
import ExpenseInput from './ExpenseInput/ExpenseInput';
import ExpenseTransaction from './ExpenseTransactions/ExpenseTransactions';
interface actionType {
	type: string;
	name: string;
}
interface stateType {
	transactionItems: any;
}

const initialState: stateType = {
	transactionItems: []
}
function App() {
	const [balance, setBalance] = useState(500);
	const [transactionItems, dispatch] = useReducer((state = initialState, action: actionType) => {
		switch (action.type) {
			case 'add': return [...state, action.name]
			case 'remove': return [...state, action.name]
		}
	}, []);

	const addOperation = (param: any) => {
		if (parseInt(param) != null) {
			setBalance(balance + parseInt(param))
			const transactionsTimeStamp: any = new Date().toISOString();
			dispatch({
				type: 'add',
				name: transactionsTimeStamp + " - " + parseInt(param) + " - " + " Add"
			})
		}
	}
	const removeOperation = (param: any) => {

		if (parseInt(param) != null) {
			parseInt(param) != null ? setBalance(balance - parseInt(param)) : setBalance(0)
			const transactionsTimeStamp: any = new Date().toISOString();
			dispatch({
				type: 'add',
				name: transactionsTimeStamp + " - " + parseInt(param) + " - " + " Remove"
			})
		}
	}
	return (
		<div className="App">
			<header className="App-header">
				<h2>
					Expense Tracker - Basic
				</h2>
				<ExpenseInput
					balance={balance}
					addOperation={addOperation}
					removeOperation={removeOperation}
				/>
				<ExpenseTransaction
					transactionItems={transactionItems}
				/>
			</header>
		</div>
	);
}

export default App;
