const adminAllUsersUrl = "http://localhost:8080/api/admin/users/";

// components/Style/Table.jsx
export const adminGetAllUsers = async () => {
  let response = await fetch(adminAllUsersUrl);

  let data = await response.json();

  return data;
};