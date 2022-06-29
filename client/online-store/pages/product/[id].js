import {
  Image,
  Text,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  ButtonGroup,
  Button,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/layout";
import { useRouter } from "next/router";
//import products from "../../data/products";
import { getAllProds, getOneProd } from "../../helpers/Product";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../../helpers/context";
import { toCart } from "../../helpers/Cart";

const Product = (props) => {
  const product = props.prod;
  const { user, setUser } = useContext(UserContext);
  const toast = useToast();
  
  const addToCart = async() => {
    let result;
    try {
      //receiving user data from server
      result = await toCart(product._id);
      toast({
        title: "Yay! This product has been added to your cart",
        status: "success",
        isClosable: true,
      });
      setUser({ ...user, cart: [...user.cart, product._id] });
    } catch (err) {
      //error notification
      console.log(err)
      toast({
        title:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
        status: "error",
        isClosable: true,
      });
    } 
  };

  return (
      <Flex alignItems={["center", "flex-start"]} justifyContent={"space-between"} flexDir={["column", "row"]} pt={"30px"}>
        <Box
          w={["80%" , "40%"]}
          boxShadow="2xl"
          borderRadius="2xl"
          overflow="hidden"
          background={"white"}
          maxH={"500px"}
        >
          <Flex align="center" justify="center" h={"100%"}>
            <Image
              objectFit={"contain"}
              maxH={["40vh", "500px"]}
              src={product.image}
              py={"6"}
              px={"6"}
            />
          </Flex>
        </Box>
        <Box
          w={["100%", "50%"]}
          paddingTop={["10%", "0%"]}
        >
        <Flex
          direction={"column"}
        >
          <Text fontSize={["larger", "larger", "2xl", "3xl"]} fontWeight={"semibold"} w={"100%"}>
            {product.name}
          </Text>
          {/* <Text as="u" fontSize={["large", "large", "larger"]} paddingTop={["2%", "2%","2%"]}>
            About
          </Text> */}
          <Text fontSize={["md", "md", "larger"]} maxW={["100%", "80%"]} paddingTop={["6%", "2%","2%"]}>
            {product.description}
          </Text>
          <Stack paddingBottom={"2%"}>
            <Stat size={"md"} paddingTop={"10%"}>
              <StatLabel fontSize={"lg"}>Price</StatLabel>
              <StatNumber fontSize={"3xl"} >₹ {product.price}/-</StatNumber>
              <StatHelpText fontSize={"lg"} style={{borderBottom:"4px solid teal"}} pb={"10px"}>
                {product.stock} in stock
              </StatHelpText>
            </Stat>
            <ButtonGroup
              variant={"solid"}
              colorScheme={"teal"}
              spacing={"6"}
              paddingTop={""}
            >
              <Button onClick={addToCart}>Add to Cart</Button>
              <Link href="/checkout" as={"checkout/" + product._id}>
                <Button>Buy Now</Button>
              </Link>
            </ButtonGroup>
          </Stack>
        </Flex>
        </Box>
      </Flex>
  );
};

export async function getStaticPaths() {
  const prods = await getAllProds();
  const paths = prods.map((prod) => ({
    params: { id: prod._id },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
  const prod = await getOneProd(context.params.id);
  return {
    props: { prod },
  };
};

export default Product;
