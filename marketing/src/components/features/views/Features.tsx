/** Vendors **/
import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { IconButton } from "@contra-ui/core";

/** Custom Components **/
import { Features as ExtraFeatures } from "../../home/cards/Features";

/** Icons **/
import {
  CheckAll,
  DataTable,
  MultiplePeople,
} from "../../shared/icons/NucleoIcons";

/** Data **/
import {
  features as initFeatures,
  more_features as moreFeatures,
} from "../../home/cards/data/features";

export const features = [
  {
    name: "Unlimited Boards",
    description:
      "With a real-time collaboration board, managing remote meetings becomes a breeze. The board can be tailored to fit the project and team needs through customization of columns, information, and colors. All past, current, and future meetings are stored in a centralized platform, providing a comprehensive overview of meeting history along with related notes and actions.",
    icon: DataTable(),
  },
  {
    name: "Unlimited Guest Invites",
    description:
      "We allow for unlimited collaboration between various team members, including developers, designers, managers, and team leaders. Invite as many team members as necessary to collaborate on projects.",
    icon: MultiplePeople(),
  },
  {
    name: "Access to All Retro Templates",
    description:
      "Choose from pre-designed templates or create a custom board. The platform provides simple and flexible boards that can be adjusted to fit your team's needs. You have complete control to customize each retrospective meeting, making every meeting both enjoyable and productive.",
    icon: CheckAll(),
  },
];

function Features() {
  return (
    <Box as="section" bg="bg-surface">
      <Container py={{ base: "16", md: "24" }}>
        <Stack spacing={{ base: "12", md: "16" }}>
          <Stack
            spacing={{ base: "4", md: "6" }}
            textAlign="center"
            align="center"
          >
            <Stack spacing="3">
              <Heading fontWeight="bold" size={{ base: "md", md: "lg" }}>
                Features That Rock
              </Heading>
            </Stack>
            <Text fontSize={{ base: "lg", md: "xl" }} color="muted" maxW="3xl">
              We have a lot of features that will help you and your team to be
              <br />
              more productive and efficient in retros than ever before
            </Text>
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "12", lg: "16" }}
          >
            <Stack
              spacing={{ base: "10", md: "12" }}
              maxW="xl"
              justify="center"
              width="full"
            >
              {features.map((feature) => (
                <Stack key={feature.name} spacing="4" direction="row">
                  <Box>
                    <IconButton appearance="primary">{feature.icon}</IconButton>
                  </Box>
                  <Stack
                    spacing={{ base: "4", md: "5" }}
                    pt={{ base: "1.5", md: "2.5" }}
                  >
                    <Stack spacing={{ base: "1", md: "2" }}>
                      <Text
                        fontSize={{ base: "lg", md: "xl" }}
                        fontWeight="medium"
                      >
                        {feature.name}
                      </Text>
                      <Text color="muted">{feature.description}</Text>
                    </Stack>
                  </Stack>
                </Stack>
              ))}
            </Stack>
            <Box width="full" overflow="hidden">
              <Image
                maxW="100%"
                minH={{ base: "100%", md: "350px", lg: "500px" }}
                objectFit="cover"
                src="https://i.imgur.com/C3BMOTC.png"
                alt="Developer"
              />
            </Box>
          </Stack>
        </Stack>
        <Box style={{ zIndex: "10", position: "relative" }}>
          <ExtraFeatures features={initFeatures} moreFeatures={moreFeatures} />
        </Box>
      </Container>
    </Box>
  );
}

export default Features;
