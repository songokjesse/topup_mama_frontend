import styles from "../../styles/Book.module.css";
import Head from "next/head";
import Image from "next/image";

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://topupmama-backend.herokuapp.com/api/v1/books')
    const books = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            books,
        },
    }
}

function Books({books}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>TOPUP MAMA Book Database</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Books
                </h1>
                {books.map((book) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className={styles.card}>
                        Book Name:  {book.name} <br/>
                        Authors: {book.authors} <br/>
                        Comments: {book.comments}
                    </div>
                ))}


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

export default Books