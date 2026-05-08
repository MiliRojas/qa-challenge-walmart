import reporter from 'cucumber-html-reporter'

reporter.generate({
  theme: 'bootstrap',
  jsonFile: 'reports/report.json',
  output: 'reports/html/index.html',
  reportSuiteAsScenarios: true,
  launchReport: true
})