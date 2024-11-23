import '../styles/globals.css'

// This default export is required in a new 'pages/_app.js
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}









// The code below makes the navbar appear in all pages....

// import "../styles/globals.css";
// import Head from "next/head";

// import Header from "../components/Header";

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <title>Navbar Example</title>
//       </Head>
//       <Header />
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;