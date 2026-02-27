"use client";
import { useTranslations } from 'next-intl';
import { ScrollElement } from "../ui/ScrollElement";

export const InvestmentSection = () => {
    const t = useTranslations('Amenities');

    const amenities = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            ),
            title: t('a1_title'),
            desc: t('a1_desc')
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: t('a2_title'),
            desc: t('a2_desc')
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                </svg>
            ),
            title: t('a3_title'),
            desc: t('a3_desc')
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: t('a4_title'),
            desc: t('a4_desc')
        }
    ];

    return (
        <section id="amenities" className="relative py-24 md:py-32 bg-[#05110a] text-white overflow-hidden">
            {/* Subtle Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-neon/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <ScrollElement direction="up" delay={0.2}>
                        <h2 className="text-sm font-sans tracking-[0.2em] text-neon uppercase mb-4 md:mb-6">{t('subtitle')}</h2>
                    </ScrollElement>
                    <ScrollElement direction="up" delay={0.3}>
                        <h3 className="text-3xl md:text-5xl font-serif leading-tight max-w-2xl mx-auto">
                            {t('title')}
                        </h3>
                    </ScrollElement>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {amenities.map((item, i) => (
                        <ScrollElement direction="up" delay={0.3 + i * 0.1} key={i} className="border-t border-white/10 pt-8 group">
                            <div className="text-neon mb-6 transition-transform duration-300 group-hover:scale-110 w-fit">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-serif text-white mb-3">{item.title}</h4>
                            <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                        </ScrollElement>
                    ))}
                </div>
            </div>
        </section>
    );
};
