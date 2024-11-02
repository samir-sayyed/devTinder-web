import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import ConnectionCard from "./ConnectionCard";
import { useState } from "react";

const Connections = () => {
  const [connections, setConnections] = useState([]);
  const getConnections = async () => {
    try {
      const res = await axios({
        method: "get",
        url: BASE_URL + "/user/connections",
        withCredentials: true,
      });

      setConnections(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getConnections();
  }, []);

  if (connections == null) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return <div className="flex flex-col items-center">
    {
    connections && 
    <li>
      {connections.map((user) => (
        <ConnectionCard key={user._id} user={user} />
      ))}
    </li>
    }
    </div>;
};

export default Connections;
