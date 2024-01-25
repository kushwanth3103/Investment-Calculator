import React from "react";

export default function UserInput({
  setDuration,
  setExpectedReturn,
  setAnnualInvestment,
  setInitialInvestment,
}) {
  return (
    <section id="user-input">
      <div id="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            onChange={(e) => setInitialInvestment(+e.target.value)}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            onChange={(e) => setAnnualInvestment(+e.target.value)}
            required
          />
        </p>
      </div>
      <div id="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            onChange={(e) => setExpectedReturn(+e.target.value)}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            onChange={(e) => setDuration(+e.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
