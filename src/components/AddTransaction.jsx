import { useState } from "react"
import API from "../services/api"

function AddTransaction({ refresh }) {

  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [type, setType] = useState("expense")

  const submit = async () => {
    await API.post("/transactions", {
      userId: "demoUser",
      title,
      amount,
      type
    })

    setTitle("")
    setAmount("")
    refresh()
  }

  return (
    <div>

      <h2>Add Transaction</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button onClick={submit}>Add</button>

    </div>
  )
}

export default AddTransaction
