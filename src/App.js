import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
import "./App.css";
import { LoadButton } from "./components/Button";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [command, setCommand] = useState(true);

  return (
    <div className="App">
      <Navbar
        setLoading={setLoading}
        setUsers={setUsers}
        setCommand={setCommand}
      />
      {loading ? (
        <div className="loader">
          <ClipLoader css={css} size={50} color={"#123abc"} loading={loading} />
        </div>
      ) : command ? (
        <div align="center">
          <h4>
            Click on the{" "}
            <LoadButton
              setLoading={setLoading}
              setUsers={setUsers}
              setCommand={setCommand}
            />{" "}
            button to view users!
          </h4>
        </div>
      ) : (
        <div className="user-cards">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
