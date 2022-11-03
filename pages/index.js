import Head from "next/head";
import { Banner } from "../components/Banner";

const Home = () => {
    return(
        <div>
            <Head>
                <title>HeadFunz</title>
                <meta name="description" content="HeadFunz - we cater the true audiophile"/>
            </Head>
            
            {/* Banner */}
            <Banner/>

                
            
            
        </div>
    )
}

export default Home;