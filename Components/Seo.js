import Head from "next/Head";
import {useRouter} from "next/router";

export default function Seo({pathname}) {
  const router = useRouter();
  const pathObj = {'/' : 'Home', '/about' : 'About', '/movies/:*.**' : 'movies'};

  return (
    <Head>
      <title>{pathObj[router.pathname]} | Next Movies</title>
    </Head>
  )
}