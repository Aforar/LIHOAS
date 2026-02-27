import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar'
import { BottomBar } from '@/components/layout/BottomBar'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import '../globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'LIHOAS | Luxury Hotel in Agadir',
  description: 'Discover comfort, elegance, and unforgettable moments in the heart of Agadir.',
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="dark scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased selection:bg-neon selection:text-green-950 bg-green-950`}>
        <NextIntlClientProvider messages={messages}>
          <SmoothScroll>
            <Navbar />
            {children}
            <SiteFooter />
            <BottomBar />
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
