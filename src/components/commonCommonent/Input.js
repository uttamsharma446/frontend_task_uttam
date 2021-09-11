import React from "react";
function Input(props) {
  const { type, placeholder, label, name, value, onchange, className } = props;
  return (
    <>
      <label className="py-5 block md:py-2 md:">{label}</label>
      <input
        className="custom-rounded"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onchange={onchange}
      />
    </>
  );
}

export default Input;
