import {
  Box,
  BoxProps,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

interface TestimonialProps extends BoxProps {
  color: string;
  children: React.ReactNode;
  title: string;
}

const Benefit = (props: TestimonialProps) => {
  const { children, color } = props;
  return (
    <Flex direction="column">
      <Box
        flex="1"
        rounded="lg"
        shadow="base"
        px="10"
        pt="4"
        pb="4"
        pos="relative"
        border="3px solid black"
        bg={color}
      >
        <Text fontSize="lg" fontWeight="bold">
          {props.title}
        </Text>
        <Text fontSize="md" fontWeight="600">
          {children}
        </Text>
      </Box>
    </Flex>
  );
};

function HowSection() {
  return (
    <Container py={{ base: "8", md: "12" }} className="flex flex-column-center">
      <Stack spacing={{ base: "12", md: "16" }}>
        <Box
          textAlign="center"
          className="flex-column flex-center flex-column-center"
        >
          <Text
            fontSize={{ base: "20", md: "30" }}
            fontWeight="bold"
            textAlign="center"
          >
            Artificial Intelligence For Retrospectives
          </Text>
          <Text
            mt={4}
            width={[300, 500, 700]}
            fontSize={{ base: "md", md: "md" }}
            fontWeight="medium"
          >
            By utilizing machine learning & natural language processing, teams
            that adopt agile project management can improve their retrospective
            process. AI has the potential to have a significant impact on the
            retrospective process with these four benefits.
          </Text>
        </Box>
        <Box maxW={{ base: "xl", md: "7xl" }} mx="auto" px="4">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="10">
            <Benefit color="#FFF4CC" title="Balance project management">
              AI assistants can assist with tasks such as tracking projects,
              managing product backlogs, and delegating responsibilities to
              development teams using data-driven techniques.
            </Benefit>
            <Benefit color="#FFF3F8" title="Deeper retrospective insights">
              AI's role is to study human behavior and gather information during
              sprints to predict future results. Machine learning allows for
              further analysis and forecasting based on data.
            </Benefit>
            <Benefit color="#FFE8E8" title="Mitigate project risk">
              AI can monitor projects and use predictive analytics to identify
              and address risks, creating a proactive risk management strategy
              to eliminate inefficiencies.
            </Benefit>
            <Benefit color="#D6FCF7" title="Streamline your process">
              Data-driven solutions enhance the sprint process by providing
              monitoring and using predictive models based on data rather than
              subjective opinions.
            </Benefit>
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  );
}
export default HowSection;
