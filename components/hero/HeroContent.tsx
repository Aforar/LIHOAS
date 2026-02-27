"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { GlassButton } from "../ui/GlassButton";
import { ScrollElement } from "../ui/ScrollElement";

// Dynamic import to avoid blocking hydration
const ShaderGradientCanvas = dynamic(
    () => import("@shadergradient/react").then((mod) => mod.ShaderGradientCanvas),
    { ssr: false }
);

const ShaderGradient = dynamic(
    () => import("@shadergradient/react").then((mod) => mod.ShaderGradient),
    { ssr: false }
);

export const HeroContent = () => {
    const t = useTranslations('Hero');

    return (
        <section className="relative h-screen w-full overflow-hidden bg-green-950">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 opactiy-90">
                <Suspense fallback={<div className="h-full w-full bg-green-950" />}>
                    <ShaderGradientCanvas
                        style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
                        pointerEvents="none"
                        pixelDensity={1}
                    >
                        <ShaderGradient
                            animate="on"
                            type="sphere"
                            shader="defaults"
                            uSpeed={0.2}
                            uStrength={0.4}
                            uDensity={1.2}
                            uFrequency={5.5}
                            uAmplitude={3}
                            color1="#9de092"
                            color2="#25ff0a"
                            color3="#071a10"
                            reflection={0.5}
                            cDistance={4.5}
                            cameraZoom={8}
                            brightness={0.8}
                            envPreset="city"
                            grain="on"
                        />
                    </ShaderGradientCanvas>
                </Suspense>
            </div>

            {/* Gradients to ensure text readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-green-950 via-green-950/60 to-transparent" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-green-950 via-green-950/20 to-transparent" />

            {/* Hero Content */}
            <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center">
                <div className="max-w-3xl pt-20">
                    <ScrollElement direction="up" delay={0.2}>
                        <h1 className="text-white text-6xl md:text-8xl lg:text-[100px] leading-[1.05] tracking-tight mb-8">
                            <span dangerouslySetInnerHTML={{ __html: t.raw('headline') }} />
                            <span className="text-emerald-light">LIHOAS</span>
                        </h1>
                    </ScrollElement>

                    <ScrollElement direction="up" delay={0.4}>
                        <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-xl font-light leading-relaxed">
                            {t('subheadline')}
                        </p>
                    </ScrollElement>

                    <ScrollElement direction="up" delay={0.6}>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="/stays" className="inline-block">
                                <GlassButton variant="primary" className="px-8 py-4 text-base tracking-widest uppercase items-center justify-center w-full">
                                    {t('bookNow')}
                                </GlassButton>
                            </Link>
                            <Link href="/stays" className="inline-block">
                                <GlassButton variant="secondary" className="px-8 py-4 text-base tracking-widest uppercase items-center justify-center w-full">
                                    {t('explore')}
                                </GlassButton>
                            </Link>
                        </div>
                    </ScrollElement>
                </div>
            </div>

        </section>
    );
};
