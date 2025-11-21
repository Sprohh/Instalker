import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ThemeToggle() {
    const { language, setLanguage } = useLanguage();
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ||
                (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
            {/* Language Switcher */}
            <button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-110 transition-transform duration-300 font-bold text-sm text-ig-primary dark:text-white"
                aria-label="Switch Language"
            >
                {language.toUpperCase()}
            </button>

            {/* Theme Toggle */}
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-110 transition-transform duration-300 group"
                aria-label="Toggle Theme"
            >
                {darkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-400 group-hover:rotate-90 transition-transform duration-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-ig-primary group-hover:-rotate-90 transition-transform duration-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                )}
            </button>
        </div>
    );
}
