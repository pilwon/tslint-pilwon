module.exports = {
  "extends": "tslint:latest",
  "rules": {
    "interface-name": [false, "always-prefix"],
    "member-access": false,
    "no-console": [false],
    "no-empty-interface": false,
    "no-unused-variable": [true, "react"],
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
