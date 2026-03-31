import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './button';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="relative w-9 h-9 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)] transition-colors duration-300"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
        </Button>
    );
}
