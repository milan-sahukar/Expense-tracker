import React from 'react'

const Input = ({
    id,
    name,
    value,
    onChange,
    error,
    label
}) => {
    return (
        <div className="input-container">
            <label htmlFor={name}>{label}</label>
            <input
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            />
            {error && <p className="error">{error}</p>}
        </div>)
}

export default Input;