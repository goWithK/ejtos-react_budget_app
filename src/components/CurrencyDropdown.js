import React, { useContext, useState } from 'react';
import '../App.css';
import { AppContext } from '../context/AppContext';

function CurrencyDropdown() {
    const { dispatch, currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }
    return (
        <label style={{backgroundColor:'#00ab41', color:'white'}}>
            Currency ({currency})
            <select value={newCurrency} onInput={handleCurrencyChange} style={{backgroundColor:'#00ab41', color:'white'}}>
                <option value='$'>$ Dollar</option>
                <option value='£'>£ Pound</option>
                <option value='€'>€ Euro</option>
                <option value='₹'>₹ Ruppee</option>
            </select>
        </label>
    );
}

export default CurrencyDropdown;