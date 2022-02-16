import Link from "next/link";
import { Flex, Spacer } from "@chakra-ui/layout";
import { Box, Heading, Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  
} from "@chakra-ui/menu";
import { ChevronDownIcon  } from "@chakra-ui/icons" 
import { signout } from "../helpers/User";
import { useContext } from "react";
import { UserContext } from "../helpers/context";

const Header = () => {
  
  const {user, setUser} = useContext(UserContext)
  const toast = useToast();

  return (
    <Flex h="20vh" w="100%" mt="5vh" justifyContent="center" id='header'>
      <Box>
        <Link href="/">
          <a>
            <Heading
              border="4px"
              borderStyle="solid"
              borderColor="teal"
              p="2"
              pt="0"
              shadow="2xl"
              borderRadius="lg"
              background={"white"}
            >
              futur_ware
            </Heading>
          </a>
        </Link>
      </Box>
      <Spacer />
      {!user.loggedIn && (
        <Box>
          <Link href="/signup">
            <a>
              <Button mr="4" colorScheme="teal">
                Sign Up
              </Button>
            </a>
          </Link>
        </Box>
      )}
      {!user.loggedIn && (
        <Box>
          <Link href="/login">
            <a>
              <Button colorScheme="teal">Log In</Button>
            </a>
          </Link>
        </Box>
      )}
      {user.loggedIn && (
        <Box>
            <Menu>
              <MenuButton as={Button} colorScheme="teal" rightIcon={<ChevronDownIcon/>}>
                {user.name}
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <Link href="/profile">
                  <MenuItem>
                      My Account
                  </MenuItem>
                  </Link>
                  <Link href="/cart">
                  <MenuItem>
                    {"Cart (" + user.cart.length + ")"}
                  </MenuItem>
                  </Link>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Help">
                  <MenuItem>FAQ</MenuItem>
                  <MenuItem>Contact support</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuItem
                  onClick={() => {
                    signout();
                    setUser({
                      loggedIn: false,
                      name: "",
                      email: "",
                      cart: [],
                      orders: [],
                      addresses: []
                    });
                    toast({
                      title: "Logged out successfully",
                      status: "success",
                      isClosable: true,
                    });
                  }}
                >
                  Log Out
                </MenuItem>
              </MenuList>
            </Menu>
        </Box>
      )}
    </Flex>
  );
};

export default Header;
