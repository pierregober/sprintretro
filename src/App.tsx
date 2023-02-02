import { Suspense, lazy } from "react";

/** Vendor **/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider as ContraProvider } from "@contra-ui/core";
import { theme } from "@chakra-ui/pro-theme";

/** Types **/
import type { ReactElement } from "react";

/** CSS */
import "./dist/css/app.css";
import "./dist/css/format.css";
import "./dist/css/font.css";
import "./dist/css/spacing.css";

/** Theme **/
import { colors } from "./dist/js/theme/colors";

/** Custom Components **/
const About = lazy(() => import("./components/about/views/About"));
const AppLayout = lazy(() => import("./components/shared/layout/AppLayout"));
const Checkout = lazy(() => import("./components/checkout/views/Checkout"));
const Features = lazy(() => import("./components/features/views/Features"));
const Heroes = lazy(() => import("./components/pricing/views/Heroes"));
const Home = lazy(() => import("./components/home/views/Home"));
const Legal = lazy(() => import("./components/legal/views/Legal"));
const FAQ = lazy(() => import("./components/faq/views/FAQ"));
const Pricing = lazy(() => import("./components/pricing/views/Pricing"));
const NotFound = lazy(() => import("./components/error/views/NotFound"));

function App(): ReactElement {
  const myTheme = extendTheme(
    {
      ...theme.colors,
      colors,
      brand: { ...theme.colors.yellow },
      fonts: {
        heading: `Montserrat, sans-serif`,
        body: `Montserrat, sans-serif`,
      },
    },
    theme,
  );

  //TODO - Remember to replace suspense with a loading component
  return (
    <Suspense
      fallback={
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          fontSize={30}
        >
          Loading...
        </Box>
      }
    >
      <ChakraProvider theme={myTheme}>
        <ContraProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="features" element={<Features />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="heroes" element={<Heroes />} />
                <Route path="legal" element={<Legal />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ContraProvider>
      </ChakraProvider>
    </Suspense>
  );
}

export default App;
