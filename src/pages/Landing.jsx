import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';

export default function Landing({ onLoginClick }) {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-ig-background dark:bg-ig-dark-background text-ig-text dark:text-ig-dark-text transition-colors duration-300 overflow-x-hidden">
            <Navbar onLogin={onLoginClick} />

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden pt-24">
                {/* Background Gradients */}
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-ig-primary/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-ig-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

                <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
                        <span className="bg-clip-text text-transparent bg-ig-gradient drop-shadow-sm">
                            {t('landing.title_start')}
                        </span>
                        <br />
                        <span className="text-ig-text dark:text-white">
                            {t('landing.title_end')}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {t('landing.subtitle')}
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
                        <button
                            onClick={onLoginClick}
                            className="px-8 py-4 bg-ig-gradient text-white rounded-full font-bold text-lg shadow-lg shadow-ig-primary/30 hover:shadow-ig-primary/50 hover:scale-105 transition-all duration-300"
                        >
                            {t('landing.cta_primary')}
                        </button>
                        <button className="px-8 py-4 bg-white dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full font-bold text-lg hover:bg-gray-50 dark:hover:bg-white/20 transition-all duration-300">
                            {t('landing.cta_secondary')}
                        </button>
                    </div>
                </div>

                {/* Floating Elements Animation */}
                <div className="absolute top-1/4 left-10 w-16 h-16 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-2xl rotate-12 opacity-20 animate-bounce duration-[3000ms]"></div>
                <div className="absolute bottom-1/4 right-10 w-20 h-20 bg-gradient-to-bl from-purple-500 to-pink-500 rounded-full opacity-20 animate-bounce duration-[4000ms]"></div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 px-4 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        {t('landing.features_title')}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: t('landing.feature_1_title'), icon: '📊', desc: t('landing.feature_1_desc') },
                            { title: t('landing.feature_2_title'), icon: '👥', desc: t('landing.feature_2_desc') },
                            { title: t('landing.feature_3_title'), icon: '🚀', desc: t('landing.feature_3_desc') }
                        ].map((feature, idx) => (
                            <div key={idx} className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                <div className="text-5xl mb-6">{feature.icon}</div>
                                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
                        {t('landing.pricing_title')}
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-xl">
                        {t('landing.pricing_subtitle')}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {[
                            { name: t('landing.plan_starter'), price: 'Free', features: ['Basic Analytics', 'Daily Updates', '1 Account'] },
                            { name: t('landing.plan_pro'), price: '$9.99', features: ['Advanced Analytics', 'Hourly Updates', '5 Accounts', 'Export Data'], popular: true },
                            { name: t('landing.plan_business'), price: '$29.99', features: ['API Access', 'Real-time Updates', 'Unlimited Accounts', 'Priority Support'] }
                        ].map((plan, idx) => (
                            <div key={idx} className={`relative p-8 rounded-3xl transition-all duration-300 ${plan.popular ? 'bg-ig-gradient text-white scale-105 shadow-2xl shadow-ig-primary/40' : 'bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-ig-primary/50'}`}>
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                                        {t('landing.most_popular')}
                                    </div>
                                )}
                                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{plan.name}</h3>
                                <div className="text-4xl font-black mb-6">
                                    {plan.price}<span className="text-lg font-normal opacity-80">/mo</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feat, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <svg className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-ig-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            <span className={plan.popular ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'}>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${plan.popular ? 'bg-white text-ig-primary hover:bg-gray-100' : 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20'}`}>
                                    {t('landing.choose_plan')} {plan.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
