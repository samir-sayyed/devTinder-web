import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import { useSelector, useDispatch } from "react-redux";
import UserCard from "./UserCard";

const Feed = () => {

    const feed = useSelector((store)=> store.feed)
    const dispatch = useDispatch();

    const getFeed = async () => {
        try {
            const res = await axios({
                method: "get",
                url: BASE_URL + "/user/feed",
                withCredentials: true,
            });
            dispatch(addFeed(res.data.data));
        } catch (err) {
            if (err.status == 401) {
                navigate("/login");
            }
        }
    };

    useEffect(() => {
        getFeed();
    }, []);
    if (feed.feed == null) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
    return (
        <div className="flex justify-center">
          <UserCard user={feed.feed[0]}/>
        </div>
    );
}

export default Feed;