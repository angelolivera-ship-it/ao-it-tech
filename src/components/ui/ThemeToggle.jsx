import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle({ light = false }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const isDark = theme === 'dark';

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors duration-300 border ${light
                    ? 'border-white/15 text-white/60 hover:text-white hover:border-white/30'
                    : 'border-[#0A1128]/10 text-[#0A1128]/45 hover:text-[#0A1128]/75 hover:border-[#0A1128]/20'
                }`}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            {isDark ? (
                <>
                    <Sun className="w-3.5 h-3.5" />
                    <span>Light Mode</span>
                </>
            ) : (
                <>
                    <Moon className="w-3.5 h-3.5" />
                    <span>Dark Mode</span>
                </>
            )}
        </button>
    );
}
