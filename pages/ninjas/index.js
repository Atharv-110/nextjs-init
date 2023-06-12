import Head from "next/head";
import Styles from "../../styles/User.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
};

const Ninjas = ({ users }) => {
  return (
    <>
      <Head>
        <title>NextJS-AV | Users</title>
        <meta name="keywords" content="Atharv" />
      </Head>
      <div>
        <h1>All Users</h1>
        {users.map((user) => (
          <div key={user.id}>
            <a className={Styles.single}>
              <h3>{user.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
