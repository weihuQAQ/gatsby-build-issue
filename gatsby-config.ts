import type { GatsbyConfig } from "gatsby";

if (process.env.BUILD_ENV) {
  require("dotenv").config({
    path: `.env.${process.env.BUILD_ENV}`,
  });
} else {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  });
}

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [],
};

export default config;
