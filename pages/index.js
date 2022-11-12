import Head from "next/head";
import { Banner } from "../components/Banner";
import Sections from "../components/Sections";

const Home = () => {
  return (
    <div>
      <Head>
        <title>HeadFunz</title>
        <meta
          name="description"
          content="HeadFunz - we cater the true audiophile"
        />
      </Head>

      {/* Banner */}
      <Banner />
      
      {/* Different sale sections */}
      <Sections/>
    </div>
  );
};

export default Home;
