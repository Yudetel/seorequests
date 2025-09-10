"use client";

import { useState } from "react";
import styles from "./user.module.scss";

const AddUser = ({ addHandler }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [oldUrl, setOldUrl] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [platform, setPlatform] = useState("");

  const add = async () => {
    setEmailError(false);
    setPasswordError(false);
    if (email === "") {
      setEmailError(true);
      return null;
    }
    if (password === "") {
      setPasswordError("You forgot to type an password!!!");
      return null;
    }
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, platform }),
      });
      const data = await res.json();
      console.log(data);
      // if (data.message === "Alredy exists") {
      //   setUrlError(url + "    Alredy exists!!!");
      //   setOldUrl(url);
      //   setUrl("");
      //   return null;
      // }
      addHandler(data);
      setEmail("");
      setPlatform("");
      setEmailError(false);
      setPassword("");
      setPasswordError("");
    } catch (error) {}
  };

  return (
    <div className={styles.addCatalog}>
      <h2 className={styles.title}>Add User</h2>
      <div className={styles.line}></div>
      <div className={styles.inputWrapper}>
        <div className={styles.formControl}>
          <label htmlFor="catalogName">Email</label>
          <input
            className={emailError ? styles.error : ""}
            type="text"
            id="catalogName"
            value={email}
            placeholder={
              emailError ? "You forgot to type a E-mail!!!" : "Type a E-mail..."
            }
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailError(false)}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="catalogUrl">Password</label>
          <input
            className={passwordError ? styles.error : ""}
            type="text"
            id="catalogUrl"
            placeholder={passwordError ? passwordError : "Type a password..."}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => {
              // console.log(urlError == oldUrl + "    Alredy exists!!!");
              // if (urlError == oldUrl + "    Alredy exists!!!") {
              //   setUrl(oldUrl);
              //   setOldUrl("");
              // }
              setPasswordError("");
            }}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="catalogDescription">Platform</label>
          <input
            type="text"
            id="catalogDescription"
            value={platform}
            placeholder="Type a description..."
            onChange={(e) => setPlatform(e.target.value)}
          />
        </div>
      </div>
      {/* <div className={styles.line}></div>
      <div className={styles.formControl + " " + styles.right}>
        <input type="button" value="Add Publicist" />
      </div> */}
      <div className={styles.line}></div>
      <div className={styles.formControl + " " + styles.right}>
        <input type="button" value="Add User" onClick={add} />
      </div>
    </div>
  );
};

export default AddUser;
