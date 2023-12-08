const { test, expect } = require('@playwright/test');

test('Check books page', async ({ page }) => {
    await page.goto('https://ivanmarinoff-exam1.onrender.com/books');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  