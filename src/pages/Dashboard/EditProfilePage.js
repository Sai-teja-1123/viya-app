// src/pages/EditProfilePage.js
import React, { useState } from 'react';
import Button from '../../components/dashboard/button.js'; // Fixed path
import Modal from '../../components/dashboard/modal.js';   // Fixed path
import { indianStates, indianCities } from '../../data/mockdata.js'; // Fixed path

const EditProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: 'Your Name',
    age: 25,
    city: 'Hyderabad',
    state: 'Telangana',
    education: 'B.Tech',
    job: 'Software Developer',
    bio: 'Write something about yourself...',
    photoUrl: 'https://placehold.co/150x150/A0A0A0/ffffff?text=Upload+Photo',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [showConfirmButton, setShowConfirmButton] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prevData) => ({ ...prevData, photoUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this data to a backend
    console.log('Profile Updated:', profileData);
    setModalTitle('Profile Updated');
    setModalMessage('Your profile has been successfully updated!');
    setShowConfirmButton(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-xl rounded-lg mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">Edit Your Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col items-center space-y-4 mb-6">
          <img
            src={profileData.photoUrl}
            alt="Profile Preview"
            className="w-32 h-32 rounded-full object-cover border-4 border-purple-300 shadow-md"
          />
          <label htmlFor="photo-upload" className="cursor-pointer">
            <Button variant="secondary" type="button" className="text-sm">
              Upload New Photo
            </Button>
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />
          </label>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={profileData.age}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            min="18"
            max="100"
            required
          />
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
          <select
            id="state"
            name="state"
            value={profileData.state}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select State</option>
            {indianStates.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <select
            id="city"
            name="city"
            value={profileData.city}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select City</option>
            {indianCities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">Education</label>
          <input
            type="text"
            id="education"
            name="education"
            value={profileData.education}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="job" className="block text-sm font-medium text-gray-700 mb-1">Job</label>
          <input
            type="text"
            id="job"
            name="job"
            value={profileData.job}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={profileData.bio}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          ></textarea>
        </div>

        <div className="flex justify-end">
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
      <Modal
        title={modalTitle}
        message={modalMessage}
        isOpen={isModalOpen}
        onClose={closeModal}
        showConfirmButton={showConfirmButton}
      />
    </div>
  );
};

export default EditProfilePage;
