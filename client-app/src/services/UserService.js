const getUserUrl = "http://localhost:8080/api/user/";

export const getUser = async (username) => {
    const response = await fetch(getUserUrl + `${username}`);
    const data = await response.json();
    console.log(data);
    return data;
};
