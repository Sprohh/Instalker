import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import NoteModal from './NoteModal';

export default function UserList({ type }) {
    const { t } = useLanguage();
    const [selectedUser, setSelectedUser] = useState(null);
    const [notes, setNotes] = useState({}); // Store notes by user ID

    // Mock data generator with dates
    const users = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        username: `user_${i + 1}`,
        fullName: `User Name ${i + 1}`,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
        isFollowing: Math.random() > 0.5,
        followedDate: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(), // Random date
    })).sort((a, b) => new Date(b.followedDate) - new Date(a.followedDate)); // Sort Newest to Oldest

    const handleSaveNote = (note) => {
        if (selectedUser) {
            setNotes(prev => ({ ...prev, [selectedUser.id]: note }));
        }
    };

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <h3 className="text-xl font-bold capitalize">
                    {type === 'followers' ? t('dashboard.followers_list') : t('dashboard.following_list')}
                </h3>
                <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-gray-500 dark:text-gray-400">
                    Newest First
                </span>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {users.map((user) => (
                    <div key={user.id} className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                        <div className="flex items-center gap-4">
                            <img
                                src={user.avatar}
                                alt={user.username}
                                className="w-12 h-12 rounded-full bg-gray-200"
                            />
                            <div>
                                <p className="font-bold text-gray-900 dark:text-white">{user.username}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{user.fullName}</p>
                                <p className="text-xs text-gray-400 mt-1">
                                    {new Date(user.followedDate).toLocaleDateString()}
                                </p>
                                {notes[user.id] && (
                                    <p className="mt-2 text-xs text-ig-primary italic bg-ig-primary/5 p-1 rounded">
                                        📝 {notes[user.id]}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                            <button
                                className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all w-32 ${user.isFollowing
                                    ? 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10'
                                    : 'bg-ig-primary text-white shadow-lg shadow-ig-primary/30'
                                    }`}
                            >
                                {user.isFollowing ? t('dashboard.following_btn') : t('dashboard.follow')}
                            </button>
                            <button
                                onClick={() => setSelectedUser(user)}
                                className="text-xs text-gray-400 hover:text-ig-primary transition-colors flex items-center gap-1 opacity-0 group-hover:opacity-100"
                            >
                                ✏️ {t('dashboard.add_note')}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <NoteModal
                isOpen={!!selectedUser}
                onClose={() => setSelectedUser(null)}
                onSave={handleSaveNote}
                initialNote={selectedUser ? notes[selectedUser.id] : ''}
                userName={selectedUser?.username}
            />
        </div>
    );
}
