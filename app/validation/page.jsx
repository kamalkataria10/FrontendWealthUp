"use client";

import styles from "./page.module.css";
import { useState } from "react";

export default function Validation() {
  const [code, setCode] = useState("click on refresh");
  const [incode, setinCode] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://wealthup-node.vercel.app/api/codes/use",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code: incode }),
        }
      );
      console.log(incode);
      const data = await response.json();
      console.log(data);
      if (response.ok && !data.error) {
        setMessage(data.message || "Code is correct");
      } else {
        setMessage(data.error || "Enter a valid code");
      }
    } catch (error) {
      setMessage("Something went wrong:" + error);
    }
  };

  const handleRefresh = async () => {
    try {
      const response = await fetch(
        "https://wealthup-node.vercel.app/api/codes"
      );
      const data = await response.json();

      if (response.ok) {
        setCode(data.code || "");
        setMessage("");
      } else {
        setMessage(data.error || "Error generating code");
      }
    } catch (error) {
      setMessage("Something went wrong:" + error);
    }
  };
  return (
    <div className={styles.validation}>
      <div className={styles.container}>
        <h4>{code}</h4>
        <button onClick={handleRefresh}>Refresh code</button>
        <br />
        <input type="text" value={incode} onChange={(e) => setinCode(e.target.value)}
            placeholder="Enter code" />
        <button onClick={handleSubmit}>Validate code</button>
        <div className={styles.error}>{message}</div>
      </div>

      
    </div>
  );
}
