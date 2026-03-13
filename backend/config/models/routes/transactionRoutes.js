const router = require("express").Router()
const Transaction = require("../models/Transaction")

router.post("/", async (req, res) => {
  try {
    const transaction = new Transaction(req.body)

    await transaction.save()

    res.status(201).json(transaction)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get("/:userId", async (req, res) => {
  try {
    const transactions = await Transaction.find({
      userId: req.params.userId
    })

    res.json(transactions)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.delete("/:id", async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id)

    res.json({ message: "Deleted successfully" })
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
