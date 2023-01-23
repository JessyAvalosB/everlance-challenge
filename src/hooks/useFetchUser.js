import { useQuery } from "@tanstack/react-query";

export const useFetchUser = (username) => {
    const getUser = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_GITHUB}users/${username}`,
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
    }

    const query = useQuery(["user"], () => getUser());
    return query;
}