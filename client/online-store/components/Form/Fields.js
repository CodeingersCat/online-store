import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Tag } from "@chakra-ui/tag";
import { useField } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
      <div>
        <FormLabel fontWeight={"semibold"} mb={"0"}>
          {label + "  "}
          {meta.touched && meta.error && (
            <Tag variant="subtle" colorScheme="red">
              {" " + meta.error}
            </Tag>
          )}
        </FormLabel>
        <Input
          {...field}
          {...props}
          variant="flushed"
          borderBottom="solid 2px"
          shadow="2xl"
          borderBottomColor={meta.touched && meta.error ? "red" : "teal"}
          w={["70vw", null, "30vw"]}
        />
      </div>
  );
};
