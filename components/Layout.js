import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Menu from "./Menu";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>GitHub Merch {title ? `| ${title}` : ""}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Layout;
