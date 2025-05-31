import React from 'react';
import './globals.css';

export const metadata = {
  title: 'My Next.js App',
  description: 'A Next.js application with TypeScript, Tailwind CSS, Prisma, and tRPC',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;