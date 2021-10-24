import React, {useState} from 'react';

import ExpenseItem from './ExnpenseItem';
import Card from './../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';

import './Expenses.css';

const Expenses = (props) => {
      
    const[filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter( expense => {
            return expense.date.getFullYear().toString() === filteredYear;
    });
    
    let expenseContent = <p>No expense found</p>;

    if(filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }

    return(
        <Card className="expenses">
            <ExpenseFilter
                seleced={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpenseChart expenses={filteredExpenses} />
            {expenseContent};
        </Card>
    );
}

export default Expenses;