"use client";

import styles from "./user.module.scss";
import AddUser from "./addUser";
import { useEffect, useState } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { BiSolidTrash } from "react-icons/bi";
import { FaCopy } from "react-icons/fa6";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/users`
        );
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const addHandler = (data) => {
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.push(data);
    setUsers(newUsers);
  };

  async function copyHtmlToClipboard(htmlContent) {
    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([htmlContent], { type: "text/html" }),
          "text/plain": new Blob([htmlContent], { type: "text/plain" }), // Provide a plain text fallback
        }),
      ]);
      console.log("HTML content copied to clipboard successfully!");
    } catch (err) {
      console.error("Failed to copy HTML content:", err);
    }
  }

  return (
    <div>
      <AddUser addHandler={addHandler} />
      <div className={styles.catalogs}>
        {users?.map((user) => (
          <div key={user._id} className={styles.catalog}>
            <div
              className={styles.name}
              onClick={() => copyHtmlToClipboard(user.email)}
            >
              {user.email}
              <FaCopy />
            </div>
            <div
              className={styles.email}
              onClick={() => copyHtmlToClipboard(user.password)}
            >
              {user.password}
              <FaCopy />
            </div>
            <div className={styles.buttons}>
              <div className={styles.button}>
                <RiEdit2Fill />
              </div>
              <div className={styles.button}>
                <BiSolidTrash />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
