import {Image, Badge } from "@chakra-ui/react"
import { Box, Flex } from "@chakra-ui/layout"
import { useState } from "react";
import Link from "next/link";
 
const Card = ({product}) => {
  const [hover, setHover] = useState(1);
  return (
    <Box maxW="sm" minW="100px"  boxShadow="2xl" borderRadius="2xl" overflow="hidden" background={"white"} onMouseEnter={() => setHover(1.17)} onMouseLeave={() => setHover(1)} className="card-element">
      <Link href={"/product/"+product._id}>
        <a href={"/product/"+product._id}>
          <Flex align="center" justify="center">
            <Image boxSize="200px" objectFit="contain" src={product.image} alt="image" pt="6" style={{transform: `scale(${hover})`, transition: "transform .6s"}} px="6"/>
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
              textColor={hover === 1.17 ? "teal" : "black"}
              isTruncated
            >
              {product.name}
            </Box>

            <Box>
            ₹{product.price}
            </Box>

          </Box>
        </a>
      </Link>
    </Box>
  );
};

export default Card
