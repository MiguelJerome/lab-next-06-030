import Head from "next/head";

export default function NotFound() {
    return <>
        <Head>
            <title>Laboratoire - Non trouvé</title>
            <meta name="description" content="Page non trouvé." />

            <meta property="og:title" content="Laboratoire - Non trouvé" />
            <meta property="og:description" content="Page non trouvé." />
            <meta property="og:image" content="http://localhost:3000/logo.png" />
        </Head>

        <div>
            404 | Not Found
        </div>
    </>
}