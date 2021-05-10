import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

export default function Layout({ title, description, children }) {
  const router = useRouter();
  return (
    <div>
      <div className="backgroundImage">
        <Image
          className={styles.backgroundImage}
          src="/background.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
    </div>
  );
}
// && denotes then when there is no else.
Layout.defaultProps = {
  title: "CLAUDIA LEE",
  description: "FILM",
};
