import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
  const { dispatch } = useContext(AppContext);

  return (
    <div className="alert alert-secondary form-floating">
      <label
        for="floatingSelect"
        style={{ paddingLeft: '10%', color: 'white' }}
      >
        Currency{' '}
      </label>
      <select
        className="currency-select"
        id="floatingSelect"
        onChange={(event) => {
          dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
        }}
        style={{
          width: '60%',
          padding: '1%',
          textAlign: 'right',
          color: 'white',
          backgroundColor: 'lightgreen',
        }}
        aria-label=""
      >
        <option value="$" name="$ Dollar">
          $ Dollar
        </option>
        <option defaultValue value="£" name="£ Pound">
          £ Pound
        </option>
        <option value="€" name="€ Euro">
          € Euro
        </option>
        <option value="₹" name="₹ Ruppee">
          ₹ Ruppee
        </option>
      </select>
    </div>
  );
};

export default ExpenseTotal;
