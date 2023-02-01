/** Vendor **/
import {
  Box,
  Container,
  Divider,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { products } from "../cards/pricingData";
import ProductCallToActionTable from "../cards/ProductCallToActionTable";
import ProductFeaturesTable from "../cards/ProductFeaturesTable";
import ProductOverviewTable from "../cards/ProductOverviewTable";
import { Button } from "@contra-ui/core";

/** Custom Components **/

/** Custom CSS **/
import "../pricing.css";

function Pricing() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box as="section" bg="bg-surface" py={{ base: "16", md: "24" }}>
      <Container>
        <Stack
          spacing={{ base: "4", md: "6" }}
          textAlign="center"
          align="center"
        >
          <Stack spacing="3">
            <Heading fontWeight="bold" size={{ base: "md", md: "lg" }}>
              Heroes Program
            </Heading>
          </Stack>
          <Text fontSize={{ base: "lg", md: "xl" }} color="muted" maxW="3xl">
            We’re more than just a sprint retro company. We do our part to
            support those who support, protect, and empower our communities
            <b> worldwide</b>. <br />
            <br /> To give thanks, we provide lifetime discounts on all After
            Action’s products to our community’s heroes from healthcare workers,
            first responders, fire fighters, active military, veterans, law
            enforcement, to non-profit organization employees. We’ve got your
            back!
          </Text>
          <Button className="primary-btn">Contact Us</Button>
        </Stack>
      </Container>
    </Box>
  );
}
export default Pricing;
