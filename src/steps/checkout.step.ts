import { Given, When, Then } from '@cucumber/cucumber'
import { HomePage } from '../pages/HomePage'
import { RegisterPage } from '../pages/RegisterPage'
import { LoginPage } from '../pages/LoginPage'
import { ProductPage } from '../pages/ProductPage'
import { CartPage } from '../pages/CartPage'
import { CheckoutPage } from '../pages/CheckoutPage'
import { createUser } from '../utils/faker-data'

Given('the user is logged into the application', async function () {
  this.user = createUser()
  this.homePage = new HomePage(this.page)
  this.registerPage = new RegisterPage(this.page)
  this.loginPage = new LoginPage(this.page)

  await this.homePage.openHome()
  await this.homePage.openRegisterPage()
  await this.registerPage.register(this.user)
})

When('the user adds a product to the cart', async function () {
  this.productPage = new ProductPage(this.page)

  await this.homePage.searchProduct('MacBook')
  await this.productPage.openProduct('MacBook')
  await this.productPage.addToCart()
  await this.productPage.validateProductAdded()
})

When('the user completes checkout', async function () {
  this.cartPage = new CartPage(this.page)
  this.checkoutPage = new CheckoutPage(this.page)

  await this.cartPage.openCart()
  await this.cartPage.proceedCheckout()
  await this.checkoutPage.fillBillingDetails(this.user)
  await this.checkoutPage.continuePaymentMethod()
  await this.checkoutPage.confirmOrder()
})

Then('the order should be created successfully', async function () {
  await this.checkoutPage.validateOrderSuccess()
})