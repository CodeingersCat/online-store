import { Heading, Box, VStack, FormControl, Radio, FormHelperText, RadioGroup, Stack, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { UserContext } from "../helpers/context";
import { useContext, useEffect, useState } from "react";
import { getOneProd } from "../helpers/Product";
import { createOrder } from "../helpers/Order";

const Checkout = () => {
  const id = useRouter().asPath.split("/")[3];
  const {user, setUser} = useContext(UserContext);
  const [order, setOrder] = useState({
    total: 0,
    address: "",
    payment: "",
    qty: 1
  })

  useEffect(() => {
    if(!id || id.length === 0) useRouter().push("/");
  })
  
  const handleAddr = async (e) => {
    const price = (await getOneProd(id)).price
    const addr = e.target.value
    setOrder({...order, address: addr, total: price});
  }

  const handlePay = (e) => {
    const pay = e.target.value
    setOrder({...order, payment: pay});
  }

  const proceed = async () => {
    if(!(order.payment === "CoD")){
      console.log(order)
      const created = await createOrder({
        amount: order.total,
        currency: "INR",
        items: [{
          "product": id,
          "qty": 1
        }]
      })

      console.log(created);
    }
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
                  user.addresses.map(addr => {
                    let i = 0
                    return (<div key={i++}><Radio value={addr} onChange={handleAddr}>{addr}</Radio></div>)})
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
          <RadioGroup>
              <RadioGroup>
                <Stack direction={"column"}>
                  <div><Radio value="CoD" onChange={handlePay}>Cash/Card on delivery</Radio></div>
                  <div><Radio value="Online" onChange={handlePay}>Net banking/Debit/Credit Card</Radio></div>
                </Stack>
              </RadioGroup>
            </RadioGroup>     
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

      <Box py={"5%"}>
        <Button variant={"solid"} colorScheme={"teal"} onClick={proceed}>
          Proceed to checkout
        </Button>
      </Box>
    </div>
  );
};

export default Checkout;
