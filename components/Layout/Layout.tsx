import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";

export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="This project is designed to be a private web development showcase. It is currently still in the early stages, but will evolve over time as more content is added"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className={styles["main-container"]}>
                <div className={styles["main-box"]}>
                    <main className={styles["main"]}>{children}</main>
                </div>
            </div>
            <Footer />
        </>
    );
}
