const ProfileAvatar = ({ name, bgColor }) => {
    // Extract the first letter of the name
    // eslint-disable-next-line react/prop-types
    const initials = name ? name.charAt(0).toUpperCase() : '';

    return (
      <div
        className={`w-8 h-8 flex justify-center items-center rounded-full text-black ${bgColor}`}
        style={{ marginRight: '25px' }}
      >
        <span className="text-white">{initials}</span>
      </div>
    );
  };

  export default ProfileAvatar;
