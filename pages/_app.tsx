import "@styles/main.scss";
// import { useReportWebVitals } from 'next/web-vitals'

function Application({ Component, pageProps }) {
    // useReportWebVitals((metric) => {
    //   console.log(metric)
    // })

    return <Component {...pageProps} />;
}

export default Application;
