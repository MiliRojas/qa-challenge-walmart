import { BasePage } from './BasePage'

export class HomePage extends BasePage {

  searchInput = 'input[name="search"]'
  searchButton = '.btn.btn-default.btn-lg'
  myAccountMenu = 'a[title="My Account"]'
  registerOption = '#top-links a[href*="account/register"]'
  loginOption = 'a[title="Login"]'
  loginSideList = 'a.list-group-item[href*="account/login"]'

  async openHome() {
    await this.navigate('/')
    await this.page.waitForSelector(this.searchInput)
  }

  async openRegisterPage() {
    await this.click(this.myAccountMenu)
    await this.page.waitForSelector(this.registerOption)
    await this.click(this.registerOption)
  }

  async openLoginPage() {
    const sidebarLogin = this.page.locator(this.loginSideList)
  
    if (await sidebarLogin.count() > 0) {
      await sidebarLogin.first().click()
      return
    }
    await this.click(this.myAccountMenu)
  
    const headerLogin = this.page.locator('#top-links a[href*="account/login"]')
  
    await headerLogin.waitFor({ state: 'visible' })
    await headerLogin.click()
  }

  async searchProduct(product: string) {
    await this.fill(this.searchInput, product)
    await this.click(this.searchButton)
    await this.page.waitForSelector('.product-thumb')
  }
}