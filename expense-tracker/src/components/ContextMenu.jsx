import React from "react";

const ContextMenu = ({
  menuPosition,
  setMenuPosition,
  expenses,
  setExpenses,
  rowId,
  setRowId,
  setExpense,
  setEditingRowId,
}) => {
  if (!menuPosition?.left) return;
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          const { title, category, amount } = expenses.find(
            (expense) => expense.id === rowId
          );
          setExpense({ title, category, amount });
          setEditingRowId(rowId);
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses(expenses.filter((expense) => expense.id !== rowId));
          setRowId("");
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
};

export default ContextMenu;
