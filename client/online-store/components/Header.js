import { Flex, Spacer } from '@chakra-ui/layout'
import { Box, Heading, Button } from '@chakra-ui/react'

const Header = () => {
    return(
      <Flex h="20vh" w="100%" mt="5vh" justifyContent="center">
        <Box>
          <Heading border="4px" borderStyle="solid" borderColor="teal" p="2" pt="0">
            futur_ware
          </Heading>
        </Box>
        <Spacer/>
        <Box>
          <Button mr="4" colorScheme="teal">Sign Up</Button>
        </Box>
        <Box>
          <Button colorScheme="teal">Log In</Button>
        </Box>
      </Flex>
    )
}

export default Header