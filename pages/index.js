import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";


export default function HomePage() {
  return (
    <>
    <Head>
      <title>EverTime</title>
    </Head>
    <Banner></Banner>
    <Products></Products>
    </>
  )
}
