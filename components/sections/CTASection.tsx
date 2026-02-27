"use client";
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ScrollElement } from "../ui/ScrollElement";
import { GlassButton } from "../ui/GlassButton";

export const CTASection = () => {
    const t = useTranslations('CTA');
    const locale = useLocale();
    return (
        <section id="contact" className="relative py-24 md:py-40 bg-green-950 text-white overflow-hidden flex items-center justify-center">
            {/* Soft Glow Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[300px] md:h-[400px] bg-neon/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10 flex flex-col items-center">
                <ScrollElement direction="up" delay={0.2}>
                    <h2
                        className="text-4xl md:text-5xl lg:text-7xl font-serif leading-tight mb-6 md:mb-8 text-white"
                        dangerouslySetInnerHTML={{ __html: t.raw('title') }}
                    />
                </ScrollElement>

                <ScrollElement direction="up" delay={0.4}>
                    <p className="text-lg md:text-xl text-text-muted mb-10 md:mb-12 max-w-2xl font-light px-4">
                        {t('desc')}
                    </p>
                </ScrollElement>

                <ScrollElement direction="up" delay={0.6}>
                    <Link href={`/${locale}/stays#booking`}>
                        <GlassButton variant="primary" className="px-8 md:px-10 py-4 md:py-5 text-base md:text-lg w-full md:w-auto">
                            {t('button')}
                        </GlassButton>
                    </Link>
                </ScrollElement>
            </div>
        </section>
    );
};
