import React from "react";
import UserCard from "../UserCard/UserCard";
import { UserCardContainerProps } from "./Types";

const UserCardContainer = ({ users }: UserCardContainerProps): JSX.Element => {
  return (
    <div className="container grid grid-cols-3 gap-x-8 gap-y-7 max-w-5xl m-auto">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
};

export default UserCardContainer;
