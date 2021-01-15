import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./../interfaces/transaction";
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    // eslint-disable-next-line
    getTransactions();
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction: Transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
