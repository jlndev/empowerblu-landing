# EmpowerBlu - CRM for Trades & Contractors

This is the landing page for EmpowerBlu, an all-in-one CRM and job management platform built specifically for blue collar trades and field service businesses.

## About EmpowerBlu

EmpowerBlu helps contractors, tradesmen, and field service companies:
- Schedule and manage jobs efficiently
- Create professional estimates and invoices
- Track customer information and job history
- Accept payments online or on-site
- Manage team members and dispatch work

## Features

- Modern, responsive landing page design
- Built with Next.js and Tailwind CSS
- Fast performance
- Easy deployment with Vercel

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

The application uses environment variables to handle different environments. Create a `.env.local` file in the root directory with the following variables:

```
# App URLs
NEXT_PUBLIC_APP_URL=http://localhost:3000 # For local development
# NEXT_PUBLIC_APP_URL=https://app.empowerblu.com # For production
```

In production, these variables should be set in your hosting platform (e.g., Vercel).

## Project Structure

- `src/app` - Next.js app router pages
- `src/components` - Reusable UI components
  - `layout` - Layout components (Navbar, Footer)
  - `sections` - Page sections (Hero, Features, etc.)
  - `ui` - Reusable UI components (Button, Input, etc.)
- `src/config` - Configuration files
- `public` - Static assets

## Customization

You can customize the content by editing the component files in the `src/components` directory.

## Deployment

The easiest way to deploy this landing page is with [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Import the project in Vercel
3. Set up environment variables in the Vercel dashboard
4. Deploy

Alternatively, you can build the project locally and deploy the output:

```bash
npm run build
```

## License

MIT
# empowerblu-landing
