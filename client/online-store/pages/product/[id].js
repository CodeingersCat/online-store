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
    <div style={{ width: "100%" }}>
      <Flex alignItems={"top"} maxH={"80vh"}>
        <Box
          w={"40%"}
          boxShadow="2xl"
          borderRadius="2xl"
          overflow="hidden"
          background={"white"}
          h={"40%"}
        >
          <Flex align="center" justify="center">
            <Image
              boxSize="400px"
              objectFit={"contain"}
              src={product.image}
              padding={"10%"}
            />
          </Flex>
        </Box>
        <Flex
          maxW={"60%"}
          direction={"column"}
          justifyContent={"space-between"}
          paddingLeft={"10%"}
        >
          <Text fontSize={"3xl"} fontWeight={"semibold"}>
            {product.name}
          </Text>
          <Text as="u" fontSize={"larger"} paddingTop={"5%"}>
            About this item
          </Text>
          <Text fontSize={"larger"} maxW={"60%"}>
            {product.description}
          </Text>
          <Stack paddingBottom={"2%"}>
            <Stat size={"md"} paddingTop={"5%"}>
              <StatLabel fontSize={"lg"}>Price</StatLabel>
              <StatNumber fontSize={"3xl"}>₹ {product.price}/-</StatNumber>
              <StatHelpText fontSize={"lg"}>
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
      </Flex>
    </div>
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
