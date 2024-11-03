import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeRequest } from "../utils/requestsSlice";

const ConnectionCard = ({ user, isRequests, requestId }) => {
  const {_id, firstName, lastName, age, gender, photo, about } = user;
  const dispatch = useDispatch();
  const acceptConnection = async (status) => {
    try {
      await axios({
        method: "post",
        url: BASE_URL + "/request/review/" + status + "/" + requestId,
        data: {
          userId: user._id,
        },
        withCredentials: true,
      });
        dispatch(removeRequest(requestId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden my-4">
      <div className="flex flex-col md:flex-row">
        {/* Image Container */}
        <div className="w-full md:w-48 h-48 flex-shrink-0">
          <img 
            src={photo} 
            alt={`${firstName} ${lastName}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="flex-1 p-6">
          <div className="flex flex-col md:flex-row justify-between">
            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {firstName} {lastName}
              </h2>
              
              <div className="flex gap-4 text-sm text-gray-600 mb-3">
                {age && (
                  <span className="flex items-center">
                    <span className="font-medium">Age:</span>
                    <span className="ml-1">{age}</span>
                  </span>
                )}
                {gender && (
                  <span className="flex items-center">
                    <span className="font-medium">Gender:</span>
                    <span className="ml-1">{gender}</span>
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 line-clamp-3">{about}</p>
            </div>

            {/* Action Buttons */}
            {isRequests && (
              <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-6">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => acceptConnection("accepted",)}>
                  Accept
                </button>
                <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                onClick={() => acceptConnection("rejected")}>
                  Reject
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard;
