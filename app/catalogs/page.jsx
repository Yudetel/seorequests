import styles from "./catalogs.module.scss";
import Catalogs from "@/components/catalogs/catalogs";

const page = async () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}></div>
        <Catalogs />
      </div>
    </>
  );
};

export default page;
