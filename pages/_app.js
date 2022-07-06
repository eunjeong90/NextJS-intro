import Layout from "../Components/Layout";
import "../styles/globals.css";

export default function MyApp ({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global> {`
        a {
          color: black;
          font-weight: bold;
        }
      `}
      </style>
    </Layout>
  )
}