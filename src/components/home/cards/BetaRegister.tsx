/** Vendor **/
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { Button } from "@contra-ui/core";

/** Types **/
import type { SubmitHandler } from "react-hook-form";

type Inputs = {
  address: string;
  email: string;
};

function BetaRegister() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const toast = useToast();

  const schema = yup
    .object({
      email: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  };

  const actions = {
    register: () => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "preregister",
          email: watch("email"),
        }).toString(),
      })
        .then(() => alert("Success!"))
        .catch((error) => alert(error));
    },
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!errors.email && data?.email.includes("@") && !data?.address) {
      actions.register();
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid email",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box bgGradient="linear(to-b, bg-canvas 50%, #FFBD12 50%, )">
      <Container pt={{ base: "16", md: "24" }} pb={{ base: "8", md: "24" }}>
        <Box
          bg="bg-surface"
          py={{ base: "10", md: "16" }}
          px={{ base: "6", md: "16" }}
          borderRadius="lg"
          boxShadow={useColorModeValue("sm", "sm-dark")}
        >
          <Stack
            spacing={{ base: "8", md: "8" }}
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
          >
            <Stack spacing={{ base: "4", md: "5" }}>
              <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
                Work With Us And Forget About Others
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="muted">
                Get Beta Access
              </Text>
            </Stack>
            <Box width="full" maxW={{ base: "md", xl: "lg" }}>
              <form
                className={
                  "flex gap-spacer-2 width-100 " + isDesktop
                    ? ""
                    : "flex-column"
                }
                data-netlify={true}
                //@ts-ignore
                netlify
                name="preregister"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  placeholder="Enter your email"
                  {...register("email")}
                  name="email"
                  style={{
                    border: "2px solid black",
                    borderRadius: "16px",
                    boxShadow: "0 2px 0 #18191f",
                    flex: 1,
                    height: "51px",
                    outline: "none",
                    padding: "10px",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                />
                <input
                  placeholder="Enter your address"
                  {...register("address")}
                  name="address"
                  hidden
                />
                <Button
                  type="submit"
                  appearance="primary"
                  size="small"
                  style={{
                    width: "100%",
                    height: "53px",
                  }}
                >
                  Subscribe
                </Button>
              </form>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
export default BetaRegister;
