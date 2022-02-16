import { Box, Heading, List, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { UserContext } from "../helpers/context";
import { getAllProds, getOneProd } from "../helpers/Product";
import { isAuthenticated } from "../helpers/User";

const Cart = () => {
    const {user, setUser} = useContext(UserContext)
    const [cart, setCart] = useState([]);

    useEffect(async () => {
        const prods = await axios.get("http://localhost:5000/api/user/cart", {
            headers: {
                "Authorization": "Bearer "+isAuthenticated()
            }
        })

        setCart([...prods.data])
    }, [user])

    return(
        <Box w={"100%"}>
            <Heading mb="8vh">
            <span style={{borderBottom:"4px solid teal"}}>
                Your cart
            </span>
            </Heading>

            {user.cart.length === 0 && 
                (
                <Box h={"80vh"}>
                    <Text>No items in cart</Text>
                </Box>
            )}
            {!(user.cart.length === 0) &&
                (   
                    <Box>
                        {cart.map(item =>
                        (
                            <Box key={item._id} py={"2%"}>
                                <Card product={item}/>
                            </Box>
                        ))}
                    </Box>
                )
            }

        </Box>
    )
}

export default Cart;