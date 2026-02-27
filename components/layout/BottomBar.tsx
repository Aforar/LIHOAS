import { useTranslations } from 'next-intl';

export const BottomBar = () => {
    const t = useTranslations('Metrics');

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-green-950/80 backdrop-blur-md hidden md:block">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center text-xs font-sans tracking-widest text-text-muted uppercase">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon"></div>
                    {t('beach')}
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon"></div>
                    {t('spa')}
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon"></div>
                    {t('dining')}
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon"></div>
                    {t('concierge')}
                </div>
            </div>
        </div>
    );
};
