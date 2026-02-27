"use client";
import { useLocale } from 'next-intl';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'ar', label: 'العربية' }
];

const LOCALES = ['en', 'fr', 'ar'];

export default function LanguageSwitcher() {
    const locale = useLocale();
    const rawPathname = usePathname(); // e.g. "/en/about" or "/fr"
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const changeLocale = (nextLocale: string) => {
        setIsOpen(false);
        if (nextLocale === locale) return;

        // Strip ALL leading locale prefixes to avoid accumulation like /ar/fr/stays
        const segments = rawPathname.split('/').filter(Boolean);
        while (segments.length > 0 && LOCALES.includes(segments[0])) {
            segments.shift();
        }
        const pathWithoutLocale = '/' + segments.join('/');

        // Navigate to the clean new locale-prefixed path
        window.location.href = `/${nextLocale}${pathWithoutLocale}`;
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const activeLabel = languages.find(lang => lang.code === locale)?.label || 'English';

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-xs font-sans tracking-widest text-text-muted hover:text-white transition-colors uppercase border border-white/10 px-3 py-1.5 rounded bg-black/20"
            >
                <span>{activeLabel}</span>
                <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-36 bg-green-950 border border-white/10 rounded-lg shadow-xl overflow-hidden z-[100] flex flex-col">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLocale(lang.code)}
                            className={`w-full text-left px-4 py-3 text-xs tracking-widest font-sans transition-colors ${locale === lang.code
                                ? 'bg-white/10 text-white'
                                : 'text-text-muted hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
