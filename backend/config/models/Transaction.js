const mongoose = require("mongoose")

const TransactionSchema = new mongoose.Schema(
  {
    userId: String,
    title: String,
    amount: Number,
    type: {
      type: String,
      enum: ["income", "expense"]
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model(
  "Transaction",
  TransactionSchema
)
