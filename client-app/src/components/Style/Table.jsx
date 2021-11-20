import styled from "styled-components";
import * as users from "react-bootstrap/ElementChildren";

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
  `

const Table = (children, func) => {
    return (
        <StyledTable>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Team</th>
                    <th>Active</th>
                    <th>Admin</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {/* map through the users and display them in the table */}
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        {/*<td>{user.team}</td>*/}
                        <td>{user.active ? 'Yes' : 'No'}</td>
                        {/*<td>{user.admin ? 'Yes' : 'No'}</td>*/}
                        <td>{user.status ? 'Joined' : 'Pending'}}</td>
                    </tr>
                ), func)}
            </tbody>
        </table>
            </StyledTable>
    )
}
export default Table;