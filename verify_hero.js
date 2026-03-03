import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.goto('http://localhost:5173/');
    await page.waitForTimeout(2000); // Wait for animations
    await page.screenshot({ path: 'verify_hero.png' });
    await browser.close();
})();
