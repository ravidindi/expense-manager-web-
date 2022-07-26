import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses=(props)=> {

    const [filteredYear, setFilteredYear] = useState('2022');
  
    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });


  return (
    <Card className="expenses">
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseList items={filteredExpenses} />
     
    </Card>
  );
}

export default Expenses;