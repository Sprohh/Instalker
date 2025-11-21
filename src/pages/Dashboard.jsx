import { useState } from 'react';
import UserList from '../components/UserList';
import { useLanguage } from '../context/LanguageContext';

export default function Dashboard({ onLogout }) {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState('overview');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('myProfile'); // 'myProfile' or 'searchedProfile'

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            setViewMode('searchedProfile');
            setActiveTab('overview');
        }
    };

    const stats = [
        { label: t('dashboard.followers'), value: viewMode === 'myProfile' ? '12.5K' : '5.2K', change: '+12%', trend: 'up' },
        { label: t('dashboard.following'), value: viewMode === 'myProfile' ? '842' : '320', change: '+5%', trend: 'up' },
        { label: 'Engagement Rate', value: viewMode === 'myProfile' ? '4.8%' : '3.1%', change: '-2%', trend: 'down' },
        { label: 'Avg. Likes', value: viewMode === 'myProfile' ? '1.2K' : '450', change: '+8%', trend: 'up' },
    ];

    return (
        <div className="flex h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-black text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden relative">
            {/* Ambient Background Effects */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-ig-primary/10 dark:bg-ig-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-ig-secondary/10 dark:bg-ig-secondary/20 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 flex flex-col hidden md:flex">
                <div className="p-8">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-ig-gradient">
                        InstaTrack
                    </span>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    {[
                        { id: 'overview', label: t('dashboard.overview'), icon: '📊' },
                        { id: 'followers', label: t('dashboard.followers'), icon: '👥' },
                        { id: 'following', label: t('dashboard.following'), icon: 'user-check' },
                        { id: 'insights', label: t('dashboard.insights'), icon: '📈' },
                        { id: 'settings', label: t('dashboard.settings'), icon: '⚙️' },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${activeTab === item.id
                                ? 'bg-ig-primary/10 text-ig-primary font-bold'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'
                                }`}
                        >
                            <span>{item.icon}</span>
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                    <button
                        onClick={onLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-colors"
                    >
                        <span>🚪</span> {t('dashboard.logout')}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8">
                <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold mb-1">
                            {viewMode === 'myProfile' ? t('dashboard.welcome') : t('dashboard.search_results')}
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            {viewMode === 'myProfile' ? '@username' : `@${searchQuery}`}
                        </p>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        {viewMode === 'searchedProfile' && (
                            <button
                                onClick={() => {
                                    setViewMode('myProfile');
                                    setSearchQuery('');
                                }}
                                className="px-4 py-2 text-sm font-bold text-ig-primary hover:bg-ig-primary/10 rounded-lg transition-colors"
                            >
                                {t('dashboard.my_profile')}
                            </button>
                        )}
                        <form onSubmit={handleSearch} className="relative w-full md:w-64">
                            <input
                                type="text"
                                placeholder={t('dashboard.search_placeholder')}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full focus:outline-none focus:border-ig-primary transition-colors"
                            />
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                        </form>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-[2px]">
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                alt="Profile"
                                className="w-full h-full rounded-full bg-white dark:bg-black border-2 border-white dark:border-black"
                            />
                        </div>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                            <div className="flex items-end justify-between">
                                <h3 className="text-2xl font-bold">{stat.value}</h3>
                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.trend === 'up'
                                    ? 'bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400'
                                    : 'bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400'
                                    }`}>
                                    {stat.change}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Content Area */}
                <div className="min-h-[400px]">
                    {activeTab === 'overview' && (
                        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-8">
                            <h2 className="text-xl font-bold mb-4">{t('dashboard.account_overview')}</h2>
                            <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-white/5 rounded-xl border border-dashed border-gray-200 dark:border-gray-700">
                                <p className="text-gray-500 dark:text-gray-400">
                                    {t('dashboard.account_overview_desc')}
                                </p>
                            </div>
                        </div>
                    )}

                    {(activeTab === 'followers' || activeTab === 'following') && (
                        <UserList type={activeTab} />
                    )}

                    {['insights', 'settings'].includes(activeTab) && (
                        <div className="flex items-center justify-center h-96 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <div className="text-center">
                                <span className="text-4xl mb-4 block">🚧</span>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('dashboard.coming_soon')}</h3>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
