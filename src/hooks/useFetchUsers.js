import { useQuery } from "@tanstack/react-query";

export const useFetchUsers = (currentPage, username) => {
    const getUsers = async (page, name) => {
        const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
        const response = await fetch(
            `${process.env.REACT_APP_API_GITHUB}search/users?q=${name}${regexExp.test(name) ? ' in:mail' : ''}&page=${page}&per_page=9`,
            {
                method: "GET",
                headers: {
                    Authorization: `token ${process.env.REACT_APP_API_GITHUB_TOKEN}`,
                },
            }
        );
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json();
    };

    // Queries
    const query =
        useQuery(["users", currentPage, username], () => getUsers(currentPage, username), {
            keepPreviousData: true,
        });
    return query;
}