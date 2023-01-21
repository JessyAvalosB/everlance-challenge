import React from "react";
import Search from "../Search/Search";
import UserCardContainer from "./UserCardContainer/UserCardContainer";

const Users = (): JSX.Element => {

  const handleSearchUser = (event: string) => {
    console.log(event);
  };

  return (
    <>
      <div className="flex justify-between max-w-5xl mx-auto mt-10 mb-5">
        <h1 className="text-2xl">GitHub Users</h1>
        <Search onChange={handleSearchUser} label='Enter username or email' icon={true} />
      </div>
      <UserCardContainer users={[]} />
    </>
  );
};

export default Users;
