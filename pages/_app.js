
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/index.scss';
import '../styles/loader.scss';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/homepage.scss';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Crystel G.</title>
                <link rel="icon" href="/crystel.png" />
                <link rel="stylesheet" href="https://getbootstrap.com/docs/3.3/dist/css/bootstrap.min.css" />
            </Head>
            
            <Component {...pageProps} />
        </>
    )
}