  import React from 'react';

  const ProfileAvatar = ({ name, bgColor }) => {
    // Extract the first letter of the name
    const initials = name ? name.charAt(0).toUpperCase() : '';

    return (
      <div className={`w-8 h-8 flex justify-center items-center rounded-full text-black ${bgColor}`}>
        <span className="text-white">{initials}</span>
      </div>
    );
  };

  export default ProfileAvatar;
