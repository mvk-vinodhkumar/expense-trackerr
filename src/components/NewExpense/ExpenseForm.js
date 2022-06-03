import { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
  //PW1 - Preferred way of using multiple states
  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredAmount, setEnteredAmount] = useState("")
  const [enteredDate, setEnteredDate] = useState("")

  //SW - Second way where we use only one useState and store all the initial states in an object. (Not preffered, because when change in state, useState doesn't execute immediately, it actually schedues. So we might be using a wrong snapshot of a state.)
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enetedDate: "",
  // })

  //CSW (Corrected Second Way) If we follow SW way of using state, then this is the right method of using it. Instead of cloning the object using ...spread operator, we should use previous state provided by React
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enetedDate: "",
  // })

  const titleChangeHandler = (event) => {
    // PW1
    setEnteredTitle(event.target.value)
    //
    // SW
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })
    //
    //CSW
    // setUserInput((prevSate) => {
    //   return {
    //     ...prevSate,
    //     enteredTitle: event.target.value,
    //   }
    // })
  }

  const amountChangeHandler = (event) => {
    // PW1
    setEnteredAmount(event.target.value)
    //
    // SW
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
    //
    //CSW
    // setUserInput((prevSate) => {
    //   return {
    //     ...prevSate,
    //     enteredTitle: event.target.value,
    //   }
    // })
  }

  const dateChangeHandler = (event) => {
    // PW1
    setEnteredDate(event.target.value)
    //
    //SW
    // setUserInput({
    //   ...userInput,
    //   enetedDate: event.target.value,
    // })
    //
    //CSW
    // setUserInput((prevSate) => {
    //   return {
    //     ...prevSate,
    //     enteredTitle: event.target.value,
    //   }
    // })
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    }

    props.onSaveExpenseDate(expenseData)
    setEnteredTitle("")
    setEnteredAmount("")
    setEnteredDate("")
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amt">Amount</label>
          <input
            type="number"
            id="amt"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min="2019-01-01"
            max="2022-05-20"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
