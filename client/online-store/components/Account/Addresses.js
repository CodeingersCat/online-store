import { Box, Button, Flex, Heading, List, ListItem, OrderedList, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { UserContext } from "../../helpers/context"

const Addresses = () => {
    const {user, setUser} = useContext(UserContext)
    return(
        <Box w={"100%"} mt={["20px", "20px", "5vh"]}>
            {user.addresses.length === 0 && 
            (
                <Heading>No addresses yet. </Heading>
            )
            }
            {!(user.addresses.length === 0) &&  
            (
                <OrderedList fontSize={["14px", "18px", "20px"]} spacing={4}>
                {user.addresses.map(address => {
                    let i = 0;
                    return(
                            <ListItem key={i++}>
                                <Box>
                                    <Flex alignItems={"center"} justifyContent={"space-between"} maxW={"800px"}>
                                        <Text w={["60%", "60%"]} >{address}</Text>
                                        <Button variant={"solid"} colorScheme={"teal"}>Edit</Button>
                                    </Flex>    
                                </Box>
                            </ListItem>
                    )
                })}
                </OrderedList>
            )
            }
            <Button variant={"solid"} colorScheme={"teal"} w={"100px"} mt={"40px"}>Add</Button>

        </Box>
    )
}

export default Addresses;