import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "../interfaces/transaction";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(
    (transaction: Transaction) => transaction.amount
  );
  const total = amounts
    .reduce((acc: number, amount: number) => acc + amount, 0)
    .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};

export default Balance;
