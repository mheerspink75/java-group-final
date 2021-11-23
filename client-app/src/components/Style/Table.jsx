import styled from "styled-components";
import { useState, useEffect } from "react";
import { adminGetAllUsers } from "../../services/AdminUserTableService";

const StyledTable = styled.table`
  color: black;
  font-weight: bold;
  background-color: white;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 14px;
  th {
    background-color: #f2f2f2;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const Table = () => {
  const [users, setAllUsers] = useState([]);

  useEffect(() => {
    adminGetAllUsers().then((data) => {
      setAllUsers(data);
    });
  }, []);

  return (
    <StyledTable className="table table-striped">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Team</th>
          <th>Active</th>
          <th>Admin</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {/* map through the users and display them in the table */}
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            {user.team === null ? <td>None</td> : <td>{user.team.name}</td>}
            <td>{user.active ? "Yes" : "No"}</td>
            <td>{user.admin ? "Yes" : "No"}</td>
            <td>{user.status ? "Joined" : "Pending"}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
