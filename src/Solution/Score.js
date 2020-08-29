import React from "react";

const Score = (props) => {
  return (
    <p className="text">
      Your Score: {props.correctQuestion}/{props.answeredQuestion}
    </p>
  );
};

export default Score;
