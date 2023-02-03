/** Vendor **/
import {
  As,
  Button,
  Link,
  ButtonProps,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface NavButtonProps extends ButtonProps {
  icon: As;
  label: string;
  link: string;
}

export const NavButton = (props: NavButtonProps) => {
  const { icon, label, link, ...buttonProps } = props;
  return (
    <Link className="link-no-decoration" as={RouterLink} to={link}>
      <Button variant="ghost" justifyContent="start" {...buttonProps}>
        <HStack spacing="3">
          <Icon as={icon} boxSize="6" color="subtle" />
          <Text>{label}</Text>
        </HStack>
      </Button>
    </Link>
  );
};
