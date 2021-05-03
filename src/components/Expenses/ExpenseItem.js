import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTtitle] = useState(props.title);  example of useState fucionality

  // const clickHandler = () => {
  //   setTtitle("updated");
  //   console.log("clicked!");
  // };

  return (
    <li>
      <Card className="expenses">
        <div className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
          </div>
          {/* <button onClick={clickHandler}>change title</button> */}
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
