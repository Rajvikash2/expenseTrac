import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  console.log(amounts);
  const total = amounts.reduce((acc, curval) => (acc += curval), 0).toFixed(2);

  return (
    <>
      <h4>Your balance</h4>
      <h1 id='balance'>${total}</h1>
    </>
  );
};

