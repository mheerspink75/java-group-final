const getTeamUrl = "http://localhost:8080/api/admin/teams/";

export const getTeam = async (teamId) => {
    const response = await fetch(getTeamUrl + `${teamId}`);
    const data = await response.json();
    console.log(data);
    return data;
};
