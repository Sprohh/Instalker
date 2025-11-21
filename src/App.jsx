import { useState } from 'react';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ThemeToggle from './components/ThemeToggle';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  // currentView: 'landing' | 'login' | 'dashboard'
  const [currentView, setCurrentView] = useState('landing');

  const handleLogin = () => {
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setCurrentView('landing');
  };

  return (
    <LanguageProvider>
      <ThemeToggle />
      {currentView === 'dashboard' && <Dashboard onLogout={handleLogout} />}
      {currentView === 'login' && <Login onLogin={handleLogin} onBack={() => setCurrentView('landing')} />}
      {currentView === 'landing' && <Landing onLoginClick={() => setCurrentView('login')} />}
    </LanguageProvider>
  );
}

export default App;
