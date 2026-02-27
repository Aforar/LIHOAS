"use client";
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { GlassButton } from '../ui/GlassButton';
import LanguageSwitcher from '../ui/LanguageSwitcher';

export const Navbar = () => {
    const t = useTranslations('Navigation');
    const locale = useLocale();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled ? "bg-green-950/80 backdrop-blur-lg border-b border-white/5 py-4 shadow-lg" : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    {/* Brand */}
                    <span className="font-serif text-2xl tracking-widest text-white">LIHOAS</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide text-text-muted">
                    <Link href={`/${locale}`} className="hover:text-white transition-colors">{t('home')}</Link>
                    <Link href={`/${locale}/about`} className="hover:text-white transition-colors">{t('about')}</Link>
                    <Link href={`/${locale}/stays`} className="hover:text-white transition-colors">{t('stays')}</Link>
                    <Link href={`/${locale}/#contact`} className="hover:text-white transition-colors">{t('contact')}</Link>
                </nav>

                <div className="hidden sm:flex items-center gap-4">
                    <LanguageSwitcher />
                    <Link href={`/${locale}/stays#booking`}>
                        <GlassButton variant={isScrolled ? 'primary' : 'secondary'} className="px-5 py-2 text-neon border-neon/50">
                            {t('booking')}
                        </GlassButton>
                    </Link>
                </div>
            </div>
        </header>
    );
};
