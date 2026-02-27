"use client";
import { useTranslations } from 'next-intl';
import { ScrollElement } from "../ui/ScrollElement";

export const LocationSection = () => {
    const t = useTranslations('Location');
    return (
        <section id="location" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Real Agadir Hotel Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
                style={{ backgroundImage: "url('/images/hero-agadir.jpg')" }}
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-green-950/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-transparent to-green-950/80" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
                <ScrollElement direction="up" delay={0.2}>
                    <h2 className="text-sm font-sans tracking-[0.2em] text-neon uppercase mb-6">{t('subtitle')}</h2>
                </ScrollElement>

                <ScrollElement direction="up" delay={0.4}>
                    <h3
                        className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-tight mb-8 drop-shadow-lg"
                        dangerouslySetInnerHTML={{ __html: t.raw('title') }}
                    />
                </ScrollElement>

                <ScrollElement direction="up" delay={0.6}>
                    <p className="text-xl text-text-muted font-light mb-12 max-w-2xl mx-auto">
                        {t('desc')}
                    </p>
                </ScrollElement>

                <ScrollElement direction="up" delay={0.7}>
                    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-12 text-white font-sans text-sm tracking-widest uppercase">
                        <div className="flex flex-col items-center gap-2 bg-black/30 backdrop-blur-sm px-6 py-4 md:px-8 md:py-6 rounded-2xl border border-white/10 w-full md:w-auto">
                            <span className="text-3xl md:text-4xl font-serif text-emerald-light normal-case">{t('m1_val')}</span>
                            <span className="text-text-muted text-xs text-center">{t('m1_lbl')}</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 bg-black/30 backdrop-blur-sm px-6 py-4 md:px-8 md:py-6 rounded-2xl border border-white/10 w-full md:w-auto">
                            <span className="text-3xl md:text-4xl font-serif text-emerald-light normal-case">{t('m2_val')}</span>
                            <span className="text-text-muted text-xs text-center">{t('m2_lbl')}</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 bg-black/30 backdrop-blur-sm px-6 py-4 md:px-8 md:py-6 rounded-2xl border border-white/10 w-full md:w-auto">
                            <span className="text-3xl md:text-4xl font-serif text-emerald-light normal-case">{t('m3_val')}</span>
                            <span className="text-text-muted text-xs text-center">{t('m3_lbl')}</span>
                        </div>
                    </div>
                </ScrollElement>
            </div>
        </section>
    );
};
