import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onLogin }) {
    const { t } = useLanguage();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-ig-gradient">
                            InstaTrack
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <button
                                onClick={() => scrollToSection('features')}
                                className="text-gray-600 dark:text-gray-300 hover:text-ig-primary dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                {t('landing.features_title')}
                            </button>
                            <button
                                onClick={() => scrollToSection('pricing')}
                                className="text-gray-600 dark:text-gray-300 hover:text-ig-primary dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                {t('landing.pricing_title')}
                            </button>
                        </div>
                    </div>

                    {/* Login Button */}
                    <div>
                        <button
                            onClick={onLogin}
                            className="bg-ig-primary text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg shadow-ig-primary/30 hover:bg-ig-secondary hover:scale-105 transition-all duration-300"
                        >
                            {t('landing.login')}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
