import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function NoteModal({ isOpen, onClose, onSave, initialNote, userName }) {
    const { t } = useLanguage();
    const [note, setNote] = useState(initialNote || '');

    useEffect(() => {
        setNote(initialNote || '');
    }, [initialNote, isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-md p-6 shadow-2xl border border-gray-100 dark:border-white/10 scale-100 animate-in zoom-in-95 duration-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {t('dashboard.add_note')} - <span className="text-ig-primary">@{userName}</span>
                </h3>

                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder={t('dashboard.note_placeholder')}
                    className="w-full h-32 p-4 rounded-xl bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:border-ig-primary focus:ring-1 focus:ring-ig-primary outline-none resize-none mb-6 text-gray-900 dark:text-white placeholder-gray-400"
                    autoFocus
                />

                <div className="flex gap-3 justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg font-medium text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            onSave(note);
                            onClose();
                        }}
                        className="px-6 py-2 rounded-lg font-bold bg-ig-gradient text-white shadow-lg shadow-ig-primary/20 hover:shadow-ig-primary/40 hover:scale-105 transition-all duration-200"
                    >
                        {t('dashboard.save_note')}
                    </button>
                </div>
            </div>
        </div>
    );
}
