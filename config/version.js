const packageJson = require('../package.json');
// The BAMBOO environment variables will be output by Bamboo during the build process
// The format will be: {Datetime}-{semantic version}-{bamboo build number}-{short git hash}
// Tue Apr 09 2019 08:06:25 GMT-0500 (Central Daylight Time)--v1.1.0-457-2d409c5
module.exports = () => {
  const { BAMBOO_BUILD_NUMBER, BAMBOO_GIT_HASH } = process.env;
  // Right now, we are not outputting the git version because of Bamboo having an issue not finding
  // the .git folder
  // TODO: Fix the git issue in Bamboo
  return `${new Date().toString()}--${
    packageJson.version
  }-${BAMBOO_BUILD_NUMBER}-${BAMBOO_GIT_HASH}`;
};
