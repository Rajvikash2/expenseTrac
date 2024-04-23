import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);
  console.log(transactions);
  return (
    <>
    <h3>History</h3>
     <ul  className="list">
      {transactions.map(transaction_1 =>( <Transaction key={transaction_1.id} transaction={transaction_1} /> ))}
    
     </ul>
    </>
  )
}
