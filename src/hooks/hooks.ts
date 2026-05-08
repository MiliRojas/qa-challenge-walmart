import { Before, After, setDefaultTimeout } from '@cucumber/cucumber'
import { chromium } from '@playwright/test'

setDefaultTimeout(60000),
Before(async function () {

  this.browser = await chromium.launch({
    headless: false
  })

  this.context = await this.browser.newContext({
    baseURL: 'https://opencart.abstracta.us'
  })

  this.page = await this.context.newPage()
})

After(async function (scenario) {
  try {
    if (scenario.result?.status === 'FAILED') {
      const fileName = scenario.pickle.name
        .replace(/\s+/g, '_')
        .replace(/[^a-zA-Z0-9_]/g, '')
      
        const timestamp = Date.now()
      const screenshot = await this.page.screenshot({ fullPage: true })

      await this.page.screenshot({
        path: `reports/screenshots/${fileName}_${timestamp}.png`,
        fullPage: true
      })

      this.attach(screenshot, 'image/png')
    }

  } catch (error) {
    console.error('Error taking screenshot:', error)
  }

  if (this.browser) {
    await this.browser.close()
  }
})