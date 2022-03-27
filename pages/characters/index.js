import styles from "../../styles/Book.module.css";
import Head from "next/head";
import Image from "next/image";
function Characters() {
    return (
        <div className={styles.container}>
            <Head>
                <title>TOPUP MAMA Book Database</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Characters
                </h1>

            </main>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
                    &nbsp; with &nbsp; <b>LumenAPI</b>
                </a>
            </footer>
        </div>
    )
}

export default Characters