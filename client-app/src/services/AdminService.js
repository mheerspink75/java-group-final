const getAllProjectsUrl = "http://localhost:8080/api/admin/projects/";

export const getAllProjects = async () => {
    const response = await fetch(getAllProjectsUrl);
    const data = await response.json();
    console.log(data);
    return data;
};

export const getProject = async (id) => {
	const response = await fetch(getAllProjectsUrl +`/${id}`);
	const data = await response.json();
	return data;
};

export const updateProject = async (requestBody) => {
	const response = await fetch(getAllProjectsUrl + `/${requestBody.id}`, {
		 method:'PATCH',
		 headers: {
			 'Accept': 'application/json',
			 'Content-Type': 'application/json'
		 },
		 body: JSON.stringify(requestBody) 
	});
	await response.json()
};
