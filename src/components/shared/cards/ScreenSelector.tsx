import React from "react";

/** Vendor **/
import { useBreakpointValue } from "@chakra-ui/react";

function ScreenSelector({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const options = React.Children.toArray(children);
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return <React.Fragment>{isDesktop ? options[0] : options[1]}</React.Fragment>;
}
export default ScreenSelector;
