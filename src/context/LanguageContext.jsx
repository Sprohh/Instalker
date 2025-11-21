import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
    en: {
        landing: {
            title_start: 'Control Your',
            title_end: 'Social Circle',
            subtitle: 'See exactly what they are doing. Monitor followers, track secret interactions, and keep an eye on your partner\'s activity with our advanced stalking tools.',
            cta_primary: 'Start Tracking Now',
            cta_secondary: 'View Demo',
            features_title: 'Why You Need This',
            pricing_title: 'Control Plans',
            pricing_subtitle: 'Choose how deep you want to dig.',
            feature_1_title: 'Secret Monitoring',
            feature_1_desc: 'Get notified instantly when they follow someone new.',
            feature_2_title: 'Activity Insights',
            feature_2_desc: 'See who they are interacting with the most.',
            feature_3_title: 'Relationship Tracking',
            feature_3_desc: 'Visualize their social circle changes over time.',
            plan_starter: 'Curious',
            plan_pro: 'Suspicious',
            plan_business: 'Obsessed',
            most_popular: 'Best Value',
            choose_plan: 'Select',
            login: 'Login',
            login_instagram: 'Login with Instagram',
        },
        dashboard: {
            overview: 'Surveillance',
            followers: 'Targets',
            following: 'Their Circle',
            insights: 'Activity Logs',
            settings: 'Settings',
            logout: 'Log Out',
            welcome: 'Ready to track?',
            account_overview: 'Target Status',
            account_overview_desc: "Target is active. They have followed 5 new people today.",
            coming_soon: 'Feature coming soon...',
            search_placeholder: 'Search Target...',
            my_profile: 'My Profile',
            search_results: 'Target Profile',
            follow: 'Track',
            following_btn: 'Tracking',
            followers_list: 'Who follows them',
            following_list: 'Who they follow',
            add_note: 'Add Note',
            save_note: 'Save Note',
            note_placeholder: 'Add a comment about this person...',
        },
        login_page: {
            title: 'Access Control Panel',
            subtitle: 'Login to start monitoring your targets.',
            login_button: 'Login with Instagram',
            back_home: 'Back to Safety',
            terms: 'By logging in, you agree to our Surveillance Terms.',
        }
    },
    es: {
        landing: {
            title_start: 'Controla su',
            title_end: 'Círculo Social',
            subtitle: 'Mira exactamente lo que están haciendo. Monitorea seguidores, rastrea interacciones secretas y vigila la actividad de tu pareja con nuestras herramientas avanzadas de stalking.',
            cta_primary: 'Empezar a Rastrear',
            cta_secondary: 'Ver Demo',
            features_title: '¿Por qué necesitas esto?',
            pricing_title: 'Planes de Control',
            pricing_subtitle: 'Elige qué tan profundo quieres investigar.',
            feature_1_title: 'Monitoreo Secreto',
            feature_1_desc: 'Recibe notificaciones al instante cuando sigan a alguien nuevo.',
            feature_2_title: 'Insights de Actividad',
            feature_2_desc: 'Mira con quién interactúan más.',
            feature_3_title: 'Rastreo de Relaciones',
            feature_3_desc: 'Visualiza los cambios en su círculo social con el tiempo.',
            plan_starter: 'Curioso',
            plan_pro: 'Sospechoso',
            plan_business: 'Obsesionado',
            most_popular: 'Mejor Valor',
            choose_plan: 'Seleccionar',
            login: 'Iniciar Sesión',
            login_instagram: 'Iniciar con Instagram',
        },
        dashboard: {
            overview: 'Vigilancia',
            followers: 'Objetivos',
            following: 'Su Círculo',
            insights: 'Registros',
            settings: 'Configuración',
            logout: 'Cerrar Sesión',
            welcome: '¿Listo para rastrear?',
            account_overview: 'Estado del Objetivo',
            account_overview_desc: "El objetivo está activo. Han seguido a 5 personas nuevas hoy.",
            coming_soon: 'Próximamente...',
            search_placeholder: 'Buscar Objetivo...',
            my_profile: 'Mi Perfil',
            search_results: 'Perfil del Objetivo',
            follow: 'Rastrear',
            following_btn: 'Rastreando',
            followers_list: 'Quién los sigue',
            following_list: 'A quién siguen',
            add_note: 'Agregar Nota',
            save_note: 'Guardar Nota',
            note_placeholder: 'Agrega un comentario sobre esta persona...',
        },
        login_page: {
            title: 'Acceso al Panel',
            subtitle: 'Inicia sesión para comenzar a monitorear a tus objetivos.',
            login_button: 'Iniciar con Instagram',
            back_home: 'Volver a Seguridad',
            terms: 'Al iniciar sesión, aceptas nuestros Términos de Vigilancia.',
        }
    }
};

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('es');

    const t = (path) => {
        const keys = path.split('.');
        let value = translations[language];
        for (const key of keys) {
            value = value?.[key];
        }
        return value || path;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
