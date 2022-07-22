import { Box, Button, Flex, Heading, List, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { UserContext } from "../helpers/context";
import { isAuthenticated } from "../helpers/User";

const Cart = () => {
    const {user, setUser} = useContext(UserContext)
    //const [cart, setCart] = useState([]);
    const { cart } = user;
    const router = useRouter();
    // const [total, setTotal] = useState(0);

    useEffect(async () => {
        // setTotal(getTotal());
        if(!isAuthenticated()) router.push("/login")
        // else {
        //     const prods = await axios.get("http://localhost:5000/api/user/cart", {
        //     headers: {
        //             "Authorization": "Bearer "+isAuthenticated()
        //         }
        //     })

        //     setCart([...prods.data])
        // }
    })
    
    function getTotal(){
        if(cart.length === 0) return 0
        else{
            var total = 0;
            cart.forEach(item => total+=item.subtotal);
            return total;
        }
    }

    return(
        <Box w={"100%"} minH={"90vh"}>
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
                    <Flex flexDirection={["column", "row", "row", "row"]}>
                        <Flex flexDirection={"column"} w={["100%", "60%"]} borderRight={["none", "1px solid teal"]}>
                        {cart.map(item =>
                        (
                            <Box py={"20px"} key={item.prodid} mr={["10px","30px","50px", "100px"]}>
                                <CartItem product={item}/>
                            </Box>
                        ))}
                        </Flex>
                        <Flex direction={"column"} py={"20px"} position={["relative", "fixed"]} ml={["0%", "57%"]}>
                            <Heading>Summary</Heading>
                            <Text fontSize={"larger"} textColor={"teal"} fontWeight={"semibold"} mt={"5px"}>Total : ₹ {getTotal()}</Text>
                            <Button mt={"20px"} variant={"solid"} colorScheme={"teal"} maxW={"180px"}>Proceed to checkout</Button>
                        </Flex>
                    </Flex>
                )
            }

        </Box>
    )
}

export default Cart;