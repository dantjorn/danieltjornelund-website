# Daniel Tjørnelund — website (static rebuild)

This replaces the Wix site with plain HTML/CSS/JS. No monthly hosting fee — the
only recurring cost is the domain itself (similar to what Ariel did, ~$6–15/year
depending on registrar and TLD).

## Files
- `index.html`, `track-record.html`, `flagship-transformation.html`,
  `how-i-work.html`, `use-cases.html`, `book-daniel.html` — the six pages
- `styles.css`, `main.js` — shared styling and behavior
- Fonts load from Google Fonts (free, no account needed)

## 1. Set up the contact form (5 minutes)
The "Book a Call" page has a real contact form, but it needs a free endpoint
to actually send you the message (static sites can't process form
submissions on their own):

1. Go to https://formspree.io and create a free account (50 submissions/month free).
2. Create a new form, copy the Form ID it gives you (looks like `xyzabcd`).
3. Open `main.js` and replace `YOUR_FORM_ID` in this line with your real ID:
   `const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';`
4. Save. That's it — submissions will land in your Formspree inbox and forward to your email.

## 2. Host it for free — GitHub Pages
This is the closest equivalent to what Ariel likely did.

1. Create a free GitHub account if you don't have one.
2. Create a new repository, e.g. `danieltjornelund-website`.
3. Upload all the files in this folder to the repository (drag-and-drop works
   on github.com, or use `git push` if you're comfortable with git).
4. In the repo: Settings → Pages → set "Source" to the `main` branch, root folder.
5. GitHub will give you a URL like `https://yourusername.github.io/danieltjornelund-website`
   — confirm the site works there first.

(Cloudflare Pages or Netlify are equally good free alternatives if you'd rather
use those — same idea, drag-and-drop deploy, free tier covers a personal site easily.)

## 3. Point your existing domain at it
You already own danieltjornelund.com — you don't need to buy a new domain,
just stop renewing it through Wix's hosting plan and point the DNS at GitHub Pages instead:

1. In GitHub: Settings → Pages → add custom domain `www.danieltjornelund.com`
   (and `danieltjornelund.com`), GitHub will show you DNS records to add.
2. At your domain registrar (wherever you renew danieltjornelund.com — check if
   that's Wix itself or a separate registrar), add the DNS records GitHub gives you:
   - An `A` record (or four) pointing the root domain to GitHub's IPs
   - A `CNAME` record pointing `www` to `yourusername.github.io`
3. DNS changes can take up to 24–48 hours to propagate, though it's often much faster.
4. Once it's live, cancel the Wix subscription — you'll only pay for the domain
   renewal going forward (often $12-20/year depending on registrar; Ariel
   apparently found one closer to $6 — Cloudflare Registrar and Namecheap are
   both worth comparing, since they tend to be cheapest with no markup).

## Notes on content carried over from Wix
- The case-study PDFs on the Use Cases page and your CV PDF currently still
  link to Wix's file storage (`...wixstatic.com/...`). Those links will break
  once you cancel Wix. Before cancelling, download those PDFs and re-upload
  them into your GitHub repo (in a `/files` folder), then update the links in
  `use-cases.html` to point to the new local paths.
- The four "Articles" on the Use Cases page were placeholder links on the Wix
  site (they didn't go anywhere real) — I left them as text with a note to
  reach out, since there's nothing to actually link to yet. Happy to help
  turn these into real article pages if you'd like to write them up.
- There's no headshot/photo on the new site (the Wix one didn't survive the
  export). Send me a photo and I can add it in, or it works fine without one
  given the rest of the visual identity.

## What changed from the Wix version
- Fully responsive — the mobile nav now properly collapses into a hamburger
  menu instead of stretching the layout.
- No Wix branding, tracking scripts, or page-load bloat — should load
  noticeably faster on mobile data.
- Visual identity: a "technical drawing" theme (drawing numbers, title blocks,
  before/after schematic) tying into your mechanical engineering background
  and the actual substance of your work — turning fragile systems into
  structured ones.
