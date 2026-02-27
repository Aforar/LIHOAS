"use client";
import Link from 'next/link';
import { useLocale } from 'next-intl';

export const SiteFooter = () => {
    const locale = useLocale();

    return (
        <footer className="relative w-full bg-green-950 border-t border-white/10 pb-24 md:pb-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    {/* Brand */}
                    <div>
                        <span className="font-serif text-2xl tracking-widest text-white block mb-3">LIHOAS</span>
                        <p className="text-xs text-text-muted leading-relaxed max-w-[200px]">
                            Luxury Hotel in Agadir, Morocco.<br />
                            Where comfort meets elegance.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-sans tracking-[0.2em] text-neon uppercase mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-text-muted">
                            <li><Link href={`/${locale}`} className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href={`/${locale}/about`} className="hover:text-white transition-colors">About</Link></li>
                            <li><Link href={`/${locale}/stays`} className="hover:text-white transition-colors">Stays</Link></li>
                            <li><Link href={`/${locale}/stays#booking`} className="hover:text-white transition-colors">Book Now</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-sans tracking-[0.2em] text-neon uppercase mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm text-text-muted">
                            <li>📍 Agadir, Morocco</li>
                            <li>
                                <a href="mailto:aforar.business@gmail.com" className="hover:text-white transition-colors">
                                    aforar.business@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-sans text-text-muted">
                    <span>© {new Date().getFullYear()} LIHOAS. All rights reserved.</span>
                    <span>
                        Developed by{' '}
                        <a href="mailto:aforar.business@gmail.com" className="text-neon hover:underline">Aforar</a>
                        {' '}&amp;{' '}
                        <span className="text-white/60">Abdelmalek Mazouzi</span>
                    </span>
                </div>
            </div>
        </footer>
    );
};
