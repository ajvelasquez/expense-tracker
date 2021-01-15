import React, { createContext, useReducer } from "react";
import { Transaction } from "../interfaces/transaction";
import ExpenseTrackerService from "../services/httpServices/expenseTracker";
import AppReducer from "./AppReducer";

const initialState: any = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
  error: null,
  loading: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getTransactions = async () => {
    try {
      const res = await ExpenseTrackerService.getTransactions();

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (error) {
      console.error(error.message);
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: error.response.data.data,
      });
    }
  };

  const deleteTransaction = async (id: number) => {
    try {
      await ExpenseTrackerService.deleteTransaction(id);

      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (error) {
      console.error(error.message);
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: error.response.data.data,
      });
    }
  };

  const addTransaction = async (transaction: Transaction) => {
    try {
      const res = await ExpenseTrackerService.addTransaction(transaction);

      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (error) {
      console.error(error.message);
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: error.response.data.data,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        loading: state.loading,
        error: state.error,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
