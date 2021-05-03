import ExpensesList from "./ExpensesList";
import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "../Chart/ExpensesChart";

const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
    console.log("expenses.js");
    console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });


  return (
    <div>
      {/* wraper componenet composition */}
        <ExpensesFilter
          selected={filterdYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
        {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>}   !!!!!expenses logic inside the return
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id} //this field is in use by react to uniqely recognize and add it the correct way
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        {/* {filteredExpenses.length === 0 ? (     !!!!another way to do so
          <p>No Expenses Found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id} //this field is in use by react to uniqely recognize and add it the correct way
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
    </div>
  );
};

export default Expenses;
