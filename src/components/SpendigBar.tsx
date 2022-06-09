import React from "react";

const SpendigBar = (props: any) => {

  return (
    <div className="spendingBar">
      <div className="displayAmount">${props.amount}</div>
      <div className="bar" style={{ height: `${props.percent * 75}%` }}></div>
      <p className="day">{props.day}</p>
    </div>
  );
};

export default SpendigBar;
