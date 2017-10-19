/** Defines credentials to return depending on the environment.
 * Dev keys file uncommitted to Git.
 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
