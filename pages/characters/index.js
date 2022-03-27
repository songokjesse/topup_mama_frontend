import styles from "../../styles/Book.module.css";
import Head from "next/head";
import Image from "next/image";
// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://topupmama-backend.herokuapp.com/api/v1/characters')
    const characters = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            characters,
        },
    }
}
function Characters({characters}) {
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
                Character Totals: {characters.character_totals}

                {characters.character_data.map((character) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className={styles.card}>
                        Url:  {character.url} <br/>
                        Name: {character.name} <br/>
                        Gender: {character.gender} <br/>
                        Culture: {character.culture} <br/>
                        Birth Date: {character.born}
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

export default Characters