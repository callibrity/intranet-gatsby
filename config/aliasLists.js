const aliases = require('./aliases');

const aliasKeys = Object.keys(aliases);

const jestAliases = {};

const jsAndTsAliases = [];

aliasKeys.forEach((key) => {
  jestAliases[`^${key}(.*)$`] = `<rootDir>/${aliases[key]}/$1`;
  jsAndTsAliases[`${key}/*`] = [`${aliases[key]}*`]
});

module.exports = {jestAliases, jsAndTsAliases};
