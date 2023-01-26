import React, { lazy, Suspense } from "react";

/** Vendor **/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme, Text } from "@chakra-ui/react";
import { Provider as ContraProvider } from "@contra-ui/core";
import { theme } from "@chakra-ui/pro-theme";

/** Custom Components **/
import About from "./components/about/views/About";
import AppLayout from "./components/shared/layout/AppLayout";
import Checkout from "./components/checkout/views/Checkout";
import Features from "./components/features/views/Features";
import Home from "./components/home/views/Home";
import FAQ from "./components/faq/views/FAQ";
import Pricing from "./components/pricing/views/Pricing";
import NotFound from "./components/error/views/NotFound";
import Legal from "./components/legal/views/Legal";

/** Types **/
import type { ReactElement } from "react";

/** CSS */
import "./dist/css/app.css";
import "./dist/css/format.css";
import "./dist/css/font.css";
import "./dist/css/spacing.css";

/** Routes **/
// const FacilityRoutes = lazy(() => import("./routes/Facility"));

/** Theme **/
import { colors } from "./dist/js/theme/colors";

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
    <Suspense fallback={<div>Loading...</div>}>
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
