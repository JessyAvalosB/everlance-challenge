import React from "react";
import UserCardContainer from "./UserCardContainer/UserCardContainer";

const Users = (): JSX.Element => {
  return (
    <>
      <div className="flex justify-between max-w-5xl mx-auto mt-10 mb-5">
        <h1 className="text-2xl">GitHub Users</h1>
        <span>Search</span>
      </div>
      <UserCardContainer users={[]} />
    </>
  );
};

export default Users;
