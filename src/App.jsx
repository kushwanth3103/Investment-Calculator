import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";
import React from "react";

function App() {
  const [initialInvestment, setInitialInvestment] = React.useState(1000);
  const [annualInvestment, setAnnualInvestment] = React.useState(1200);
  const [expectedReturn, setExpectedReturn] = React.useState(6);
  const [duration, setDuration] = React.useState(10);
  // console.log(initialInvestment, annualInvestment, expectedReturn, duration);
  const annualData = calculateInvestmentResults(
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  );
  //console.log(annualData);
  return (
    <>
      <UserInput
        setInitialInvestment={setInitialInvestment}
        setAnnualInvestment={setAnnualInvestment}
        setExpectedReturn={setExpectedReturn}
        setDuration={setDuration}
      />
      <Result annualData={annualData} />
    </>
  );
}

export default App;
