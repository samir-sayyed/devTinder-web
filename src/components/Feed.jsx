import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import { useSelector, useDispatch } from "react-redux";
import UserCard from "./UserCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Feed = () => {
    const feed = useSelector((store) => store.feed);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const getFeed = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await axios({
          method: "get",
          url: BASE_URL + "/user/feed",
          withCredentials: true,
        });
        dispatch(addFeed(res.data.data));
      } catch (err) {
        if (err.response?.status === 401) {
          navigate("/login");
        } else {
          setError("Failed to load feed. Please try again later.");
        }
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      getFeed();
    }, []);
  
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading potential matches...</p>
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <div className="text-red-500 mb-4 text-2xl">⚠️</div>
          <p className="text-gray-700">{error}</p>
          <button 
            onClick={getFeed}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      );
    }
  
    if (!feed.feed?.length) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <p className="text-gray-600">No more profiles to show right now.</p>
          <button 
            onClick={getFeed}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Refresh
          </button>
        </div>
      );
    }
  
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <UserCard user={feed.feed[0]} />
      </div>
    );
  };

export default Feed;