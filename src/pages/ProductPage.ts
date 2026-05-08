import { BasePage } from './BasePage'

export class ProductPage extends BasePage {

  async openProduct(productName: string) {
    const product = this.page.locator('.product-thumb').filter({
      hasText: productName
    }).first()

    await product.waitFor({state: 'visible'})
    await product.click()
  }

  async addToCart() {
    const ProductAdded = this.page.getByRole('button', { name: 'Add to Cart' }).first()
    await ProductAdded.click()
  }

  async validateProductAdded() {
    await this.expectText('.alert-success', 'Success')
  }
}