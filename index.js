module.exports = {
  "extends": "tslint:latest",
  "rules": {
    "interface-name": [false, "always-prefix"],
    "member-access": false,
    "no-console": [false],
    "no-duplicate-imports": false,
    "no-empty": false,
    "no-empty-interface": false,
    "no-submodule-imports": false,
    "no-unused-expression": [true, "allow-tagged-template"],
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
