import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "../interfaces/transaction";

interface Props {
  transaction: Transaction;
}

const TransactionItem = ({ transaction }: Props) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction._id)}
      >
        x
      </button>
    </li>
  );
};

export default TransactionItem;
