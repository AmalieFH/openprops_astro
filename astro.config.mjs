import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
});

const postcssJitProps = require("postcss-jit-props");
const OpenProps = require("open-props");
const postcssNesting = require("postcss-nesting");

module.exports = {
  plugins: [postcssNesting, postcssJitProps(OpenProps)],
};
