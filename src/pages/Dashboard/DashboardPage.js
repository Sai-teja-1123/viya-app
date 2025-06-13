// src/pages/DashboardPage.js
import React, { useState } from 'react';
import Button from '../components/Button.js';
import Modal from '../components/Modal.js';

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (title, message) => {
    setModalTitle(title);
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-xl rounded-lg mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">Welcome to your Viya Dashboard!</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here you'll find a quick overview of your profile and recent activity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Matches Found</h3>
          <p className="text-4xl font-bold text-indigo-900">125</p>
          <p className="text-sm text-gray-600 mt-2">New matches based on your preferences.</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Interests Sent</h3>
          <p className="text-4xl font-bold text-purple-900">18</p>
          <p className="text-sm text-gray-600 mt-2">Number of interests you've expressed.</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-green-700 mb-2">Profile Views</h3>
          <p className="text-4xl font-bold text-green-900">47</p>
          <p className="text-sm text-gray-600 mt-2">Times your profile has been viewed.</p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => openModal('Preferences', 'Navigating to update preferences...')}>Update Preferences</Button>
        </div>
      </div>
      <Modal
        title={modalTitle}
        message={modalMessage}
        isOpen={isModalOpen}
        onClose={closeModal}
        showConfirmButton={false}
      />
    </div>
  );
};

export default DashboardPage;
