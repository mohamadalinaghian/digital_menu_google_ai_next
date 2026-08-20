import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'کافه و رستوران چینو | Chino Café & Restaurant Shahroud',
  description: 'منوی دیجیتال کافه و رستوران چینو شاهرود. قهوه‌های تخصصی، دم‌نوش‌های اصیل، صبحانه و غذاهای ویژه در فضایی آرام و اصیل.',
  keywords: ['کافه چینو', 'رستوران چینو شاهرود', 'منوی دیجیتال کافه', 'کافه شاهرود', 'Chino Cafe Shahroud', 'Specialty Coffee Shahroud'],
  openGraph: {
    title: 'کافه و رستوران چینو شاهرود | منوی دیجیتال',
    description: 'تجربه‌ای ناب از طعم قهوه تخصصی، شیرینی‌های تازه و غذاهای اصیل در کافه رستوران چینو شاهرود.',
    type: 'website',
    locale: 'fa_IR',
    siteName: 'کافه رستوران چینو',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'کافه رستوران چینو | Chino Café Shahroud',
    description: 'منوی دیجیتال اختصاصی کافه و رستوران چینو شاهرود',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="theme-color" content="#1F1C18" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-[#211E1B] text-[#EAE3D7] antialiased selection:bg-[#BD9557]/30 selection:text-[#FAF7F2] min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
