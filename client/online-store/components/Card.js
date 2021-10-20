import {Image, Badge, StarIcon } from "@chakra-ui/react"
import { Box, Flex } from "@chakra-ui/layout"
 
const Card = ({product}) => {
  return (
    <Box maxW="sm" borderWidth="1px transparent" borderRadius="lg" overflow="hidden">
      <Flex align="center" justify="center">
      <Image boxSize="200px" objectFit="contain" src={product.image} alt="image" />
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
