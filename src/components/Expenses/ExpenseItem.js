import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
  // console.log("Expense Item is Evaluated")

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <span className="expense-item__price">${props.amount}</span>
        </div>
      </Card>
    </li>
  )
}

export default ExpenseItem
