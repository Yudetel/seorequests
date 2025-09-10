"use client";

import { useState } from "react";
import styles from "./styles.module.scss";

const Catalog = ({ data }) => {
  const [name, setName] = useState(data.name);
  const [url, setUrl] = useState(data.url);
  const [description, setDescription] = useState(data.description);
  const [publicists, setPublicists] = useState(data.publicists);
  return (
    <div className={styles.catalog}>
      <div className={styles.mainInformation}>
        <div className={styles.left}>
          <div className={styles.formControl}>
            <label htmlFor="catalogName">Name</label>
            <input
              id="catalogName"
              type="text"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="catalogUrl">Url</label>
            <input
              id="catalogUrl"
              type="text"
              value={url || ""}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.formControl}>
            <label htmlFor="catalogDescription">Description</label>
            <textarea
              id="catalogDescription"
              value={description || ""}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.publicists}>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>Add Publicist</button>
        </div>
        <div className={styles.line}></div>
        <ul className={styles.publicistsList}>
          {publicists.map((pub) => (
            <li>{pub.name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.openSite}>
        <div className={styles.leftSite}>
          <iframe
            style={{ borderRadius: "5px" }}
            src={url} // Replace with the URL you want to embed
            width="100%"
            height="560px"
            title="Embedded Content"
            frameBorder="0"
            allowFullScreen // Optional: allows full-screen display
            sandbox="allow-scripts allow-same-origin" // Optional: enhances security
          ></iframe>
        </div>
        <div className={styles.rightSite}></div>
      </div>
    </div>
  );
};

export default Catalog;
