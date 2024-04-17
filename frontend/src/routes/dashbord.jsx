import ProfileAvatar from './profile';
import React from 'react';

const Dashboard = () => {
  const userName = "John Doe"; // Replace with actual user name
  const balance = 500.00; // Replace with actual balance
  const users = [{

    name:"Rahul"

  },{
    profilePic : "profile-icon-design-free-vector.jpg",
    name:"Ram"

  },{
    name:"deepak"

  }]; // Replace with actual list of users
  
  return (
    <div className=" min-h-screen">
      {/* Top bar */}
      <div className=" p-4 text-black flex justify-between items-center px-10">
        <div className='text-3xl font-semibold'>Payments App </div>
        {/* User profile section */}
        <div className="flex items-center">
          <div> Hello,{userName}</div>
          <ProfileAvatar name={userName} bgColor='bg-blue-500'></ProfileAvatar>
        </div>
      </div>
      <hr></hr>
      {/* Balance */}
      <div className="p-4 flex  gap-3 px-10">
        <h1 className="text-2xl font-bold">Your Balance</h1>
        <p className="text-2xl font-medium">${balance.toFixed(2)}</p>
      </div>
      
      {/* User list */}
      <div className="p-4 px-10 ">
        <h1 className="text-3xl font-bold">Users</h1>
        <input type="text" placeholder="Search Users..." className="border border-gray-400 rounded-s rounded-lg p-2 w-full mt-4 mb-4" />
        {/* User cards */}
        {users.map(user => (
          <div key={user.id} className="flex items-center justify-between border-gray-400 py-2">
            <div className="flex items-center">
            <ProfileAvatar name={user.name} bgColor='bg-blue-500'></ProfileAvatar>
              <div>
                <h2 className="text-xl  font-medium">{user.name}</h2>
                <p>{user.email}</p>
              </div>
            </div>
            <button className="bg-black font-medium text-white px-4 py-2 rounded">Send Money</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
