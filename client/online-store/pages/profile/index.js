import { Box, Heading, Image, Flex, Button, Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../helpers/context";
import Link from 'next/link';
import { isAuthenticated } from "../../helpers/User";
import { useRouter } from 'next/router'
import Orders from "../../components/Account/Orders";
import Addresses from "../../components/Account/Addresses";
 
const Profile = () => {
    if(!isAuthenticated){
        useRouter().push("/login");
    }
    const {user, setUser} = useContext(UserContext)
    return(    
        <Box w="100%">
            <Flex width={"100%"} alignItems={"center"} paddingBottom={"2%"}>
                <Flex  width={"20%"}>
                    <Box borderWidth={"thick"} borderColor={"teal"} borderRadius='full' boxSize={"210px"}>
                    <Image
                        borderRadius="full"
                        boxSize='200px'
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flh6.googleusercontent.com%2Fproxy%2FsxNE00boO9SeAcEv5dU9Hrkr75C7VLvzEzpF-FxpsWITH3C0-ducmMbNYgJx3__11eFBnZOdlFB7kYM2hnkf5ANmNVXbY3KUl8E8z6ApjswUOQ5RJlyv4gy3_KMXmKMyl8uWltuhbw%3Dw1200-h630-p-k-no-nu&f=1&nofb=1"
                        objectFit={"contain"}
                    />
                    </Box>
                </Flex>
                <Flex direction={"column"} paddingLeft={"5%"} justify={"space-evenly"} width={"80%"}>
                    <Heading size={"3xl"} paddingBottom={"5%"}>
                        Welcome, {user.name}
                    </Heading>
                    <Link href="profile/edit">
                    <Button variant={"solid"} colorScheme={"teal"} width={"20%"}>Edit profile</Button>
                    </Link>
                </Flex>
            </Flex>
            <Tabs size={"lg"} variant={"soft-rounded"} mt={"5vh"}>
                <TabList>
                    <Tab px={"2%"} color={"black"} mr={"3%"}>Your Orders</Tab>
                    <Tab px={"2%"} color={"black"} mr={"3%"}>Your Addresses</Tab>
                    <Tab px={"2%"} color={"black"} mr={"3%"}>Payment methods</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Orders/>
                    </TabPanel>
                    <TabPanel>
                        <Addresses/>
                    </TabPanel>
                    <TabPanel>
                    <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default Profile;