"use client";
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ScrollElement } from "../ui/ScrollElement";
import { GlassButton } from "../ui/GlassButton";

export const CTASection = () => {
    const t = useTranslations('CTA');
    return (
        <section id="contact" className="relative py-40 bg-green-950 text-white overflow-hidden flex items-center justify-center">
            {/* Soft Glow Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-neon/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10 flex flex-col items-center">
                <ScrollElement direction="up" delay={0.2}>
                    <h2
                        className="text-5xl md:text-7xl font-serif leading-tight mb-8 text-white"
                        dangerouslySetInnerHTML={{ __html: t.raw('title') }}
                    />
                </ScrollElement>

                <ScrollElement direction="up" delay={0.4}>
                    <p className="text-xl text-text-muted mb-12 max-w-2xl font-light">
                        {t('desc')}
                    </p>
                </ScrollElement>

                <ScrollElement direction="up" delay={0.6}>
                    <Link href="/stays#booking">
                        <GlassButton variant="primary" className="px-10 py-5 text-lg">
                            {t('button')}
                        </GlassButton>
                    </Link>
                </ScrollElement>
            </div>
        </section>
    );
};
