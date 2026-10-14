import { useState } from "react";
import "./App.css";
import ContextMenu from "./components/ContextMenu";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [expenses, setExpenses] = useLocalStorage("expenses",expenseData);
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [editingRowId, setEditingRowId] = useLocalStorage("editingRowId", "");
  const [localData, setLocalData] = useLocalStorage("num", [1, 2, 3])
  return (
    <main>
      <h1
      onClick={() => {
        setLocalData((prevState) => [...prevState, 4, 5, 6]);
      }}
      >Track Your Expense</h1>
      <div>{localData.join(", ")}</div>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />

        <ExpenseTable
          expenses={expenses}
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          setEditingRowId={setEditingRowId}
          editingRowId={editingRowId}
        />
        <ContextMenu />
      </div>
    </main>
  );
}

export default App;
