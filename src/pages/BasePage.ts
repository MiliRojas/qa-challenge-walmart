import { Page, expect } from '@playwright/test'

export class BasePage {

  constructor(protected page: Page) {}

  async navigate(path: string = '/') {
    await this.page.goto(path)
  }

  async click(locator: string) {
    await this.page.locator(locator).click()
  }

  async fill(locator: string, text: string) {
    await this.page.locator(locator).fill(text)
  }

  async expectText(locator: string, text: string) {
    await expect(this.page.locator(locator)).toContainText(text)
  }

  async expectVisible(locator: string) {
    await expect(this.page.locator(locator)).toBeVisible()
  }
}