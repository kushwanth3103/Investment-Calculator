import { formatter } from "../util/investment";
export default function Result({ annualData }) {
  console.log(annualData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invesment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data) => {
          const totalInterest =
            data.valueEndOfYear - data.annualInvestment * data.year;
          return [
            <tr key={data.year}>
              <th>{data.year}</th>
              <th>{formatter.format(data.valueEndOfYear)}</th>
              <th>{formatter.format(data.interest)}</th>
              <th>{totalInterest}</th>
              <th>{data.annualInvestment}</th>
            </tr>,
          ];
        })}
      </tbody>
    </table>
  );
}
