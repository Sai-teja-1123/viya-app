import React from 'react';

const DashboardPage: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Profile Views</h2>
        <p className="text-3xl font-bold text-blue-600">24</p>
        <p className="text-gray-600">This week</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">New Matches</h2>
        <p className="text-3xl font-bold text-green-600">8</p>
        <p className="text-gray-600">This week</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Messages</h2>
        <p className="text-3xl font-bold text-purple-600">12</p>
        <p className="text-gray-600">Unread</p>
      </div>
    </div>
  </div>
);

export default DashboardPage; 