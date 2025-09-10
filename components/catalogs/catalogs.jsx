"use client";

import styles from "./catalog.module.scss";
import AddCatalog from "./addCatalog";
import { useEffect, useState } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { BiSolidTrash } from "react-icons/bi";
import Link from "next/link";

const Catalogs = () => {
  const [catalogs, setCatalogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/catalogs`
        );
        const data = await res.json();
        setCatalogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const addHandler = (data) => {
    const newCatalogs = JSON.parse(JSON.stringify(catalogs));
    newCatalogs.push(data);
    setCatalogs(newCatalogs);
  };

  return (
    <div>
      <AddCatalog addHandler={addHandler} />
      <div className={styles.catalogs}>
        {catalogs?.map((cat) => (
          <div key={cat._id} className={styles.catalog}>
            <div className={styles.name}>
              <Link href={cat.url} target="blank">
                {" "}
                {cat.name}
              </Link>
            </div>
            <div className={styles.buttons}>
              <Link href={`/catalogs/${cat._id}`}>
                <div className={styles.button}>
                  <RiEdit2Fill />
                </div>
              </Link>
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

export default Catalogs;
