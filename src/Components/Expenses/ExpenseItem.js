import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './ExpenseItem.css';

const ExpenseItem=(props)=>{
    // const deleteHandler=()=>{
    //     props.delete(props.id);
    // }
    return <li>
    <Card className="expense-item">
       <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">
        &#8377;{props.amount}
        </div>
    </Card>
    </li>
}

export default ExpenseItem;