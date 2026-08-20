import { test, expect } from '@playwright/test';

test('contact form is wired to submit every field to Formspree', async ({ page }) => {
  let submittedBody = '';

  await page.route('https://formspree.io/f/xpqnerzr', async (route) => {
    const request = route.request();

    expect(request.method()).toBe('POST');
    submittedBody = request.postData() ?? '';

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: '{}',
    });
  });

  await page.goto('/');

  const form = page.locator('[data-contact-form]');
  await expect(form).toHaveAttribute('action', 'https://formspree.io/f/xpqnerzr');
  await expect(form).toHaveAttribute('method', 'POST');
  await expect(form.locator('input, textarea')).toHaveCount(3);

  for (const field of ['name', 'email', 'message']) {
    await expect(form.locator(`[name="${field}"]`)).toHaveCount(1);
  }

  await form.locator('[name="name"]').fill('Ada Lovelace');
  await form.locator('[name="email"]').fill('ada@example.com');
  await form.locator('[name="message"]').fill('Please send more information.');
  await form.locator('button[type="submit"]').click();

  await expect(form.locator('[data-contact-status]')).toHaveText(
    'Thank you. Your message has been sent.'
  );
  expect(submittedBody).toContain('name="name"');
  expect(submittedBody).toContain('Ada Lovelace');
  expect(submittedBody).toContain('name="email"');
  expect(submittedBody).toContain('ada@example.com');
  expect(submittedBody).toContain('name="message"');
  expect(submittedBody).toContain('Please send more information.');
});
