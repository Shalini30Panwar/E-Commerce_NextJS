import Card from "@/components/home/Card";
import Head from "next/head";

export default function Home({products}) {
  return (
    <>
      <Head>
        <title>E-Commerce</title>
      </Head>
      <Card data={products}/>
    </>
  );
}


export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return {
    props: { products: data.products }
    // ,
    // revalidate: 60, 
  };
}
