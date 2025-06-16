import React, { useState } from 'react';
import './App.css';
import IntroProfileApp from './pages/intro+profile/intro_profile';
import Navbar from './components/dashboard/navbar';
import Footer from './components/dashboard/footer';
import DashboardPage from './pages/Dashboard/DashboardPage';
import MatchListPage from './pages/Dashboard/MatchListPage';
import EditProfilePage from './pages/Dashboard/EditProfilePage';
import SettingsPage from './pages/Dashboard/SettingsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('intro');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('intro');
    setShowProfile(false);
  };

  // If not logged in, show intro/login page or profile page
  if (!isLoggedIn) {
    return <IntroProfileApp onProfileComplete={handleLoginSuccess} />;
  }

  // If logged in, show the main app with navigation
  return (
    <div className="min-h-screen flex flex-col font-sans bg-amber-50 antialiased">
      <Navbar onNavigate={setCurrentPage} onLogout={handleLogout} />

      <main className="flex-grow pb-8">
        {currentPage === 'dashboard' && <DashboardPage />}
        {currentPage === 'edit-profile' && <EditProfilePage />}
        {currentPage === 'match-list' && <MatchListPage />}
        {currentPage === 'settings' && <SettingsPage />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
