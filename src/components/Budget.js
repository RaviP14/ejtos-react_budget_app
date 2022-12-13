import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch, allExpenses, currency } = useContext(AppContext);
  const [newbudget, setNewBudget] = useState(budget);

  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency}
        <input
          value={newbudget}
          required="required"
          type="number"
          step={10}
          onChange={(event) => {
            if (event.target.value > 20000) {
              alert('The value cannot exceed remaining funds  £20000');
            } else if (event.target.value < allExpenses) {
              alert('You cannot reduce the budget value lower than spending');
            } else {
              setNewBudget(event.target.value);
              dispatch({ type: 'SET_BUDGET', payload: newbudget });
            }
          }}
        ></input>
      </span>
    </div>
  );
};

export default Budget;
