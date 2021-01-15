const Transaction = require("./../models/transaction");

exports.getTransacations = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    res.json({
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addTransacations = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    res.status(201).json({
      data: transaction,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);

      return res.status(400).json({ messages });
    }

    res.status(500).json({ message: error.message });
  }
};

exports.deleteTransacations = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res
        .status(404)
        .json({ error: { message: "No transaction found" } });
    }

    await transaction.remove();

    res.status(204).end();
  } catch (error) {
    console.error({ error });
    res.status(500).json({ message: error.message });
  }
};
