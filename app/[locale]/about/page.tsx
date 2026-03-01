import { ScrollElement } from "@/components/ui/ScrollElement";
import { GlassButton } from "@/components/ui/GlassButton";
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
    const t = useTranslations('About');
    const tCTA = useTranslations('CTA');
    const tLocal = useTranslations('LocalAttractions');

    return (
        <main className="flex min-h-screen flex-col font-sans pt-32 pb-24">
            {/* Intro Section */}
            <section className="relative px-6 lg:px-12 max-w-7xl mx-auto w-full mb-24 md:mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div>
                        <ScrollElement direction="left" delay={0.2}>
                            <h2 className="text-sm font-sans tracking-[0.2em] text-neon uppercase mb-6">{t('intro_subtitle')}</h2>
                        </ScrollElement>
                        <ScrollElement direction="left" delay={0.3}>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif leading-tight mb-6 md:mb-8 drop-shadow-lg text-white" dangerouslySetInnerHTML={{ __html: t.raw('intro_title') }} />
                        </ScrollElement>
                        <ScrollElement direction="left" delay={0.4}>
                            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8 font-light">
                                {t('intro_desc')}
                            </p>
                        </ScrollElement>
                        <ScrollElement direction="left" delay={0.5}>
                            <Link href="/stays" className="block w-full sm:inline-block sm:w-auto">
                                <GlassButton variant="primary" className="px-8 py-3 text-base w-full md:w-auto">
                                    {tCTA('button')}
                                </GlassButton>
                            </Link>
                        </ScrollElement>
                    </div>

                    <ScrollElement direction="up" delay={0.4} className="h-[400px] md:h-[500px] lg:h-[700px] w-full relative rounded-2xl overflow-hidden group mt-8 lg:mt-0">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.05]" style={{ backgroundImage: "url('/images/about-intro.jpg')" }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/20 to-transparent"></div>
                    </ScrollElement>
                </div>
            </section>

            {/* Our Experience */}
            <section className="relative px-6 lg:px-12 max-w-7xl mx-auto w-full mb-24 md:mb-32">
                <div className="text-center mb-12 md:mb-16">
                    <ScrollElement direction="up" delay={0.2}>
                        <h2 className="text-sm font-sans tracking-[0.2em] text-neon uppercase mb-6">{t('exp_subtitle')}</h2>
                    </ScrollElement>
                    <ScrollElement direction="up" delay={0.3}>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white">{t('exp_title')}</h3>
                    </ScrollElement>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: t('e1_title'), desc: t('e1_desc') },
                        { title: t('e2_title'), desc: t('e2_desc') },
                        { title: t('e3_title'), desc: t('e3_desc') },
                        { title: t('e4_title'), desc: t('e4_desc') }
                    ].map((item, i) => (
                        <ScrollElement direction="up" delay={0.4 + (i * 0.1)} key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <div className="text-neon mb-4">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-serif text-white mb-3">{item.title}</h4>
                            <p className="text-sm text-text-muted">{item.desc}</p>
                        </ScrollElement>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="relative px-6 lg:px-12 max-w-4xl mx-auto w-full">
                <ScrollElement direction="up" delay={0.2} className="bg-green-900/30 border border-emerald-light/20 rounded-3xl p-8 md:p-10 lg:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-neon/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                    <h2 className="text-2xl md:text-3xl font-serif text-white mb-6 md:mb-8">{t('why_title')}</h2>

                    <ul className="space-y-6">
                        {[
                            t('w1'),
                            t('w2'),
                            t('w3'),
                            t('w4'),
                            t('w5')
                        ].map((bullet, i) => (
                            <li key={i} className="flex items-center gap-4 text-text-muted text-base md:text-lg">
                                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-neon/20 text-neon">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                {bullet}
                            </li>
                        ))}
                    </ul>
                </ScrollElement>
            </section>

            {/* Local Agadir Attractions */}
            <section className="relative px-6 lg:px-12 max-w-7xl mx-auto w-full mt-24 md:mt-32 border-t border-white/5 pt-16 md:pt-24">
                <div className="text-center mb-12 md:mb-16">
                    <ScrollElement direction="up" delay={0.1}>
                        <h2 className="text-sm font-sans tracking-[0.2em] text-neon uppercase mb-6">{tLocal('subtitle')}</h2>
                    </ScrollElement>
                    <ScrollElement direction="up" delay={0.2}>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">{tLocal('title')}</h3>
                    </ScrollElement>
                    <ScrollElement direction="up" delay={0.3}>
                        <p className="text-base md:text-lg text-text-muted font-light max-w-2xl mx-auto">{tLocal('desc')}</p>
                    </ScrollElement>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { key: 'p1', icon: '🏖️' },
                        { key: 'p2', icon: '🏯' },
                        { key: 'p3', icon: '🛍️' },
                        { key: 'p4', icon: '🦜' },
                        { key: 'p5', icon: '🐊' },
                        { key: 'p6', icon: '⚓' },
                    ].map((place, i) => (
                        <ScrollElement direction="up" delay={0.2 + i * 0.08} key={place.key}>
                            <div className="group flex flex-col gap-4 p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.07] hover:border-neon/30 transition-all duration-300 h-full">
                                <div className="text-4xl">{place.icon}</div>
                                <div>
                                    <h4 className="text-lg font-serif text-white mb-2 group-hover:text-emerald-light transition-colors">
                                        {tLocal(`${place.key}_name` as any)}
                                    </h4>
                                    <p className="text-sm text-text-muted leading-relaxed">
                                        {tLocal(`${place.key}_desc` as any)}
                                    </p>
                                </div>
                            </div>
                        </ScrollElement>
                    ))}
                </div>
            </section>
        </main>
    );
}
