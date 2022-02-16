import {Image, Badge } from "@chakra-ui/react"
import { Box, Flex } from "@chakra-ui/layout"
import { useState } from "react";
 
const Card = ({product}) => {
  const [hover, setHover] = useState(1);
  return (
    <Box maxW="sm" boxShadow="2xl"  borderRadius="2xl" overflow="hidden" background={"white"}onMouseEnter={() => setHover(1.17)} onMouseLeave={() => setHover(1)}>
      <Flex align="center" justify="center">
      <Image boxSize="200px" objectFit="contain" src={product.image} alt="image" pt="6" style={{transform: `scale(${hover})`, transition: "transform .6s"}} />
      </Flex>
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {product.category}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {product.name}
        </Box>

        <Box>
        ₹{product.price}
        </Box>

      </Box>
    </Box>
  );
};

export default Card
