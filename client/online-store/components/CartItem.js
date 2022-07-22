import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../helpers/context";
import { isAuthenticated } from "../helpers/User";


const CartItem = ({product}) => {
    console.log(product)
    const { user, setUser } = useContext(UserContext);

    const handleRemove = async (e) => {
        e.preventDefault();

        const deleted = await axios.delete("http://localhost:5000/api/user/deleteCartItem", {
            headers : {
                "Authorization": "Bearer "+isAuthenticated()
            },

            data : {
                "prodid": product.prodid
            }
        })

        if(deleted){
            const cart = user.cart.filter(item => item.prodid !== product.prodid);
            setUser({...user, cart: cart});
        }
    }

    return (
        <Box boxShadow="2xl" borderRadius="2xl" background={"white"} maxW={"700px"} >
            <Flex direction={"column"} py={"10px"}>
                <Flex alignItems={"center"} mb={"10px"}>
                    <Box w={"40%"} ml={"20px"}>
                        <Image boxSize={"120px"} w={"150px"} objectFit="contain" src={product.image} alt="image" />
                    </Box>
                    <Box h={"140px"} mr={"20px"} py={"3"} w={"60%"} ml={"20px"}>
                        <Flex direction={"column"} justifyContent={"space-evenly"} h={"100%"} w={"100%"}>
                            <Text fontSize={"md"} noOfLines={"2"} fontWeight={"semibold"}>{product.name}</Text>
                            <Text fontSize={"small"}>Qty: {product.qty}</Text>
                            <Text fontSize={"small"}>Amount: ₹{product.price}</Text>
                            <Text fontSize={"small"}>Sub-total: ₹{product.subtotal}</Text>
                        </Flex>
                    </Box>
                </Flex>
                <Box mx={["auto", "auto", "20px", "20px", "20px"]}>
                    <Button colorScheme={"red"} mr={"10px"} onClick={handleRemove}>Remove</Button>
                    <Link href="/checkout" as={"checkout/" + product._id}>
                        <Button colorScheme={"green"} ml={"10px"}>Buy Now</Button>
                    </Link>
                </Box>
            </Flex>
        </Box>
    )
} 

export default CartItem;