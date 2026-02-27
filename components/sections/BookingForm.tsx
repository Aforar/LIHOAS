"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { GlassButton } from '../ui/GlassButton';

export const BookingForm = () => {
    const t = useTranslations('Booking');

    const [formData, setFormData] = useState({
        checkIn: '',
        checkOut: '',
        guests: '1',
        fullName: '',
        email: '',
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let newErrors: { [key: string]: string } = {};

        if (!formData.checkIn) newErrors.checkIn = t('err_in');
        if (!formData.checkOut) newErrors.checkOut = t('err_out');
        if (formData.checkIn && formData.checkOut) {
            if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
                newErrors.checkOut = t('err_out_before_in');
            }
        }
        if (!formData.fullName) newErrors.fullName = t('err_name');
        if (!formData.email) {
            newErrors.email = t('err_email');
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t('err_email_invalid');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setSuccess(true);
            // Backend integration here
        }
    };

    return (
        <div id="booking" className="w-full max-w-2xl mx-auto bg-green-950/40 p-8 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none"></div>

            {success ? (
                <div className="text-center py-16 relative z-10">
                    <div className="text-neon mb-4">
                        <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-3xl font-serif text-white mb-2">{t('success_title')}</h3>
                    <p className="text-text-muted">{t('success_desc', { name: formData.fullName })}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                    <div className="text-center mb-6">
                        <h3 className="text-3xl font-serif text-white">{t('title')}</h3>
                        <p className="text-text-muted text-sm mt-2">{t('subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs uppercase tracking-widest text-text-muted font-sans">{t('check_in')}</label>
                            <input
                                type="date"
                                name="checkIn"
                                value={formData.checkIn}
                                onChange={handleChange}
                                className="bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/50 transition-all [color-scheme:dark]"
                            />
                            {errors.checkIn && <span className="text-red-400 text-xs">{errors.checkIn}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs uppercase tracking-widest text-text-muted font-sans">{t('check_out')}</label>
                            <input
                                type="date"
                                name="checkOut"
                                value={formData.checkOut}
                                onChange={handleChange}
                                className="bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/50 transition-all [color-scheme:dark]"
                            />
                            {errors.checkOut && <span className="text-red-400 text-xs">{errors.checkOut}</span>}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-text-muted font-sans">{t('guests')}</label>
                        <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            className="bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/50 transition-all appearance-none"
                        >
                            {[1, 2, 3, 4, 5].map(num => (
                                <option key={num} value={num} className="bg-green-950 text-white">{num} {num === 1 ? t('guest_single') : t('guests')}</option>
                            ))}
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs uppercase tracking-widest text-text-muted font-sans">{t('full_name')}</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder={t('placeholder_name')}
                                className="bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/50 transition-all placeholder:text-white/20"
                            />
                            {errors.fullName && <span className="text-red-400 text-xs">{errors.fullName}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs uppercase tracking-widest text-text-muted font-sans">{t('email')}</label>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={t('placeholder_email')}
                                className="bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/50 transition-all placeholder:text-white/20"
                            />
                            {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
                        </div>
                    </div>

                    <GlassButton type="submit" variant="primary" className="w-full mt-4 justify-center">
                        {t('submit')}
                    </GlassButton>
                </form>
            )}
        </div>
    );
};
