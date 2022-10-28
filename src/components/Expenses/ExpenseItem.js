import "./ExpenseItem.css";
import React from "react";
import Expensedate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <Expensedate date={props.date}></Expensedate>
      <div className="expense-item__description">
        <h2> {props.title}</h2>
        <div className="expense-item__price"> ${props.amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
