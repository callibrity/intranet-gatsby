const aliases = require("./aliases")

const aliasKeys = Object.keys(aliases)

const jestAliases = {}

aliasKeys.forEach(key => {
  jestAliases[`^${key}(.*)$`] = `<rootDir>/${aliases[key]}/$1`
})

module.exports = jestAliases