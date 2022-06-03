import ExpenseForm from "./ExpenseForm"
import { useState } from "react"
import "./NewExpense.css"

const NewExpense = (props) => {
  const saveExpenseDateHandler = (expensesData) => {
    const expenseData = {
      ...expensesData,
      id: Math.random().toString(),
    }
    props.onAddExpenseData(expenseData)

    toggleFormHandler()
  }

  const [displayForm, setDisplayForm] = useState(false)

  const toggleFormHandler = () => {
    if (!displayForm) {
      setDisplayForm(true)
    } else {
      setDisplayForm(false)
    }
  }

  return (
    <div className="new-expense">
      {!displayForm && (
        <button onClick={toggleFormHandler}>Add New Expense</button>
      )}

      {displayForm && (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDateHandler}
          onCancel={toggleFormHandler}
        />
      )}
    </div>
  )
}

export default NewExpense
