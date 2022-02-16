import { Box, Button, Heading, List, ListItem, OrderedList, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { UserContext } from "../../helpers/context"

const Addresses = () => {
    const {user, setUser} = useContext(UserContext)
    return(
        <Box w={"100%"} mt={"5vh"}>
            {user.addresses.length === 0 && 
            (
                <Heading>No addresses yet. </Heading>
            )
            }
            {!(user.addresses.length === 0) &&  
            (
                <OrderedList fontSize={"2xl"}  spacing={4}>
                {user.addresses.map(address => {
                    let i = 0;
                    return(
                            <ListItem key={i++} w={"30%"} >
                                <Text>{address}</Text>
                            </ListItem>
                    )
                })}
                </OrderedList>
            )
            }
            <Button variant={"solid"} colorScheme={"teal"} w={"10%"} mt={"5%"}>Add</Button>

        </Box>
    )
}

export default Addresses;