import { useState } from "react";
import "./App.css";
import data from "./data.json";
import SpendigBar from "./components/SpendigBar";

function App() {
  let maxSpent: number = 0;
  let percentArr: number[] = [];
  let totalSpent: number = 0;

  for (let i = 0; i < data.length; i++) {
    if (maxSpent < data[i].amount) {
      maxSpent = data[i].amount;
    }
    totalSpent += data[i].amount;
  }

  data.map((data) => {
    const percent: number = data.amount / maxSpent;
    percentArr.push(percent);
  });

  const [showSpent, setShowSpent] = useState(false);

  console.log(maxSpent);
  console.table(percentArr);

  return (
    <div className="App">
      <section id="balance">
        <div id="myBalance">
          <h5>My balance</h5>
          <h3>$921.48</h3>
        </div>
        <div className="iconContainer">
          <div className="icon2"></div>
          <div className="icon"></div>
        </div>
      </section>
      <main id="spendings">
        <h2>Spendings - Last 7 days</h2>
        <div id="spendingBars">
          {data.map((data, index) => {
            return (
              <SpendigBar
                amount={data.amount}
                percent={percentArr[index]}
                day={data.day}
              />
            );
          })}
        </div>
        <div id="total">
          <div className="totalAmount"><p>Total this month:</p><h2>${totalSpent}</h2></div>
          <div className="lastMonth"><h6 className="negrita">+2.4%</h6><p>from last month</p></div>
        </div>
      </main>
    </div>
  );
}

export default App;
