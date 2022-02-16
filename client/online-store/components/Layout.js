import { Flex, Box } from "@chakra-ui/layout"
import Head  from "next/head"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children, userState }) => {
    return(
        <div className="board">
            <Box marginLeft={"5%"} marginRight={"5%"}>
                <Flex direction="column" minH="100vh" alignItems={"center"} id='header'>
                    <Head>
                    <title>future</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="icon" href="/img/logo.svg"/>
                    </Head>    
                    <Header user={ userState } />
                    { children }
                    <Footer/>
                </Flex>
            </Box>
        </div>
    )
    
}

export default Layout
