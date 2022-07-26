import { useState } from 'react';
import './App.css';
import './Components/Expenses/Expenses';
import './Components/NewExpense/NewExpense'
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const DUMMY=[
  // { id:'e1',title:'Udemy course',amount:499,date:new Date(2022,6,24)},
  // { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  // {
  //   id: 'e3',
  //   title: 'Car Insurance',
  //   amount: 294.67,
  //   date: new Date(2021, 2, 28),
  // },
  // {
  //   id: 'e4',
  //   title: 'New Desk (Wooden)',
  //   amount: 450,
  //   date: new Date(2021, 5, 12),
  // },
];
function App() {
  const [expenses, setexpenses] = useState(DUMMY);
  
  // const deleteHandler=(key)=>{
  //   setexpenses(prevstate=>prevstate.splice(prevstate.findIndex(a => a.id === key) , 1));

  // }

  const NewExpenseHandler=expense=>{
    var str=expense.date;
    expense.date=new Date(str);
    console.log(expense);
    setexpenses(prevstate=>[expense,...prevstate]);
  }
  return (
   
   <div>
     <NewExpense onGenerate={NewExpenseHandler}></NewExpense>
    <Expenses items={expenses} ></Expenses>
   </div>
  );
}

export default App;
