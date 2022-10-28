import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "New Tv",
    amount: 799.49,
    date: new Date(2022, 3, 27),
  },
  {
    id: "e3",
    title: "Car Insurence",
    amount: 294.71,
    date: new Date(2022, 9, 27),
  },
  {
    id: "e4",
    title: "New wodden desk",
    amount: 494.71,
    date: new Date(2022, 8, 27),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
      
    })
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
