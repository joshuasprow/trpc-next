import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Code from "../components/Code";
import Description from "../components/Description";
import Main from "../components/Main";
import Title from "../components/Title";
import { trpc } from "../utils/trpc";
import styles from "./index.module.css";

function TrpcQuery() {
  const hello = trpc.hello.useQuery({ text: "client" });

  return (
    <Code>
      TRPC response: {hello.data ? hello.data.greeting : "loading..."}
    </Code>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js</a>
        </Title>
        <Title>
          ... with <a href="https://trpc.io">TRPC</a>!
        </Title>

        <Description>
          <TrpcQuery />
        </Description>

        <div className={styles.grid}>
          <Link href="/employees" className={styles.card}>
            <h2>Employees &rarr;</h2>
            <p>Browse employee records fetched from the TRPC backend.</p>
          </Link>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </Main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
