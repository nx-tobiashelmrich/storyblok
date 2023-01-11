import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Image from "../components/Image";
import Widen from "../components/Widen";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  images: Image,
  widen: Widen,
};

storyblokInit({
  accessToken: "PpHm9CXMi1troaElfoYGeAtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
