import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
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
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: -10,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <button
          onClick={(event) => increaseAllocation(props.name)}
          style={{
            color: 'white',
            backgroundColor: 'lightgreen',
            border: 'none',
            fontSize: '2rem',
            width: '30px',
            height: '30px',
            borderRadius: '15px',
            display: 'inline-flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          <span style={{ marginTop: '0', marginBottom: '30%' }}>+</span>
        </button>
      </td>
      <td>
        <button
          onClick={(event) => decreaseAllocation(props.name)}
          style={{
            color: 'white',
            backgroundColor: '#c00000 ',
            border: 'none',
            fontSize: '2rem',
            width: '30px',
            height: '30px',
            borderRadius: '15px',
            display: 'inline-flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          <span style={{ marginTop: '0', marginBottom: '30%' }}>-</span>
        </button>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
