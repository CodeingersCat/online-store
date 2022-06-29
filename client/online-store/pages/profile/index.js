import { Box, Text, Image, Flex, Button, Tabs, Tab, TabList, TabPanels, TabPanel, Heading } from "@chakra-ui/react";
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
        <Box w="100%" h="90vh">
            <Heading mb="40px">
                <span style={{borderBottom:"4px solid teal"}}>Profile</span>
            </Heading>
            <Flex width={"100%"} alignItems={["flex-start", "center"]} pt={"20px"}  pb={"30px"} flexDirection={["column", "row"]}>
                <Flex width={["30%", "20%"]} pb={["10px", "0"]}>
                    <Box w={"auto"} h={"auto"} borderWidth={["medium", "thick", "thick"]} borderColor={"teal"} borderRadius='50%'
                    maxW={"200px"}>
                        <Image
                            borderRadius="50%"
                            w={"auto"}
                            h={"auto"}
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flh6.googleusercontent.com%2Fproxy%2FsxNE00boO9SeAcEv5dU9Hrkr75C7VLvzEzpF-FxpsWITH3C0-ducmMbNYgJx3__11eFBnZOdlFB7kYM2hnkf5ANmNVXbY3KUl8E8z6ApjswUOQ5RJlyv4gy3_KMXmKMyl8uWltuhbw%3Dw1200-h630-p-k-no-nu&f=1&nofb=1"
                            objectFit={"contain"}
                        />
                    </Box>
                </Flex>
                <Flex direction={"column"} paddingLeft={["0%", "5%", "5%", "2%"]} justify={"space-evenly"} width={"80%"}>
                    <Text fontSize={["3xl", "3xl", "4xl"]} fontWeight={"bold"} paddingBottom={["5%", "5%", "5%", "2%"]}>
                        Hey there, {user.name ? user.name : "Kingston"}
                    </Text>
                    <Link href="profile/edit">
                        <Button variant={"solid"} colorScheme={"teal"} maxW={"200px"}>Edit profile</Button>
                    </Link>
                </Flex>
            </Flex>
            <Tabs size={"lg"} variant={"soft-rounded"} mt={"5vh"} colorScheme="gray">
                <TabList>
                    <Tab px={"4%"} color={"black"} mr={"3%"} fontSize={["16px", "18px", "20px"]} py={"5px"}>Your Orders</Tab>
                    <Tab px={"4%"} color={"black"} fontSize={["16px", "18px", "20px"]} py={"5px"}>Your Addresses</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Orders/>
                    </TabPanel>
                    <TabPanel>
                        <Addresses/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default Profile;