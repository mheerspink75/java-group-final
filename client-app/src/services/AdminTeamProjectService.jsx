const getAllProjectsUrl = "http://localhost:8080/api/admin/projects/";
const getAllTeams = "http://localhost:8080/api/admin/teams/";

export const getAllProjects = async () => {
    const response = await fetch(getAllProjectsUrl);
    const data = await response.json();
    return data;
};

export const getAllTeam = async () => {
    const response = await fetch(getAllTeams);
    const data = await response.json();
    return data;
}