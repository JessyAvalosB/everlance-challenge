import { useQuery } from "@tanstack/react-query";

export const useFetchUsers = (currentPage, username) => {
    const getUsers = async (page, name) => {
        const response = await fetch(
            `${process.env.REACT_APP_API_GITHUB}q=${name}&page=${page}&per_page=9`,
            {
                method: "GET",
                headers: {
                    Authorization: `token ${process.env.REACT_APP_API_GITHUB_TOKEN}`,
                },
            }
        );
        return response.json();
    };

    // Queries
    const query =
        useQuery(["users", currentPage, username], () => getUsers(currentPage, username), {
            keepPreviousData: true,
        });
    return query;
}