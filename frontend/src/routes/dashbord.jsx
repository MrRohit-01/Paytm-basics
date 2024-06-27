import axios from 'axios';
import ProfileAvatar from './profile';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [userData,setUserData] = useState([]);
  const [balance,setBalance] = useState([]);
  const [users,setUsers]= useState([])
  const navigate = useNavigate()
 useEffect(() => {
  const fetchData = async () => {
    try {
      const responseUser = await axios.get("http://localhost:3000/api/v1/user/me", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      setUserData(responseUser.data.userDetails);

      const responseBalance = await axios.get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      setBalance(responseBalance.data);

      const responseUsers = await axios.get("http://localhost:3000/api/v1/user/bulk", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      setUsers(responseUsers.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  fetchData();
}, []);
const filteredUsers = users.filter(user => user.id !== userData.id);
  return (
    <div className=" min-h-screen">
      {/* Top bar */}
      <div className=" p-4 text-black flex justify-between items-center px-10">
        <div className='text-3xl font-semibold'>Payments App </div>
        {/* User profile section */}
        <div className="flex items-center">
          <div className='pr-2'> Hello, {userData.firstName} </div>
          <ProfileAvatar name={userData.firstName} bgColor='bg-blue-500'></ProfileAvatar>
        </div>
      </div>
      <hr></hr>
      {/* Balance */}
      <div className="p-4 flex  gap-3 px-10">
        <h1 className="text-2xl font-bold">Your Balance</h1>
        <p className="text-2xl font-medium">${(balance.balance)}</p>
      </div>
      
    
      <div className="p-4 px-10 ">
        <h1 className="text-3xl font-bold">Users</h1>
        <input type="text" placeholder="Search Users..." className="border border-gray-400 rounded-s rounded-lg p-2 w-full mt-4 mb-4" />
       
        {filteredUsers.map((user)=>{
          return (<> <div key={user.id} className="flex items-center max-sm:flex-col max-sm:border rounded-xl  mb-2 justify-between border-gray-400 py-2">
            <div className="flex items-center">
            <ProfileAvatar name={user.firstName} bgColor='bg-blue-500'></ProfileAvatar>
              <div>
                <h2 className="text-xl pl-2 font-medium">{user.firstName}</h2>
                <p className='pl-2'>{user.email}</p>
              </div>
            </div>
            <button  onClick={()=>{
              navigate("/transfer?to="+user.id+"&name="+user.firstName)
            }} className="bg-black font-medium text-white px-4 my-4 py-2 rounded">Send Money</button>
          </div></>)
        })}
      </div>
    </div>
  );
 
};

export default Dashboard;
