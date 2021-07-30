import "../ExpenseTransactions/ExpenseTransactions.css"

interface ExpenseTransactionsProps {
    transactionItems: any;
}
const ExpenseTransaction = (props: ExpenseTransactionsProps) => {
    return (
        <div className="show-transactions">
            <span className="transaction-header"> Transactions: </span>
            <div className="transaction-list-alignment">
                {props.transactionItems.map((item: any) => 
                    <div key={item}>
                        {item}
                    </div>
                )}
           </div>
        </div>
        
    )
}
export default ExpenseTransaction;