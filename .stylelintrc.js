module.exports = {
  "ignoreFiles": ["!**/*.css"],
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-xo-space",
    "stylelint-config-recess-order",
    "stylelint-a11y/recommended",
    "stylelint-no-unsupported-browser-features",
    "stylelint-config-prettier"
  ],
  "rules": {
    "color-no-hex": true,
    "custom-property-pattern": null,
  }
}
