// src/pages/MatchListPage.js
import React, { useState, useEffect } from 'react';
import Button from '../../components/dashboard/button.js';
import ProfileCard from '../../components/dashboard/profilecard.js';
import ProfileDetailsModal from '../../components/dashboard/ProfileDetailsModal.js';
import Filters from '../../components/dashboard/Filters.js';
import { mockProfiles } from '../../data/mockdata.js'; // Fixed path

const MatchListPage = () => {
  const [filters, setFilters] = useState({
    age: '',
    state: '',
    city: '',
    education: '',
  });
  const [filteredProfiles, setFilteredProfiles] = useState(mockProfiles);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const applyFilters = () => {
    let newFilteredProfiles = mockProfiles;

    if (filters.age) {
      newFilteredProfiles = newFilteredProfiles.filter((profile) => {
        const [minAge, maxAge] = filters.age.split('-').map(Number);
        if (filters.age === '36+') {
          return profile.age >= 36;
        }
        return profile.age >= minAge && profile.age <= maxAge;
      });
    }

    if (filters.state) {
      newFilteredProfiles = newFilteredProfiles.filter(
        (profile) => profile.state === filters.state
      );
    }

    if (filters.city) {
      newFilteredProfiles = newFilteredProfiles.filter(
        (profile) => profile.city === filters.city
      );
    }

    if (filters.education) {
      newFilteredProfiles = newFilteredProfiles.filter(
        (profile) => profile.education === filters.education
      );
    }

    setFilteredProfiles(newFilteredProfiles);
  };

  const handleViewProfile = (profile) => {
    setSelectedProfile(profile);
    setIsProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
    setSelectedProfile(null);
  };

  useEffect(() => {
    applyFilters(); // Apply filters on initial load and whenever filters change
  }, [filters]); // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div className="container mx-auto p-6 mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Discover Your Matches</h2>
      <Filters
        filters={filters}
        onFilterChange={handleFilterChange}
        onApplyFilters={applyFilters}
      />

      {/* View Mode Toggle */}
      <div className="flex justify-center mb-6 space-x-4">
        <Button
          variant={viewMode === 'grid' ? 'primary' : 'outline'}
          onClick={() => setViewMode('grid')}
        >
          Grid View
        </Button>
        <Button
          variant={viewMode === 'list' ? 'primary' : 'outline'}
          onClick={() => setViewMode('list')}
        >
          List View
        </Button>
      </div>


      {filteredProfiles.length > 0 ? (
        <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "flex flex-col gap-4"}>
          {filteredProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} onViewProfile={handleViewProfile} viewMode={viewMode} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 p-10 bg-white rounded-lg shadow-md">
          <p className="text-lg font-medium">No matches found with the current filters.</p>
          <p className="text-sm mt-2">Try adjusting your filter selections.</p>
        </div>
      )}

      <ProfileDetailsModal
        profile={selectedProfile}
        isOpen={isProfileModalOpen}
        onClose={closeProfileModal}
      />
    </div>
  );
};

export default MatchListPage;
