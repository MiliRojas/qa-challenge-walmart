import { defineConfig } from '@playwright/test'

export default defineConfig({
  use: {
    baseURL: 'https://opencart.abstracta.us',
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    navigationTimeout: 15000,
    screenshot: 'only-on-failure',
  },
})