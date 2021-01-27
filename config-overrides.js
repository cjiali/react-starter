/* eslint-disable */
const path = require("path")
const { override, addWebpackAlias } = require("customize-cra")

module.exports = {
  webpack: override(
    // Configure path alias
    addWebpackAlias({
      "@": path.join(__dirname, "src"),
    }),
  ),
}
