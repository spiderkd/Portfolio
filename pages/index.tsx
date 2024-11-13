import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Yash Kedia | Frontend Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Yash kedia | Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Yash kedia | Frontend Developer" />
        <meta name="description" content="Hey! I'm Yash kedia." />

        <meta name="twitter:card" content="summary" />

        <meta name="twitter:title" content="Yash kedia | Frontend Developer" />
        <meta name="twitter:description" content="Hey! I'm Yash kedia." />
      </Head>
      <Home />
    </>
  );
}
