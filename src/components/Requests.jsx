import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestsSlice";
import ConnectionCard from "./ConnectionCard";

const Requests = () => {
  const requests = useSelector((store) => store.requests.requests);
  const dispatch = useDispatch();
  const getRequests = async () => {
    try {
      const res = await axios({
        method: "get",
        url: BASE_URL + "/user/requests/requested",
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  if (requests == null) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (requests.length == 0) {
    return (
      <div>
        <h1>No Requests</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto w-full px-4">
      <ul className="space-y-4">
        {requests.map((request) => (
          <ConnectionCard
            key={request._id}
            user={request.fromUserId}
            isRequests={true}
            requestId={request._id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Requests;
