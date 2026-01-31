<<<<<<< HEAD
# DevcodeCare
=======
# DevCodeCare - Web Development Solutions

A modern, secure web development portfolio site built with **Next.js 14**, **TypeScript**, and **React**.

## Features

- **TypeScript**: Full type safety throughout the application
- **Next.js 14**: Server-side rendering and API routes
- **Security Features**:
  - Input validation with Zod
  - XSS protection with input sanitization
  - Rate limiting on API endpoints
  - Security headers (CSP, X-Frame-Options, etc.)
  - HTTPS enforcement headers
- **Modern UI**: Responsive design with smooth animations (AOS)
- **Contact Form**: Secure server-side email handling

## Prerequisites

- **Node.js**: Version 18.17.0 or higher
- **npm** or **yarn**: Package manager

## Quick Start

### 1. Navigate to the project directory

```bash
cd devcodecare-ts
```

### 2. Install dependencies

```bash
npm install
```

### 3. Copy assets from the original site

Copy the images from the original `public_html/assets/img` folder to `public/img`:

```bash
# Create the public/img directory
mkdir -p public/img

# Copy images (run from the devcodecare-ts directory)
cp -r ../public_html/assets/img/* public/img/
```

### 4. Set up environment variables

```bash
# Copy the example env file
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# Email Configuration (for contact form)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
CONTACT_EMAIL=contact@devcodecare.in

# Rate Limiting
RATE_LIMIT_MAX_REQUESTS=5
RATE_LIMIT_WINDOW_MS=60000
```

> **Note**: In development mode, if SMTP is not configured, emails will be logged to the console.

### 5. Run the development server

```bash
npm run dev
```

### 6. Open your browser

Visit [http://localhost:3000](http://localhost:3000)

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
devcodecare-ts/
├── public/
│   └── img/              # Images (copy from original site)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/  # Contact form API endpoint
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Clients.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── BackToTop.tsx
│   │   └── AOSInit.tsx
│   ├── lib/              # Utility functions
│   │   ├── validation.ts # Input validation
│   │   ├── rate-limit.ts # Rate limiting
│   │   └── email.ts      # Email service
│   ├── types/            # TypeScript types
│   └── middleware.ts     # Security middleware
├── package.json
├── tsconfig.json
├── next.config.js        # Next.js configuration
└── .env.example          # Environment variables template
```

## Security Features

### 1. Input Validation
All form inputs are validated using Zod with strict rules:
- Name: 2-100 characters, letters only
- Email: Valid email format, max 255 characters
- Subject: 5-200 characters
- Message: 10-5000 characters

### 2. XSS Protection
- Input sanitization removes potentially dangerous content
- HTML escaping in email templates
- Content Security Policy headers

### 3. Rate Limiting
- 5 requests per minute per IP (configurable)
- Prevents spam and abuse

### 4. Security Headers
- Strict-Transport-Security (HSTS)
- X-Frame-Options (clickjacking prevention)
- X-Content-Type-Options (MIME sniffing prevention)
- Content-Security-Policy
- Referrer-Policy
- Permissions-Policy

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

Build the production version:

```bash
npm run build
npm run start
```

## Customization

### Update Contact Information
Edit the following files:
- `src/components/Contact.tsx` - Contact section
- `src/components/Footer.tsx` - Footer information

### Add/Modify Portfolio Items
Edit `src/components/Portfolio.tsx` and update the `portfolioItems` array.

### Update Styles
Modify `src/app/globals.css` for global styles.

## License

This project is private. All rights reserved.

---

Built with care by DevCodeCare
>>>>>>> 3c209c4 (Pushing devcodecare typescript code)
