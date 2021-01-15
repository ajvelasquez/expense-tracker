import axios from "axios";
import appEnv from "../../env";
import { Transaction } from "../../interfaces/transaction";

class ExpenseTrackerService {
  static async getTransactions() {
    return await axios.get(`${appEnv.apiBaseUrl}/transactions`);
  }

  static async deleteTransaction(id: number) {
    return await axios.delete(`${appEnv.apiBaseUrl}/transactions/${id}`);
  }

  static async addTransaction(transaction: Transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return await axios.post(
      `${appEnv.apiBaseUrl}/transactions`,
      transaction,
      config
    );
  }
}

export default ExpenseTrackerService;
