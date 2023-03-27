import React from "react";
import axios from "axios";

/**
 * @author
 * @function LoadButton
 **/

export const LoadButton = ({ setLoading, setUsers, setCommand }) => {
  const fetchUsers = async () => {
    setLoading(true);
    const response = await axios.get("https://reqres.in/api/users?page=1");
    setUsers(response.data.data);
    setCommand(false);
    setTimeout(() => setLoading(false), 1000);
  };
  return (
    <button className="navbar-button" onClick={fetchUsers}>
      Load Users
    </button>
  );
};
