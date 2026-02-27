"use client";
import { useTranslations } from 'next-intl';
import { ScrollElement } from "../ui/ScrollElement";

export const ConceptSection = () => {
    const t = useTranslations('Concept');
    return (
        <section id="about" className="relative py-32 bg-green-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Text Block */}
                    <div className="flex flex-col justify-center">
                        <ScrollElement direction="left" delay={0.2}>
                            <h2 className="text-sm font-sans tracking-[0.2em] text-neon uppercase mb-6">{t('subtitle')}</h2>
                        </ScrollElement>

                        <ScrollElement direction="left" delay={0.4}>
                            <h3 className="text-4xl md:text-5xl font-serif leading-tight mb-8" dangerouslySetInnerHTML={{ __html: t.raw('title') }} />
                        </ScrollElement>

                        <ScrollElement direction="left" delay={0.6}>
                            <p className="text-text-muted text-lg leading-relaxed mb-6">
                                {t('p1')}
                            </p>
                            <p className="text-text-muted text-lg leading-relaxed">
                                {t('p2')}
                            </p>
                        </ScrollElement>
                    </div>

                    {/* Right: Floating Glass Card */}
                    <ScrollElement direction="up" delay={0.5} className="h-[550px] w-full relative group">
                        <div className="w-full h-full relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-green-950/10 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 z-10">
                                <div className="text-2xl font-serif text-emerald-light mb-1">{t('card_title')}</div>
                                <div className="text-text-muted text-sm">{t('card_desc')}</div>
                            </div>
                        </div>
                    </ScrollElement>

                </div>
            </div>
        </section>
    );
};
