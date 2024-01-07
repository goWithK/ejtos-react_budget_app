import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { CgAdd, CgRemove } from "react-icons/cg";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }
    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><CgAdd style={{ 'color': 'green', 'width': '2rem', 'height': '2rem' }} onClick={event => increaseAllocation(props.name)} /></td>
            <td><CgRemove style={{ 'color': 'red', 'width': '1.8rem', 'height': '1.8rem' }} onClick={event => decreaseAllocation(props.name)} /></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
