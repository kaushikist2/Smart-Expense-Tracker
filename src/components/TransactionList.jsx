import { useEffect, useState } from "react"
import API from "../services/api"

function TransactionList() {

  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    API.get("/transactions/demoUser")
      .then((res) => setTransactions(res.data))
  }, [])

  return (
    <div>

      <h2>Transactions</h2>

      {transactions.map((t) => (
        <div key={t._id}>
          {t.title} - ₹{t.amount}
        </div>
      ))}

    </div>
  )
}

export default TransactionList
