import { BasePage } from './BasePage'

export class CartPage extends BasePage {

  async openCart() {
    await this.click('#cart-total')
    await this.page.waitForSelector('text=View Cart')
    await this.page.click('text=View Cart')
  }

  async updateQuantity(quantity: string) {
    const quantityInput = this.page.locator('input[name*="quantity"]')

    await quantityInput.fill('')
    await quantityInput.fill(quantity)
    await this.click('button[data-original-title="Update"]')
  }

  async validateCartUpdated(quantity: number) {
    const row = this.page.locator('#content tbody tr').first()
    const unitPriceText = await row.locator('td').nth(4).innerText()
    const totalText = await row.locator('td').nth(5).innerText()
    const unitPrice = parseFloat(
      unitPriceText.replace('$', '').replace(',', '').trim()
    )
  
    const total = parseFloat(
      totalText.replace('$', '').replace(',', '').trim()
    )
    const expectedTotal = unitPrice * quantity
  
    if (total !== expectedTotal) {
      throw new Error(`Expected ${expectedTotal} but got ${total}`)
    }
  }

  async validateTotalVisible() {
    await this.expectVisible('td.text-right:last-child')
  }

  async proceedCheckout() {
    await this.page.click('text=Checkout')
  }
}