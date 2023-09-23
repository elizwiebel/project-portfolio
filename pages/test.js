import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Next.js Toolbox</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header title="Next.js Toolbox" />
                <p>
                    Hi 👋! This template gives you a{" "}
                    <a href="https://nextjs.org/">Next.js</a> app with the scaffolding for{" "}
                    <a href="https://www.netlify.com/products/functions/">
                        Netlify Functions
                    </a>
                    , <a href="https://www.netlify.com/products/forms/">Forms</a>, and{" "}
                    <a href="https://docs.netlify.com/routing/redirects/">Redirects</a>. Our
                    aim was to give you the code you would need to hit the ground running
                    with a few fun features.
                </p>
                <hr />
                <p className="description">
                    Here's an example of a Netlify Form! When you fill this out, the
                    submissions can be found in the Netlify Admin site.
                </p>
                <FeedbackForm />
                <JokeBlock />
            </main>
            <Footer />
        </div>
    )
}
