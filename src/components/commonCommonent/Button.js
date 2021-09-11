import React from "react";

function Button(props) {
  const { label, onClick, name, type } = props;
  return (
    <div>
      <button type={type} onClick={onclick} className="sign-btn">
        {label}
      </button>
    </div>
  );
}

export default Button;
