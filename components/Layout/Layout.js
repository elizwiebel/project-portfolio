import Head from "next/head"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import styles from './Layout.module.scss'

export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className={styles['main-container']}>
                <main className={styles['main']}>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}
