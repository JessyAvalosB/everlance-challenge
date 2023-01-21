import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import UserCardContainer from "./UserCardContainer/UserCardContainer";

const Users = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);

  const getUsers = async (page: number) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_GITHUB}q=gabriel&page=${page}&per_page=9`
    );
    return response.json();
  };

  // Queries
  const  { data, isFetching, isLoading, isError, isRefetching,isSuccess, ...rest } = useQuery(
    ["users", currentPage],
    () => getUsers(currentPage),
    {
      keepPreviousData: true,
    }
  );

  const handleSearchUser = (event: string) => {
    console.log(event);
  };

  return (
    <>
      <div className="flex justify-between max-w-5xl mx-auto mt-10 mb-5">
        <h1 className="text-2xl">GitHub Users</h1>
        <Search
          onChange={handleSearchUser}
          label="Enter username or email"
          icon={true}
        />
      </div>
      {isFetching ? (
        <span>Fetching Data</span>
      ) : isError ? (
        <span>Error Fetching Data</span>
      ) : isLoading ? (
        <span>Loading</span>
      ) : isSuccess ? (
        <>
          <UserCardContainer users={data.items} />
          <Pagination
            totalItems={1000}
                  page={currentPage}
                  limit={9}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      ): ''}
      {isRefetching && (<span>Intentando de nuevo</span>)}
    </>
  );
};

export default Users;
