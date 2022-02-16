import { Heading, Box, VStack, FormControl, Radio, FormHelperText, RadioGroup, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { UserContext } from "../helpers/context";
import { useContext } from "react";

const Checkout = () => {
  const id = useRouter().asPath.split("/")[3];
  const {user, setUser} = useContext(UserContext);
  
  const handleAddr = (e) => {
    const addr = e.target.value
    
  }
  return (
    <div style={{ width: "100%" }}>
      <Heading mb="8vh">
        <span style={{ borderBottom: "4px solid teal" }}>Checkout</span>
      </Heading>
      <Accordion defaultIndex={[0]} allowMultiple fontSize={"2xl"}>
        <AccordionItem borderTopColor={"transparent"} borderLeft="4px solid teal">
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize={"3xl"} fontWeight="semibold">
                Delivery address
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <RadioGroup>
              <Stack direction={"column"}>
                {
                  user.addresses.map(addr => <Radio value={addr} key={addr.key} onChange={handleAddr}>{addr}</Radio>)
                }
              </Stack>
            </RadioGroup>      
          </AccordionPanel>
        </AccordionItem>
        
        <AccordionItem borderColor={"transparent"} borderTopColor={"transparent"} borderLeft="4px solid teal" mt={"5px"}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize={"3xl"} fontWeight="semibold">
                Payment options
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem borderTopColor={"transparent"} borderLeft="4px solid teal" mt={"5px"}> 
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize={"3xl"} fontWeight="semibold">
                Order summary
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default Checkout;
