import React from "react";
import Link from "next/link";

function NavBar(props) {
  return (
    <div className="container">
      <div className="item">
        <Link href="/">
          <p>Home</p>
        </Link>
      </div>
      <Link href="/about">
        <div className="item">
          <p>About</p>
        </div>
      </Link>
      <Link href="/game">
        <div className="item">
          <p>Game</p>
        </div>
      </Link>
      <Link href="/contact">
        <div className="item">
          <p>Contact</p>
        </div>
      </Link>
      <style jsx>{`
        div.container {
          display: flex;
          border-bottom: 1px solid #2ecc71;
          align-items: center;
          width: 100%;
          height: 3em;
          flex-direction: row;
          justify-content: flex-end;
        }
        div.item {
          margin-right: 2.5em;
        }
        p {
          color: #2ecc71;
          cursor: pointer;
          font-family: "helvetica";
        }
        p:hover {
          color: #1c9951;
        }
      `}</style>
    </div>
  );
}

export default NavBar;
