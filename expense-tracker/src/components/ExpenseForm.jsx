import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const ExpenseForm = ({ setExpenses, expense, setExpense, editingRowId, setEditingRowId }) => {
  
  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      { 
        required: true,
        message: "Title is required"
      },
      {
        minLength: 2,
        message: "Title must be at least 5 characters long"
      }
    ],
    category: [
      {
        required: true,
        message: "Category is required"
      }
    ],
    amount:[
      {
        required: true,
        message: "Amount is required"
      }
    ]
  }

  function validate(formData) {
    const errorData = {};
    Object.entries(formData).forEach(([key, value]) =>{
      validationConfig[key].forEach((rule) => {
        if (rule.required && !value) {
          errorData[key] = rule.message;
        }

        if (rule.minLength && value.length < rule.minLength) {
          errorData[key] = rule.message;
        }
      })
    })
    setErrors(errorData);
    return errorData;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationResult = validate(expense);
    if (Object.keys(validationResult).length) return;

    // Check if we are editing an existing expense
    // If editingRowId is not empty, we are in edit mode
    if(editingRowId){
      setExpenses((prevState) =>
        prevState.map((prevExpense) => {
          if(prevExpense.id === editingRowId){
            return {...expense, id: prevExpense.id}
          }
          return prevExpense;
        })
      )
      setExpense({
        title: '',
        category: '',
        amount: '',
      })
      setEditingRowId("");
      return;
    }

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        id="title"
        name="title"
        value={expense.title}
        onChange={handleChange}
        error={errors.title}
        label="Title"
      />

      <Select
        label="Category"
        id="category"
        name="category"
        value={expense.category}
        onChange={handleChange}
        error={errors.category}
        defaultOption="Select a category"
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
      />

      <Input
        id="amount"
        name="amount"
        value={expense.amount}
        type="number"
        onChange={handleChange}
        error={errors.amount}
        label="Amount"
      />
      <button className="add-btn">
        {editingRowId ? "Save" : "Add"}
      </button>
    </form>
  );
};

export default ExpenseForm;
