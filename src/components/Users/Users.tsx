import React, { useState } from "react";

import Search from "../Search/Search";
import Spinner from "../Spinner/Spinner";
import Pagination from "../Pagination/Pagination";
import UserCardContainer from "./UserCardContainer/UserCardContainer";

import { useFetchUsers } from "../../hooks/useFetchUsers";

const Users = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [username, setUserName] = useState("Jessy");
  const { data, isFetching, isLoading, isError, isRefetching, isSuccess } =
    useFetchUsers(currentPage, username);

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
      {isFetching || isLoading || isError || isRefetching ? (
        <Spinner />
      ) : isSuccess ? (
        <>
          <UserCardContainer users={data.items} />
          <Pagination
            totalItems={data?.total_count || 0}
            page={currentPage}
            limit={9}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Users;
