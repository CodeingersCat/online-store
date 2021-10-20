import { Flex } from "@chakra-ui/layout"
import Head  from "next/head"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
    return(
        <div>
            <Flex direction="column" minH="100vh" ml="6vw" mr="6vw">
                <Head>
                <title>future</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>    
                <Header/>
                { children }
                <Footer/>
            </Flex>
        </div>
    )
    
}

export default Layout
