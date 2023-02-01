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
      <Stack spacing={{ base: "16", md: "24" }} shouldWrapChildren>
        <Container>
          <Stack
            spacing={{ base: "4", md: "6" }}
            textAlign="center"
            align="center"
          >
            <Stack spacing="3">
              <Heading fontWeight="bold" size={{ base: "md", md: "lg" }}>
                Pricing That Fits Your Needs
              </Heading>
            </Stack>
            <Text fontSize={{ base: "lg", md: "xl" }} color="muted" maxW="3xl">
              Upgrade, downgrade or cancel at any time <br />
              Monthly and annual subscriptions available
            </Text>
          </Stack>
        </Container>
        {isMobile ? (
          <Stack spacing="16">
            {products.map((product, id, isMobile) => (
              <Container px={{ base: "0" }} key={id}>
                <Stack spacing={{ base: "5", md: "7" }}>
                  <ProductOverviewTable
                    products={[product]}
                    beta={product.name === "Freemium"}
                    isMobile
                  />
                  <ProductFeaturesTable products={[product]} />
                  <ProductCallToActionTable
                    products={[product]}
                    beta={product.name === "Freemium"}
                    isMobile
                  />
                </Stack>
              </Container>
            ))}
          </Stack>
        ) : (
          <Container px={{ base: "0", lg: "8" }}>
            <Stack spacing={{ base: "5", md: "7" }}>
              <ProductOverviewTable products={products} />
              <ProductFeaturesTable products={products} />
              <ProductCallToActionTable products={products} />
            </Stack>
          </Container>
        )}
      </Stack>
      <Divider orientation="horizontal" />
      <Container pt={14}>
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
          <Button className="primary-btn">Learn More</Button>
        </Stack>
      </Container>
    </Box>
  );
}
export default Pricing;
