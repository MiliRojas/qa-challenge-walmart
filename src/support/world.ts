import { setWorldConstructor, World } from '@cucumber/cucumber'
import { Browser, BrowserContext, Page } from '@playwright/test'
import { User } from '../types/User'

export class CustomWorld extends World {
  browser!: Browser
  context!: BrowserContext
  page!: Page
  user!: User
}

setWorldConstructor(CustomWorld)