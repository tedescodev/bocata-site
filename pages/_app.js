import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ModalProvider } from "styled-react-modal";

import createEmotionCache from "../utility/createEmotionCache";
import darkTheme from "../styles/theme/darkTheme";
import "../styles/globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, pageProps } = props;
  const Layout = Component.Layout;

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Layout>
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
