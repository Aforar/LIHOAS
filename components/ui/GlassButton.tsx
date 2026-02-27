import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
}

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
    ({ children, className, variant = 'primary', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={clsx(
                    "group flex items-center justify-between gap-4 rounded-full px-6 py-3 font-sans text-sm font-medium tracking-wide transition-all duration-300",
                    variant === 'primary'
                        ? "bg-neon/10 text-neon hover:bg-neon hover:text-green-950 border border-neon/30 shadow-[0_0_20px_rgba(37,255,10,0.15)] hover:shadow-[0_0_30px_rgba(37,255,10,0.4)]"
                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10 backdrop-blur-md",
                    className
                )}
                {...props}
            >
                <span>{children}</span>
                <div className={clsx(
                    "flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1",
                    variant === 'primary' ? "bg-neon text-green-950 group-hover:bg-green-950 group-hover:text-neon" : "bg-white/10 text-white"
                )}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </button>
        );
    }
);
GlassButton.displayName = 'GlassButton';
