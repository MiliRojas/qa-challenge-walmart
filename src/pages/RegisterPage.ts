import { BasePage } from './BasePage'
import { User } from '../types/user'

export class RegisterPage extends BasePage {

  async register(user: User) {

    await this.page.waitForSelector('#input-firstname')
    await this.fill('#input-firstname', user.firstName)
    await this.fill('#input-lastname', user.lastName)
    await this.fill('#input-email', user.email)
    await this.fill('#input-telephone', user.telephone)
    await this.fill('#input-password', user.password)
    await this.fill('#input-confirm', user.password)
    await this.click('input[name="newsletter"][value="1"]')
    await this.click('input[name="agree"]')
    await this.click('input[value="Continue"]')
  }

  async validateRegistrationSuccess() {
    await this.page.waitForSelector(
      'text=Your new account has been successfully created!'
    )
  }
}