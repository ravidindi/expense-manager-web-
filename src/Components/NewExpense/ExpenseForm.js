import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
const [EnteredTitle, setEnteredTitle] = useState('');

const [EnteredAmount, setEnteredAmount] = useState('');

const [EnteredDate, setEnteredDate] = useState('');

const EnteredTitleHandler=event=>setEnteredTitle(event.target.value);

const EnteredAmountHandler=event=>setEnteredAmount(event.target.value);

const EnteredDateHandler=event=>setEnteredDate(event.target.value);

const FormSubmitHandler=(event)=>{
    event.preventDefault();
    const expensedata={
        title:EnteredTitle,
        amount:EnteredAmount,
        date:EnteredDate,
        id:Math.random()
    }
    props.onGenerate(expensedata);
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
}

return <form onSubmit={FormSubmitHandler}>
    <div className="new-expense__controls">
    <div className="new-expense__control">
    <label htmlFor='title'>Title</label>
          <input type='text' id='title' onChange={EnteredTitleHandler} value={EnteredTitle}/>
    </div>
    <div className="new-expense__control">
        <label  htmlFor='amount'>Amount</label>
        <input type="number" min={0.01} step={0.01} id='amount' onChange={EnteredAmountHandler} value={EnteredAmount}/>
    </div>
    <div className="new-expense__control">
        <label htmlFor='date'>Date</label>
        <input type="date"  min='2019-01-01' id='date'
            max='2022-12-31' onChange={EnteredDateHandler} value={EnteredDate}/>
    </div>
    <div className="new-expense__control">
        <button type='submit'>Add Expense</button>
    </div>
    </div>
</form>
}
export default ExpenseForm;