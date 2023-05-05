/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'http://localhost:12345'
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js'
  },
  name: 'test-local-api'
}