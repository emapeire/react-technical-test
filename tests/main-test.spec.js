import { test, expect } from '@playwright/test'
import { PREFIX_IMAGE_URL, LOCALHOST_URL } from '../utils/constants'

test('app show random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = page.getByRole('paragraph')
  const img = page.getByRole('img')

  const textContent = await text.textContent()
  const imgSrc = await img.getAttribute('src')

  // console.debug('textContent:', textContent)
  // console.debug('imgSrc:', imgSrc)

  expect(textContent?.length).toBeGreaterThan(0)
  expect(imgSrc?.startsWith(PREFIX_IMAGE_URL)).toBeTruthy()
})
