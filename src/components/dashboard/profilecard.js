// src/components/ProfileCard.js
import React from 'react';
import Button from './button.js'; // Import Button for use within ProfileCard

const ProfileCard = ({ profile, onViewProfile, viewMode }) => {
  const isListView = viewMode === 'list';
  const cardClasses = isListView
    ? "flex items-center bg-white rounded-xl shadow-lg p-4 mb-4 transition-transform transform hover:scale-[1.02] duration-300"
    : "bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300";

  return (
    <div className={cardClasses}>
      <img
        src={profile.photos[0]} // Display first photo
        alt={`${profile.name}'s profile`}
        className={`object-cover border-4 border-indigo-200 ${isListView ? 'w-20 h-20 mr-4 rounded-full' : 'w-28 h-28 rounded-full mb-4'}`}
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/9CA3AF/ffffff?text=N/A" }}
      />
      <div className={isListView ? 'flex-grow' : 'w-full'}>
        <h3 className={`font-bold text-gray-800 ${isListView ? 'text-lg text-left' : 'text-xl mb-2'}`}>{profile.name}</h3>
        <p className={`text-gray-600 ${isListView ? 'text-sm text-left' : 'mb-1'}`}>{profile.age} years old</p>
        <p className={`text-gray-600 ${isListView ? 'text-sm text-left' : 'mb-1'}`}>{profile.city}, {profile.state}</p>
        <p className={`text-gray-600 ${isListView ? 'text-sm text-left' : 'mb-1'}`}>{profile.education}</p>
        <p className={`text-gray-700 font-semibold text-sm ${isListView ? 'text-left' : 'mb-3'}`}>{profile.job}</p>
        <p className={`text-gray-500 text-sm italic ${isListView ? 'text-left line-clamp-2' : 'line-clamp-3'}`}>{profile.bio}</p>
        <Button className="mt-4 w-full" onClick={() => onViewProfile(profile)}>View Profile</Button>
      </div>
    </div>
  );
};

export default ProfileCard;
