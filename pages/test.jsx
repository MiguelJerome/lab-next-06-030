import Head from "next/head";

export default function Test() {
    return <>
        <Head>
            <title>Laboratoire - Test</title>
            <meta name="description" content="Page de test vide." />

            <meta property="og:title" content="Laboratoire - Test" />
            <meta property="og:description" content="Page de test vide." />
            <meta property="og:image" content="http://localhost:3000/logo.png" />
        </Head>

        <main>
            Test
        </main>
    </>
}