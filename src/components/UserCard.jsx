const UserCard = ({ user, hideButtons }) => {
  if (!user) return null;

  const { firstName, lastName, age, gender, photo, about } = user;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-l">
      {/* Photo Section - Reduced height */}
      <div className="relative aspect-[3/2] bg-gray-100">
        <img 
          src={photo || '/api/placeholder/300/200'} 
          alt={`${firstName} ${lastName}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section - Reduced padding */}
      <div className="p-4">
        {/* Header - Smaller text and spacing */}
        <div className="mb-2">
          <h2 className="text-xl font-semibold text-gray-900">
            {firstName} {lastName}
          </h2>
          <div className="flex gap-3 mt-1">
            {age && (
              <span className="text-sm text-gray-600">
                <span className="font-medium">Age:</span> {age}
              </span>
            )}
            {gender && (
              <span className="text-sm text-gray-600">
                <span className="font-medium">Gender:</span> {gender}
              </span>
            )}
          </div>
        </div>

        {/* About Section - Limited lines */}
        {about && (
          <div className="mb-4">
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{about}</p>
          </div>
        )}

        {/* Action Buttons - Smaller buttons */}
        {!hideButtons && (
          <div className="flex gap-2 justify-end">
            <button 
              className="px-4 py-1.5 text-sm rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              Pass
            </button>
            <button 
              className="px-4 py-1.5 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              Interested
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;  
