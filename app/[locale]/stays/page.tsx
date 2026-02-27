import { ScrollElement } from "@/components/ui/ScrollElement";
import { GlassButton } from "@/components/ui/GlassButton";
import { BookingForm } from "@/components/sections/BookingForm";
import { useTranslations } from 'next-intl';

export default function StaysPage() {
    const t = useTranslations('Stays');

    const rooms = [
        {
            title: "Superior Suite",
            desc: t('r1_desc'),
            price: "4,500 MAD",
            img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        },
        {
            title: "Deluxe Room",
            desc: t('r2_desc'),
            price: "2,500 MAD",
            img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        },
        {
            title: "Standard Room",
            desc: t('r3_desc'),
            price: "1,500 MAD",
            img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        }
    ];

    return (
        <main className="flex min-h-screen flex-col font-sans pt-32 pb-24">
            {/* Header */}
            <section className="text-center px-6 mb-20 max-w-3xl mx-auto">
                <ScrollElement direction="up" delay={0.2}>
                    <h2 className="text-sm font-sans tracking-[0.2em] text-neon uppercase mb-6">{t('subtitle')}</h2>
                </ScrollElement>
                <ScrollElement direction="up" delay={0.3}>
                    <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">{t('title')}</h1>
                </ScrollElement>
                <ScrollElement direction="up" delay={0.4}>
                    <p className="text-xl text-text-muted font-light">
                        {t('desc')}
                    </p>
                </ScrollElement>
            </section>

            {/* Rooms Overview */}
            <section className="px-6 lg:px-12 max-w-7xl mx-auto w-full mb-32 flex flex-col gap-16">
                {rooms.map((room, i) => (
                    <ScrollElement direction="up" delay={0.2} key={i}>
                        <div className={`group rounded-3xl overflow-hidden bg-white/5 border border-white/10 grid grid-cols-1 md:grid-cols-2 relative h-full md:h-[450px] ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>

                            {/* Image Side */}
                            <div className="relative h-64 md:h-full w-full overflow-hidden [direction:ltr]">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                                    style={{ backgroundImage: `url('${room.img}')` }}
                                />
                                <div className="absolute inset-0 bg-green-950/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Content Side */}
                            <div className="[direction:ltr] p-10 md:p-14 flex flex-col justify-center bg-gradient-to-br from-green-950/80 to-green-950/40 backdrop-blur-md relative z-10">
                                <div className="mb-4">
                                    <h3 className="text-3xl font-serif text-white mb-2">{room.title}</h3>
                                    <div className="text-emerald-light font-sans tracking-wider text-xl">{room.price} <span className="text-sm text-text-muted">{t('per_night')}</span></div>
                                </div>
                                <p className="text-text-muted leading-relaxed mb-8 flex-grow">
                                    {room.desc}
                                </p>
                                <div>
                                    <a href="#booking" className="inline-block">
                                        <GlassButton variant="primary" className="px-6 py-3">{t('book_now')}</GlassButton>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </ScrollElement>
                ))}
            </section>

            {/* Booking Form Section */}
            <section className="px-6 lg:px-12 w-full pt-16 border-t border-white/5">
                <ScrollElement direction="up" delay={0.2}>
                    <BookingForm />
                </ScrollElement>
            </section>
        </main>
    );
}
