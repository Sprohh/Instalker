import { useLanguage } from '../context/LanguageContext';

export default function Login({ onLogin, onBack }) {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen flex items-center justify-center bg-ig-background dark:bg-ig-dark-background text-ig-text dark:text-ig-dark-text transition-colors duration-300 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-ig-primary/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-ig-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

            <div className="relative z-10 w-full max-w-md p-8">
                <div className="bg-white/80 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl p-8 text-center">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-ig-gradient mb-2">
                            InstaTrack
                        </h1>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {t('login_page.title')}
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            {t('login_page.subtitle')}
                        </p>
                    </div>

                    <button
                        onClick={onLogin}
                        className="w-full py-4 bg-ig-gradient text-white rounded-xl font-bold text-lg shadow-lg shadow-ig-primary/30 hover:shadow-ig-primary/50 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 group"
                    >
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        {t('login_page.login_button')}
                    </button>

                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
                        <button
                            onClick={onBack}
                            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-ig-primary dark:hover:text-white transition-colors"
                        >
                            ← {t('login_page.back_home')}
                        </button>
                    </div>

                    <p className="mt-6 text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
                        {t('login_page.terms')}
                    </p>
                </div>
            </div>
        </div>
    );
}
