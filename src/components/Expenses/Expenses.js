import { useState } from "react"
import ExpensesFilter from "./ExpensesFilter"
import Card from "../UI/Card"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"
import "./Expenses.css"

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022")

  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  //Filtering all expenses with respect to the year selected
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  )

  console.log(filteredExpenses)

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilterYear={filterYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
