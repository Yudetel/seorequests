"use client";

import { useState } from "react";
import styles from "./catalog.module.scss";

const AddCatalog = ({ addHandler }) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [url, setUrl] = useState("");
  const [oldUrl, setOldUrl] = useState("");
  const [urlError, setUrlError] = useState("");
  const [description, setDescription] = useState("");

  const add = async () => {
    setNameError(false);
    setUrlError(false);
    if (name === "") {
      setNameError(true);
      return null;
    }
    if (url === "") {
      await setUrlError("You forgot to type an url!!!");
      console.log(urlError);
      return null;
    }
    try {
      const res = await fetch("/api/catalogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, url, description }),
      });
      const data = await res.json();
      console.log(data);
      if (data.message === "Alredy exists") {
        setUrlError(url + "    Alredy exists!!!");
        setOldUrl(url);
        setUrl("");
        return null;
      }
      addHandler(data);
      setName("");
      setDescription("");
      setNameError(false);
      setUrl("");
      setUrlError("");
    } catch (error) {}
  };

  return (
    <div className={styles.addCatalog}>
      <h2 className={styles.title}>Add Catalog</h2>
      <div className={styles.line}></div>
      <div className={styles.inputWrapper}>
        <div className={styles.formControl}>
          <label htmlFor="catalogName">Name</label>
          <input
            className={nameError ? styles.error : ""}
            type="text"
            id="catalogName"
            value={name}
            placeholder={
              nameError ? "You forgot to type a name!!!" : "Type a name..."
            }
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setNameError(false)}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="catalogUrl">Url</label>
          <input
            className={urlError ? styles.error : ""}
            type="text"
            id="catalogUrl"
            placeholder={urlError ? urlError : "Type an url..."}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onFocus={() => {
              console.log(urlError == oldUrl + "    Alredy exists!!!");
              if (urlError == oldUrl + "    Alredy exists!!!") {
                setUrl(oldUrl);
                setOldUrl("");
              }
              setUrlError("");
            }}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="catalogDescription">Description</label>
          <textarea
            id="catalogDescription"
            value={description}
            placeholder="Type a description..."
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.formControl + " " + styles.right}>
        <input type="button" value="Add Publicist" />
      </div>
      <div className={styles.line}></div>
      <div className={styles.formControl + " " + styles.right}>
        <input type="button" value="Add Catalog" onClick={add} />
      </div>
    </div>
  );
};

export default AddCatalog;
