/** Vendor **/
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

/** Custom Components **/
import Privacy from "../cards/Privacy";
import Cookies from "../cards/Cookies";
import Terms from "../cards/Terms";

/** Custom CSS **/
import "../legal.css";

function Legal() {
  return (
    <Tabs>
      <TabList>
        <Tab>Privacy Policy</Tab>
        <Tab>Cookies Policy</Tab>
        <Tab>Terms and Conditions</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Privacy />
        </TabPanel>
        <TabPanel>
          <Cookies />
        </TabPanel>
        <TabPanel>
          <Terms />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
export default Legal;
