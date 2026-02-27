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
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            setMenuOpen(false); // close menu on scroll
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: `/${locale}`, label: t('home') },
        { href: `/${locale}/about`, label: t('about') },
        { href: `/${locale}/stays`, label: t('stays') },
        { href: `/${locale}/#contact`, label: t('contact') },
    ];

    return (
        <>
            <header
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled || menuOpen
                        ? "bg-green-950/95 backdrop-blur-lg border-b border-white/5 py-4 shadow-lg"
                        : "bg-transparent py-6"
                )}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
                    {/* Brand */}
                    <Link href={`/${locale}`} className="flex items-center gap-2 z-50">
                        <span className="font-serif text-2xl tracking-widest text-white">LIHOAS</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide text-text-muted">
                        {navLinks.map(link => (
                            <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <LanguageSwitcher />
                        <Link href={`/${locale}/stays#booking`}>
                            <GlassButton variant={isScrolled ? 'primary' : 'secondary'} className="px-5 py-2 text-neon border-neon/50">
                                {t('booking')}
                            </GlassButton>
                        </Link>
                    </div>

                    {/* Mobile: Language + Hamburger */}
                    <div className="flex md:hidden items-center gap-3 z-50">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="flex flex-col justify-center items-center w-9 h-9 gap-1.5"
                            aria-label="Toggle menu"
                        >
                            <span className={clsx("block w-6 h-0.5 bg-white transition-all duration-300", menuOpen && "rotate-45 translate-y-2")} />
                            <span className={clsx("block w-6 h-0.5 bg-white transition-all duration-300", menuOpen && "opacity-0")} />
                            <span className={clsx("block w-6 h-0.5 bg-white transition-all duration-300", menuOpen && "-rotate-45 -translate-y-2")} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer */}
            <div className={clsx(
                "fixed inset-0 z-40 flex flex-col justify-center items-center bg-green-950/98 backdrop-blur-xl transition-all duration-500 md:hidden",
                menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <nav className="flex flex-col items-center gap-8">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={clsx(
                                "text-3xl font-serif text-white/80 hover:text-white transition-all duration-300",
                                menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                            )}
                            style={{ transitionDelay: `${i * 60}ms` }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        href={`/${locale}/stays#booking`}
                        onClick={() => setMenuOpen(false)}
                        className={clsx(
                            "mt-4 transition-all duration-300",
                            menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        )}
                        style={{ transitionDelay: '280ms' }}
                    >
                        <GlassButton variant="primary" className="px-8 py-3 text-neon border-neon/50 text-lg">
                            {t('booking')}
                        </GlassButton>
                    </Link>
                </nav>
            </div>
        </>
    );
};
