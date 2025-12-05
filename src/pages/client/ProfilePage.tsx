import React, { useState } from 'react';
import { clientProfile } from '../../data/client/dummyData';

const ClientProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(clientProfile);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate saving profile
    setTimeout(() => {
      setIsSaving(false);
      setIsEditing(false);
      setSaveSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="profile-page">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
        <p className="text-gray-600 mt-1">Manage your personal information and account settings</p>
      </div>

      {saveSuccess && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
          Profile updated successfully!
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="card p-6 lg:col-span-1">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold mb-4">
              {profileData.name.charAt(0)}
            </div>
            <h2 className="text-xl font-bold text-gray-900">{profileData.name}</h2>
            <p className="text-gray-600 mt-1">{profileData.email}</p>
            <div className="mt-4 flex space-x-2">
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="btn btn-primary"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Member Since</p>
                <p className="font-medium">{profileData.joinDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Orders</p>
                <p className="font-medium">{profileData.totalOrders}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Loyalty Points</p>
                <p className="font-medium">{profileData.loyaltyPoints} pts</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Profile Details */}
        <div className="card p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h2>
          
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={profileData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={profileData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="btn btn-primary"
                >
                  {isSaving ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </span>
                  ) : (
                    'Save Changes'
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-medium">{profileData.name}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="font-medium">{profileData.email}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="font-medium">{profileData.phone}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium">{profileData.address}</p>
              </div>
            </div>
          )}
          
          {/* Saved Addresses */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Saved Addresses</h2>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Add New Address
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">Home</h3>
                    <p className="text-gray-600 mt-1">123 Main Street, Paris, France</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800 text-sm">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">Office</h3>
                    <p className="text-gray-600 mt-1">456 Business Ave, Lyon, France</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800 text-sm">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Security Settings */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Security</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">Password</h3>
                  <p className="text-gray-600 text-sm">Last updated 3 months ago</p>
                </div>
                <button className="btn btn-secondary">
                  Change Password
                </button>
              </div>
              
              <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">Two-Factor Authentication</h3>
                  <p className="text-gray-600 text-sm">Add an extra layer of security</p>
                </div>
                <button className="btn btn-secondary">
                  Enable
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfilePage;