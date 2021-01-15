import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "../interfaces/transaction";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(
    (transaction: Transaction) => transaction.amount
  );
  const income = amounts
    .filter((amount: number) => amount > 0)
    .reduce((acc: number, amount: number) => acc + amount, 0)
    .toFixed(2);
  const expense = (
    amounts
      .filter((amount: number) => amount < 0)
      .reduce((acc: number, amount: number) => acc + amount, 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
