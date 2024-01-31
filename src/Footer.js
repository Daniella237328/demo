import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <p className="footer">
        This project is coded by{" "}
        <a
          href="https://www.linkedin.com/in/naomidewys"
          target="_blank"
          rel="noopener noreferrer"
        >
          Daniella Djopa
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/Daniella237328/demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        , and hosted on{" "}
        <a href="" target="_blank" rel="noopener noreferrer">
          Netlify
        </a>
        .
      </p>
    </div>
  );
}
