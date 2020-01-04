import React from "react";

function Button(props) {
  return (
    <div>
      <p>{props.title}</p>
      <style jsx>{`
        p {
          font-size: 18px;
          color: #fff;
          font-family: "helvetica";
        }
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          background: #2ecc71;
          max-width: 125px;
          max-height: 40px;
          border-radius: 5px;
          cursor: pointer;
        }
        div:hover {
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}

export default Button;
