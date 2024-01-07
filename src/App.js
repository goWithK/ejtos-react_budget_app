import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
import CurrencyDropdown from './components/CurrencyDropdown';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    {
                        //Budgeting component
                        <div className='col-sm'>
                            <Budget />
                        </div>
                    }

                    {
                        //Remaining component
                        <div className='col-sm'>
                            <Remaining />
                        </div>
                    }

                    {
                        //ExpenseTotal component
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>
                    }

                    {
                        //ExpenseTotal component
                        <div className='col-sm'>
                            <CurrencyDropdown />
                        </div>
                    }
                </div>
                <div className='row mt-3'>
                    {
                        //ExpenseList component
                        <div className='col-sm'>
                            <ExpenseList />
                        </div>
                    }

                    {
                        //ExpenseItem component
                        <div className='col-sm'>
                            <ExpenseItem />
                        </div>
                    }
                </div>
                <div className='row mt-3'>
                    {
                        //AllocationForm component
                        <div className='col-sm'>
                            <AllocationForm />
                        </div>
                    }

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
