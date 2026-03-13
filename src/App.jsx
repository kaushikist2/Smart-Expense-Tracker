import AddTransaction from "./components/AddTransaction"
import TransactionList from "./components/TransactionList"

function App() {

  const refresh = () => {
    window.location.reload()
  }

  return (
    <div>

      <h1>Smart Expense Tracker</h1>

      <AddTransaction refresh={refresh} />

      <TransactionList />

    </div>
  )
}

export default App
