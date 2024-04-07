
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./nexus-react.cjs.production.min.js')
} else {
  module.exports = require('./nexus-react.cjs.development.js')
}
