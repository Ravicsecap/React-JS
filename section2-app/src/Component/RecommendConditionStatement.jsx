import React from "react";
import { useState } from "react";

function RecommendConditionStatement() {
  const [speed, setSpeed] = useState(90);

  return (
    <div>
      <h1>RecommendConditionStatement</h1>

      {speed && <h2>Hey , Your speed less go on left way</h2>}

      {speed <= 60 ? (
        <h3>Good , join sub way</h3>
      ) : speed >= 100 ? (
        <h3>full speed</h3>
      ) : (
        <h3>please join express way</h3>
      )}
    </div>
  );
}

export default RecommendConditionStatement;

// most recommed use ternery condition 