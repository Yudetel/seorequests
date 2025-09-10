import Catalog from "@/components/catalogs/catalog/Catalog";
import styles from "./styles.module.scss";

const page = async ({ params }) => {
  const { catalog } = await params;

  const data = await fetchCatalog(catalog);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{data.name}</h1>
      </div>
      <Catalog data={data} />
    </div>
  );
};

export default page;

const fetchCatalog = async (cat) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}api/catalog/${cat}`
  );
  const data = await res.json();

  return data;
};
