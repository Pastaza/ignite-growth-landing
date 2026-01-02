# Cardly - Gift Card Management App

Never forget a gift card again! Cardly tracks all your gift cards in one place, reminds you before they expire, and helps you spend every dollar.

## Features

- **Gift Card Tracking**: Store and manage all your gift cards in one secure location
- **Expiration Reminders**: Get notified before your gift cards expire
- **Balance Tracking**: Monitor your gift card balances
- **Supabase Authentication**: Secure user authentication and data storage
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Email**: Resend
- **Icons**: Lucide React
- **Date Handling**: date-fns

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/Pastaza/ignite-growth-landing.git
cd ignite-growth-landing
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env
\`\`\`

Edit \`.env\` and add your Supabase credentials:
- \`NEXT_PUBLIC_SUPABASE_URL\`: Your Supabase project URL
- \`NEXT_PUBLIC_SUPABASE_ANON_KEY\`: Your Supabase anon/public key

4. Set up the database:
- Go to your Supabase project dashboard
- Navigate to the SQL Editor
- Run the SQL commands from \`supabase/schema.sql\`

5. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── account/           # Account management pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── cards/             # Gift card management pages
│   ├── dashboard/         # Dashboard pages
│   ├── login/             # Login page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── landing/          # Landing page components
├── contexts/             # React Context providers
├── lib/                  # Utility functions and helpers
├── public/               # Static assets
├── scripts/              # Utility scripts
└── supabase/             # Database schema and migrations
\`\`\`

## Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm start\` - Start production server
- \`npm run lint\` - Run ESLint
- \`npm run send-emails\` - Manually trigger email notifications

## Database Schema

The app uses Supabase with the following main tables:
- \`profiles\` - User profiles
- \`gift_cards\` - Gift card information
- \`transactions\` - Transaction history

See \`supabase/schema.sql\` for the complete schema.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.

## Support

For support, email support@cardly.app or open an issue in this repository.
