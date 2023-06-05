import { useContext } from "react";
import { globalState } from "../../App";
import ExpenseItems from "../expenses/ExpenseItems";



const Expenses = (props) => {
    const { getColor } = useContext(globalState);

    return (
        <>
            {props.totalExpense.length === 0 ? (<h2 style={{ color: getColor.color }}>Expenses Not Found !</h2>) : (
                props.totalExpense.map(expense => <ExpenseItems price={expense.price} title={expense.title} />)
            )
            }
        </>
    );
}

export default Expenses;