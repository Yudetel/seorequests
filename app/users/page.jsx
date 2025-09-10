import Users from "@/components/users/users";
import styles from "./styles.module.scss";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      <Users />
    </div>
  );
};

export default page;
