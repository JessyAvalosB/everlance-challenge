import React, { useState } from "react";

import Search from "../Search/Search";
import Spinner from "../Spinner/Spinner";
import Pagination from "../Pagination/Pagination";
import UserCardContainer from "./UserCardContainer/UserCardContainer";

import { useFetchUsers } from "../../hooks/useFetchUsers";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Users = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [username, setUserName] = useState("");
  const { data, isLoading, isSuccess, error } = useFetchUsers(
    currentPage,
    username
  );

  const handleSearchUser = (event: string) => {
    setUserName(event);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="flex justify-between max-w-5xl mx-auto mt-10 mb-5">
        <h1 className="text-2xl">GitHub Users</h1>
        <Search
          onChange={handleSearchUser}
          label="Enter username or email"
          icon={true}
          value={username}
        />
      </div>

      {username === "" ? (
        <ErrorMessage text="Indroduce name or email to search a user" />
      ) : error ? (
        <ErrorMessage text="Somenthing wrong we'll tray again." />
      ) : isLoading ? (
        <Spinner />
      ) : isSuccess ? (
        <>
          <UserCardContainer users={data.items} />
          <Pagination
            totalItems={data?.total_count || 0}
            page={currentPage}
            limit={9}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Users;
