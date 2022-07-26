
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense=(props)=>{

    const FormDataHandler=expense=>{
        props.onGenerate(expense);
    }
return <div className="new-expense">
    <ExpenseForm onGenerate={FormDataHandler}></ExpenseForm>
</div>
}
export  default NewExpense;