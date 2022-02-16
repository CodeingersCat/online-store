import { useRouter } from "next/router";
import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/react";
import { Heading, SimpleGrid } from "@chakra-ui/layout";
import { Field, Form, Formik } from "formik";
import { TextField } from "../components/Form/Fields";
import * as Yup from "yup";
import { authenticate, signup } from "../helpers/User";
import { useToast } from "@chakra-ui/toast";
import { useContext } from "react";
import { UserContext } from "../helpers/context";

//Sign up page for new users
const Signup = () => {
  const {user, setUser} = useContext(UserContext);
  const toast = useToast();
  const router = useRouter();
  
  const reDirect = () => {
    router.push("/");
  };

  const formFields = ({ ...props }) => {
          
    //function to check if password and confirm password field contain same values
    const handleRepass = (value) => {
      if (
        props.values.password === value ||
        (props.touched.rePassword && props.values.password === value) ||
        value == ""
      )
        return;
      else return "Passwords do not match";
    };

    return (
      <Form>
        <SimpleGrid
          templateColumns={["repeat(1, 1fr)", null, "repeat(2, 1fr)"]}
          spacing={20}
          w="500px"
        >
          <Field
            type="input"
            label="Username"
            name="username"
            as={TextField}
          />

          <Field type="email" label="Email" name="email" as={TextField} />
          
          <Field
            type="password"
            label="Password"
            name="password"
            as={TextField}
          />
          
          <Field
            type="password"
            label="Re-enter password"
            name="rePassword"
            validate={handleRepass}
            as={TextField}
          />
          
          <Button
            type="submit"
            colorScheme="teal"
            disabled={props.isSubmitting}
            w={["70vw", null, "30vw"]}
          >
            Sign Up
          </Button>
          
        </SimpleGrid>
      </Form>
    );
  }

  return (
    <Box width={"100%"}>
      <Heading mb="8vh">
        <span style={{ borderBottom: "4px solid teal" }}>Sign Up</span>
      </Heading>

      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          rePassword: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),

          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),

          password: Yup.string()
            .min(5, "Must be atleast 5 characters")
            .required("Required"),

          rePassword: Yup.string().required("Required"),
        })}
        onSubmit={async (data, { setSubmitting }) => {
          //getting the data from the form fields
          const { username, email, password } = data;
          //begin submit process
          setSubmitting(true);
          let result;
          try {
            //receiving new user creation data from server
            result = await signup({
              name: username,
              email: email,
              password: password,
            });

            authenticate(result.data.token);
            setUser({...user, loggedIn: true, name: result.data.name, email: result.data.email})
            reDirect();
          } catch (err) {
            //error notification
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

export default Signup;
