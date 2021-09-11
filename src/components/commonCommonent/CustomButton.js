import React from "react";

function CustomButton(props) {
  const { iconSrc, label, onClick } = props;
  return (
    <div onClick={onclick} className="cursor-pointer ">
      <div className="custom-rounded">
        <img className="h-6 mr-1" src={iconSrc} /> <span>{label}</span>
      </div>
    </div>
  );
}

export default CustomButton;
