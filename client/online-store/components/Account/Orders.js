import { Box, Heading } from "@chakra-ui/react"
import { useContext } from "react"
import { UserContext } from "../../helpers/context"

const Orders = () => {
    const {user, setUser} = useContext(UserContext)
    return(
        <Box w={"100%"} mt={"5vh"}>
            {user.orders.length === 0 && 
            (
                <Heading>No orders yet. </Heading>
            )
            }
        </Box>
    )
}

export default Orders;