module.exports = {
  "extends": "tslint:latest",
  "rules": {
    "interface-name": [false, "always-prefix"],
    "no-console": [false],
    "no-var-requires": false,
    "quotemark": [true, "single", "jsx-double", "avoid-escape"],
    "variable-name": [
      true,
      "ban-keywords",
      "check-format",
      "allow-leading-underscore",
      "allow-pascal-case"
    ],
  }
};
