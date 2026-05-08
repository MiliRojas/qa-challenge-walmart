import { Given, When, Then } from '@cucumber/cucumber'
import { HomePage } from '../pages/HomePage'
import { ProductPage } from '../pages/ProductPage'
import { CartPage } from '../pages/CartPage'

Given('the user has a product in the cart', async function () {
  this.homePage = new HomePage(this.page)
  this.productPage = new ProductPage(this.page)
  this.cartPage = new CartPage(this.page)

  await this.homePage.openHome()
  await this.homePage.searchProduct('MacBook')
  await this.productPage.openProduct('MacBook')
  await this.productPage.addToCart()
})

When('the user updates the quantity', async function () {
  await this.cartPage.openCart()
  await this.cartPage.updateQuantity('2')

})

Then('the cart should reflect the correct total price based on quantity', async function () {
  await this.cartPage.validateCartUpdated(2)
})