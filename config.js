const renovate = require('renovate');

const config = {
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["config:base"],
  "token": process.env.PRIVATE_NPM_TOKEN,
  "github": {
    "labels": ["renovate"],
    "ignoreUnstable": true,
    "packageRules": [
      {
        "matchPackageNames": ["@exampathfinder/auth-layer"],
        "groupName": "Private Packages"
      }
    ]
  }
};

renovate(config);