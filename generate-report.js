const report = require('multiple-cucumber-html-reporter')

report.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html',
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    device: 'Local machine',
    platform: {
      name: 'macOS'
    }
  }
})