import React from "react";
import axios from "axios";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
import { LoadButton } from "./Button";

const Navbar = ({ setLoading, setUsers, setCommand }) => {
  // const fetchUsers = async () => {
  //   setLoading(true);
  //   const response = await axios.get("https://reqres.in/api/users?page=1");
  //   setUsers(response.data.data);
  //   setCommand(false);
  //   setTimeout(() => setLoading(false), 1000);
  // };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h3>Company Name</h3>
      </div>
      <LoadButton
        setLoading={setLoading}
        setUsers={setUsers}
        setCommand={setCommand}
      />
    </nav>
  );
};

export default Navbar;
