import { Given, When, Then } from '@cucumber/cucumber'
import { HomePage } from '../pages/HomePage'
import { RegisterPage } from '../pages/RegisterPage'
import { LoginPage } from '../pages/LoginPage'
import { createUser } from '../utils/faker-data'

Given('the user opens the homepage', async function () {
  const homePage = new HomePage(this.page)

  await homePage.openHome()
})

When('the user registers a new account', async function () {
  this.user = createUser()

  const homePage = new HomePage(this.page)
  const registerPage = new RegisterPage(this.page)

  await homePage.openRegisterPage()
  await registerPage.register(this.user)
  await registerPage.validateRegistrationSuccess()
})

When('the user logs out', async function () {
  const loginPage = new LoginPage(this.page)
  await loginPage.logout()
})

When('the user logs in again', async function () {
  const homePage = new HomePage(this.page)
  const loginPage = new LoginPage(this.page)

  await homePage.openLoginPage()
  await loginPage.login(
    this.user.email,
    this.user.password
  )
})

Then('the account should be accessible', async function () {
  const loginPage = new LoginPage(this.page)

  await loginPage.validateLoginSuccess()
})