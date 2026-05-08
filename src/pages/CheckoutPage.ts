import { BasePage } from './BasePage'
import { expect } from '@playwright/test'

export class CheckoutPage extends BasePage {

  async openCheckout() {
    await this.navigate('index.php?route=checkout/checkout')
    await this.page.waitForSelector('#checkout-checkout')
  }

  async fillBillingDetails(user: any, useExisting = true) {
      await this.fill('#input-payment-firstname', user.firstName)
      await this.fill('#input-payment-lastname', user.lastName)
      await this.fill('#input-payment-address-1', user.address)
      await this.fill('#input-payment-city', user.city)
      await this.fill('#input-payment-postcode', user.postcode)
      await this.page.selectOption('#input-payment-country', '222')
      await this.page.waitForFunction(() => {
        const select = document.querySelector(
          '#input-payment-zone'
        ) as HTMLSelectElement
        return (
          select &&
          !select.disabled &&
          select.options.length > 1
        )
      })
      
      await this.page.selectOption('#input-payment-zone', '3520')
      await expect(this.page.locator('#input-payment-zone')).toHaveValue('3520')
      await this.click('#button-payment-address')
      await this.page.waitForSelector('#collapse-payment-method', {
        state: 'visible'
      })
  }

  async continuePaymentMethod() {
    await this.page.waitForSelector('input[name="agree"]')
    await this.click('input[name="agree"]')
    await this.click('#button-payment-method')
    await this.page.waitForSelector('#collapse-checkout-confirm', {
        state: 'visible'
      })
  }

  async confirmOrder() {
    await this.page.waitForSelector('#button-confirm')
    await this.click('#button-confirm')
  }

  async validateOrderSuccess() {
    await this.expectText('#content h1', 'Your order has been placed!')
  }
}