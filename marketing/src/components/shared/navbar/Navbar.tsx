import React from "react";

/** Vendor **/
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

/** Custom Components **/
import LoginButton from "../../auth/cards/LoginButton";
import RegisterButton from "../../auth/cards/RegisterButton";
import Logo from "../../../dist/img/Logo";
import ScreenSelector from "../cards/ScreenSelector";
import Sidebar from "../sidebar/Sidebar";
import ToggleButton from "../cards/ToggleButton";

/** CSS **/
import "./navbar.css";

type INavSet = { path: string; title: string };

type INavigationSet = Array<INavSet>;

// type IProfileSet = Array<INavSet>;

const navigationSet: INavigationSet = [
  { title: "Features", path: "/features" },
  { title: "Pricing", path: "/pricing" },
  { title: "About", path: "/about" },
  // { title: "FAQs", path: "/faqs" },
];

function NavbarDesktop(): React.ReactElement {
  return (
    <Box className="navbar">
      <Container className="navbar-content-container">
        <Box className="flex-between">
          <Box className="flex-center flex-row gap-spacer-5">
            <Link as={RouterLink} to="/">
              <Logo />
            </Link>
            <ButtonGroup variant="ghost">
              {navigationSet.map((nav: INavSet, index: number) => {
                return (
                  <Button
                    fontWeight="bold"
                    fontSize="1.375rem"
                    key={nav.title}
                    aria-current={
                      window.location.pathname === nav.path ? "page" : false
                    }
                  >
                    <Link
                      key={nav.title + "-" + index}
                      className="link-no-decoration"
                      as={RouterLink}
                      to={nav.path}
                    >
                      {nav.title}
                    </Link>
                  </Button>
                );
              })}
            </ButtonGroup>
          </Box>
          <Box className="flex-center flex-row gap-spacer-5">
            <LoginButton />
            <RegisterButton />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function NavbarMobile(): React.ReactElement {
  const { isOpen, onClose, onToggle } = useDisclosure();
  return (
    <Box className="flex flex-center navbar" as="nav">
      <Container className="navbar-content-container">
        <Box className="flex-between">
          <Box className="flex-center flex-row gap-spacer-5">
            <Link as={RouterLink} to="/">
              <Logo />
            </Link>
          </Box>
          <ToggleButton
            isOpen={isOpen}
            aria-label="Open Menu"
            onClick={onToggle}
          />
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            isFullHeight
            preserveScrollBarGap
            trapFocus={false}
          >
            <DrawerOverlay />
            <DrawerContent>
              <Sidebar />
            </DrawerContent>
          </Drawer>
        </Box>
      </Container>
    </Box>
  );
}

export default function Navbar() {
  return (
    <ScreenSelector>
      <NavbarDesktop />
      <NavbarMobile />
    </ScreenSelector>
  );
}
