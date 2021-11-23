import AdminNavbar from "../../components/AdminNavbar";
import { Table } from "../../components/Style/Table";
import styled from "styled-components";

const StyledHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  font-family: "Fira Code", serif;
`;

// TODO: SYNC STYLING WITH OTHER PAGES

const AdminUsers = () => {
  return (
    <div>
      <AdminNavbar />
      <StyledHome>
        <Table />
      </StyledHome>
    </div>
  );
};

export default AdminUsers;
