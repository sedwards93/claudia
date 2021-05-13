import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css";

export default function Layout({ title, description, hero, children }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="preload"
          href="/fonts/open-sans/OpenSans-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {hero === true && (
        <Image
          className={styles.backgroundImage}
          prioirty="true"
          quality={100}
          src="/background.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      )}
      <Navbar />
      <div> {children}</div>
    </div>
  );
}
// && denotes then when there is no else.
Layout.defaultProps = {
  title: "CLAUDIA LEE",
  description: "FILM",
};
