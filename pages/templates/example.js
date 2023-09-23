import Layout from "@components/Layout/Layout"
import FeedbackForm from "@components/FeedbackForm/FeedbackForm";
import JokeBlock from "@components/JokeBlock/JokeBlock";

export default function Home() {
    return (
        <Layout title={'Next.js Toolbox Template'}>
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
        </Layout>
    )
}
