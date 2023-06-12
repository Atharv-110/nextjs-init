import Head from "next/head";
import Styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS-AV | Home</title>
        <meta name="keywords" content="Atharv" />
      </Head>
      <div>
        <h1 className={Styles.title}>Home</h1>
        <h3 className={Styles.subtitle}>Atharv is Learning Next JS</h3>
        <p className={Styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni animi
          id, voluptates mollitia sequi deserunt? Animi vitae suscipit, ratione
          itaque quisquam omnis harum at cum sit, a unde et fugiat aliquam
          distinctio dolor doloribus quod numquam velit inventore rem eius iste
          minus. Quos modi eos eum laborum ea reprehenderit non?
        </p>
        <Link href="/ninjas" className={Styles.btn}>
          See Users
        </Link>
      </div>
    </>
  );
}
