import { Transaction } from "../interfaces/transaction";

interface Action {
  type: string;
  payload: any;
}

export default (state: any, action: Action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: Transaction) => transaction._id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
      case "TRANSACTION_ERROR":
        return {
          ...state,
          error: action.payload,
        };
    default:
      return state;
  }
};
