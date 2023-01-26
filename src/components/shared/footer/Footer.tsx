import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../../../dist/img/Logo";

export const links = [
  {
    title: "Company",
    links: [
      { label: "Why After Action", href: "#" },
      { label: "Our story", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Use Cases", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "SAML SSO", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Partnerships", href: "#" },
      { label: "Case studies", href: "#" },
      { label: "Media Assets", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Offer terms", href: "#" },
      { label: "License", href: "#" },
    ],
  },
];

function Footer() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box bg="#FFBD12" style={{ zIndex: "10", position: "relative" }}>
      <Container as="footer" role="contentinfo">
        <Stack
          justify="space-between"
          align="start"
          direction={{ base: "column", lg: "row" }}
          py={{ base: "12", md: "16" }}
          spacing="8"
        >
          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            gap="8"
            width={{ base: "full", lg: "auto" }}
          >
            {links.map((group, idx) => (
              <Stack key={idx} spacing="4" minW={{ lg: "40" }}>
                <Text fontSize="sm" fontWeight="semibold" color="subtle">
                  {group.title}
                </Text>
                <Stack spacing="3" shouldWrapChildren>
                  {group.links.map((link, idx) => (
                    <Button key={idx} as="a" variant="link" href={link.href}>
                      {link.label}
                    </Button>
                  ))}
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
          <Stack spacing={{ base: "6", md: "8" }} align="start">
            {isDesktop && <Logo />}
            <Text color="muted">
              Insights on past performance to improve future performance with a
              helping hand
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <Stack
          pt="8"
          pb="12"
          justify="space-between"
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
        >
          <Text fontSize="sm" color="subtle">
            &copy; {new Date().getFullYear()} CleverlyDone Inc. All rights
            reserved.
          </Text>
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter />}
            />
          </ButtonGroup>
        </Stack>
      </Container>
    </Box>
  );
}
export default Footer;
