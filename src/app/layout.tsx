import { type Metadata } from 'next';

import './globals.css';
import 'prismjs/themes/prism-okaidia.css';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
