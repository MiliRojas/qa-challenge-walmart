import { BasePage } from './BasePage'

export class LoginPage extends BasePage {

  async login(email: string, password: string) {

    await this.fill('#input-email', email)
    await this.fill('#input-password', password)

    await this.click('input[value="Login"]')
  }

  async validateLoginSuccess() {
    await this.expectVisible('a[title="My Account"]')
  }

  async logout() {
    const logout = this.page.locator('a.list-group-item[href*="account/logout"]')
    await logout.waitFor({ state: 'visible' })
    await logout.click()
    await this.expectText(
      '#content',
      'logged off your account.'
      )
  }
}