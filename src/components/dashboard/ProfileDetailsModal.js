// src/components/ProfileDetailsModal.js
import React, { useState } from 'react';
import Button from './button.js'; // Import Button for use within Modal
import Modal from './modal.js'; // Import Modal for the nested confirmation

const ProfileDetailsModal = ({ profile, isOpen, onClose }) => {
  const [showMorePhotos, setShowMorePhotos] = useState(false);
  const [isInterestedModalOpen, setIsInterestedModalOpen] = useState(false);

  if (!isOpen || !profile) return null;

  const handleInterestedClick = () => {
    setIsInterestedModalOpen(true);
  };

  const confirmInterested = () => {
    // In a real app, send interest to backend
    console.log(`Expressed interest in ${profile.name}`);
    setIsInterestedModalOpen(false);
    onClose(); // Close main profile modal after expressing interest
    // Optionally, show a success message here too
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={profile.photos[0]}
            alt={`${profile.name}'s profile`}
            className="w-40 h-40 rounded-full object-cover border-4 border-purple-300 shadow-md"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/9CA3AF/ffffff?text=N/A" }}
          />
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">{profile.name}</h3>
            <p className="text-lg text-gray-700 mb-1">{profile.age} years old</p>
            <p className="text-lg text-gray-700 mb-1">{profile.city}, {profile.state}</p>
            <p className="text-lg text-gray-700 mb-1">{profile.education}</p>
            <p className="text-xl font-semibold text-indigo-700 mb-3">{profile.job}</p>
          </div>
        </div>

        <div className="mt-6 border-t pt-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-3">About Me</h4>
          <p className="text-gray-600 leading-relaxed">{profile.bio}</p>
        </div>

        <div className="mt-6 border-t pt-6">
          <Button variant="outline" onClick={() => setShowMorePhotos(!showMorePhotos)} className="mb-4">
            {showMorePhotos ? 'Hide Photos' : 'View More Photos'}
          </Button>

          {showMorePhotos && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
              {profile.photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`${profile.name} ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg shadow-sm"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/9CA3AF/ffffff?text=N/A" }}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-end">
          <Button onClick={handleInterestedClick}>I'm Interested!</Button>
        </div>

        {/* Interested Confirmation Modal */}
        <Modal
          title="Express Interest"
          message={`Are you sure you want to express interest in ${profile.name}?`}
          isOpen={isInterestedModalOpen}
          onClose={() => setIsInterestedModalOpen(false)}
          onConfirm={confirmInterested}
          showConfirmButton={true}
        />
      </div>
    </div>
  );
};

export default ProfileDetailsModal;
