// import React from "react";

//  const Dashboard = ({ userName, balance, Users }) => {
//   return (
//     <div className="p-4">
//       {/* Top left section */}
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           <h1 className="text-2xl font-bold">Hello, {userName}</h1>
//           <p className="text-gray-600">User Profile</p>
//         </div>
//         <div>
//           <p className="text-xl font-semibold">${balance}</p>
//           <p className="text-gray-600">Your Balance</p>
//         </div>
//       </div>

//       <div className="mb-4">
//         <h2 className="text-xl font-bold mb-2">Users</h2>
//         <ul>
//           {Users && Users.length > 0 ? (
//             Users.map((user) => (
//               <li key={user.id} className="flex items-center justify-between mb-2">
//                 <div className="flex items-center">
//                   <img src={user.profilePic} alt={user.name} className="w-8 h-8 rounded-full mr-2" />
//                   <p>{user.name}</p>
//                 </div>
//                 <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Send Money</button>
//               </li>
//             ))
//           ) : (
//             <p>No users found</p>
//           )}
//         </ul>
//       </div>

//       {/* Search for all accounts */}
//       <div>
//         <input
//           type="text"
//           placeholder="Search for all accounts"
//           className="w-full px-4 py-2 border border-gray-300 rounded"
//         />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React from 'react';

const Dashboard = () => {
  const userName = "John Doe"; // Replace with actual user name
  const balance = 500.00; // Replace with actual balance
  const users = [{
    profilePic : "https://www.google.com/imgres?q=profile&imgurl=https%3A%2F%2Fstatic-00.iconduck.com%2Fassets.00%2Fprofile-circle-icon-2048x2048-cqe5466q.png&imgrefurl=https%3A%2F%2Ficonduck.com%2Ficons%2F180867%2Fprofile-circle&docid=8qCF3TmdBFRLtM&tbnid=rtdN3XGJIJyzHM&vet=12ahUKEwix1rKAicWFAxVwzjgGHZxtA6YQM3oECDcQAA..i&w=2048&h=2048&hcb=2&ved=2ahUKEwix1rKAicWFAxVwzjgGHZxtA6YQM3oECDcQAA",
    name:"Rahul"

  },{
    profilePic : "profile-icon-design-free-vector.jpg",
    name:"Ram"

  },{
    profilePic : "profile-icon-design-free-vector.jpg",
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
          <img src="user_profile_image.jpg" alt="User Profile" className="w-8 h-8 rounded-full ml-2" />
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
              <img src={user.profileImage} alt={user.name} className="w-12 h-12 rounded-full mr-4" />
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
