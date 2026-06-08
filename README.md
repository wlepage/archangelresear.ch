The static website for Archangel Research, archangelresear.ch.

## Contact form reCAPTCHA

The contact form uses Formspree and Google reCAPTCHA v2 checkbox when
`PUBLIC_RECAPTCHA_SITE_KEY` is set.

1. Create a Google reCAPTCHA v2 checkbox key for `archangelresear.ch`. Add `localhost`
   too if you want to test local builds.
2. Put the site key in `.env` for local builds:

   ```bash
   PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_v2_checkbox_site_key
   ```

3. In Formspree, enable CAPTCHA for the form, choose Custom reCAPTCHA, and configure the
   matching secret key.
4. For GitHub Pages deploys, add `PUBLIC_RECAPTCHA_SITE_KEY` as an Actions repository
   variable so the static build includes the widget. Deploys fail if this variable is missing.
