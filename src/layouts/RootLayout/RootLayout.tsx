import { Outlet } from "react-router-dom";
import styles from "./RootLayout.module.scss";

const RootLayout = () => {
  return (
    <>
      <div className={styles.title}>
        <h1 className={styles.h1}>Treasure Chests !</h1>
        <p className={styles.p}>
          Réponds aux questions et ouvre les coffres dans le temps imparti !
        </p>
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
