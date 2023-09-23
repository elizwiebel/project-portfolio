import Layout from "@components/Layout/Layout"

export default function Success() {
    return (
        <Layout title={'Submission Received'}>
            <h1>Submission Received!</h1>
            <p>Thank you for your feedback! Head back to the <a href="/">home page</a>.</p>
        </Layout>
    )
}
