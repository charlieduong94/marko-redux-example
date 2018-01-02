require('marko/node-require').install()
require('lasso/node-require-no-op').enable('.css')

require('marko/browser-refresh').enable()
require('lasso/browser-refresh').enable('*.marko *.css')

const Main = require('./src/pages/main')

const express = require('express')
const compression = require('compression')
const serveStatic = require('serve-static')

const outputDir = `${__dirname}/static`

require('lasso').configure({
  plugins: [
    'lasso-marko'
  ],
  outputDir,
  bundlingEnabled: true,
  minify: false,
  fingerprintsEnabled: false
})

const app = express()

const port = 8080

app.use(compression())

app.use('/static', serveStatic(outputDir))

app.get('/', function (req, res) {
  Main.stream({ count: 45 }).pipe(res)
})

app.listen(port, function () {
  if (process.send) {
    process.send('online')
  }
})
