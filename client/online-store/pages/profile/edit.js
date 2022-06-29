import { Box, Heading, SimpleGrid, Button } from "@chakra-ui/react"
import { TextField } from "../../components/Form/Fields"
import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { UserContext } from "../../helpers/context";
import { isAuthenticated } from "../../helpers/User";
import { useRouter } from "next/router";

const Edit = () => {
    if(!isAuthenticated()){
      useRouter().push("/login");
    }
    const { user, setUser } = useContext(UserContext)
    const formFields = ({...props}) => {
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
                  type="input"
                  label="First name"
                  name="Firstname"
                  as={TextField}
                />

                <Field
                  type="input"
                  label="Last name"
                  name="Lastname"
                  as={TextField}
                />
                
                <Button
                  type="submit"
                  colorScheme="teal"
                  disabled={props.isSubmitting}
                  w={["70vw", null, "30vw"]}
                >
                  Save
                </Button>
                
              </SimpleGrid>
            </Form>
        )}
    return(
        <Box width={"100%"}>
            <Heading mb="8vh">
                <span style={{borderBottom:"4px solid teal"}}>Edit Profile</span>
            </Heading>

            <Formik
            initialValues={{
            username: user.name,
            email: user.email,
            firstname: user.firstname,
            firstname: user.lastname
            }}
            validationSchema={Yup.object({
            username: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),

            email: Yup.string()
                .email("Invalid email address")
                .required("Required")
            })}>
                {formFields}
            </Formik>

        </Box>
    )
}

export default Edit 