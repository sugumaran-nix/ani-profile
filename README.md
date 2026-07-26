# Sugumaran S — Portfolio

Personal portfolio site built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Features a dark/light theme toggle, animated sections, and a working contact form powered by EmailJS.

**Live →** _your-vercel-url.vercel.app_

---

## Tech Stack

- **Framework** — Next.js 14 (App Router)
- **Styling** — Tailwind CSS + custom CSS design tokens
- **Animations** — Framer Motion
- **Contact Form** — EmailJS (`@emailjs/browser`)
- **Icons** — Lucide React
- **Theme** — next-themes (dark / light)
- **Deployment** — Vercel

---

## Getting Started

### 1. Clone & install

```bash
git clone https://github.com/sugumaran-nix/ani-profile.git
cd ani-profile
npm install
```

### 2. Set up environment variables

Copy the example file and fill in your EmailJS credentials:

```bash
cp .env.local.example .env.local
```

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> See [EmailJS Setup](#emailjs-setup) below to get these values.

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## EmailJS Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. **Add a service** — connect your Gmail or any email provider → copy the **Service ID**
3. **Create a template** — use these variable names in your template body:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{message}}` — message body
4. Copy the **Template ID** from the template dashboard
5. Go to **Account → API Keys** → copy your **Public Key**
6. Paste all three into `.env.local`

---

## Deployment (Vercel)

1. Push the repo to GitHub
2. Import the repo in [vercel.com/new](https://vercel.com/new)
3. Add the three `NEXT_PUBLIC_EMAILJS_*` variables under **Project Settings → Environment Variables**
4. Deploy — Vercel auto-detects Next.js, no config needed

The `vercel.json` in this repo is already configured.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Design tokens, all component styles
│   ├── layout.tsx        # Root layout + theme provider
│   └── page.tsx          # Section composition
└── components/
    ├── sections/
    │   ├── Navbar.tsx
    │   ├── Hero.tsx
    │   ├── About.tsx
    │   ├── Skills.tsx
    │   ├── Projects.tsx
    │   ├── Contact.tsx   # EmailJS form
    │   └── Footer.tsx
    └── ui/
        ├── ThemeProvider.tsx
        ├── ScrollReveal.tsx
        ├── Particles.tsx
        └── CursorGlow.tsx
```

---

## License

MIT — use it, fork it, make it yours.
