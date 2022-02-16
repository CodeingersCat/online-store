import { useRouter } from "next/router";
import { Button } from "@chakra-ui/button";
import { Heading, SimpleGrid } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { TextField } from "../components/Form/Fields";
import * as Yup from "yup";
import { authenticate, signin } from "../helpers/User";
import { useToast } from "@chakra-ui/toast";
import { useContext } from "react";
import { UserContext } from "../helpers/context";

//Sign up page for new users
const Login = () => {
  const {user, setUser} = useContext(UserContext);
  const toast = useToast();
  const router = useRouter();
  
  const reDirect = () => {
    router.push("/");
  };
  
  const formFields = ({ ...props }) => {
    return (
      <Form>
        <SimpleGrid
          templateColumns={["repeat(1, 1fr)", null, "repeat(2, 1fr)"]}
          spacing={20}
          w="500px"
        >
          <Field type="email" label="Email" name="email" as={TextField} />
          
          <Field
            type="password"
            label="Password"
            name="password"
            as={TextField}
          />
                          
          <Button
            type="submit"
            colorScheme="teal"
            disabled={props.isSubmitting}
            w={["70vw", null, "30vw"]}
          >
            Log In
          </Button>
          
        </SimpleGrid>
      </Form>
    );
  }

  return (
    <Box width={"100%"}>
      <Heading mb="8vh">
        <span style={{ borderBottom: "4px solid teal" }}>Log In</span>
      </Heading>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}

        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address"),

          password: Yup.string()
            .min(5, "Invalid password")
        })}

        onSubmit={async (data, { setSubmitting }) => {
          //getting the data from the form fields
          const { email, password } = data;
          //begin submit process
          setSubmitting(true);
          let result;
          try {
            //receiving user data from server
            result = await signin({
              email: email,
              password: password,
            });
            authenticate(result.data.token);
            toast({
              title: "Logged in successfully",
              status: "success",
              isClosable: true,
            });
            reDirect();
            setUser({
              loggedIn: true,
              name: result.data.user.name,
              email: result.data.user.email,
              cart: [...result.data.user.cart],
              orders: [...result.data.user.orders],
              addresses: [...result.data.user.addresses]
            })
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
          //submit process ends
          setSubmitting(false);
        }}
      >
        {formFields}
      </Formik>
    </Box>
  );
};

export default Login;
