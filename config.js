module.exports = {
    hostRules :[
      {
        hostType: 'github',
        baseUrl: "https://github.com/exampathfinder/epf-auth-layer/pkgs/npm/auth-layer",
        token: process.env.PRIVATE_NPM_TOKEN,
        authType: "Basic"
      },
    ],
    "packageRules": [
        {
           "matchUpdateTypes": ["patch", "minor"],
           "matchPackagePatterns": ["@exampathfinder/auth-layer"]
        }
       ],
    npmrc : `//npm.pkg.github.com/:_authToken=${process.env.PRIVATE_NPM_TOKEN}`  
}
