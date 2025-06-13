// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar.js'; // Added .js extension
import Footer from './components/Footer.js'; // Added .js extension
import DashboardPage from './pages/DashboardPage.js'; // Added .js extension
import MatchListPage from './pages/MatchListPage.js'; // Added .js extension
import EditProfilePage from './pages/EditProfilePage.js'; // Added .js extension
import SettingsPage from './pages/SettingsPage.js'; // Added .js extension

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="min-h-screen flex flex-col font-sans bg-amber-50 antialiased">
      <Navbar onNavigate={setCurrentPage} />

      <main className="flex-grow pb-8">
        {currentPage === 'dashboard' && <DashboardPage />}
        {currentPage === 'match-list' && <MatchListPage />}
        {currentPage === 'edit-profile' && <EditProfilePage />}
        {currentPage === 'settings' && <SettingsPage />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
