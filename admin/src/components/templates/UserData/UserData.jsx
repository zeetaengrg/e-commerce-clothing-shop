import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "data/user";
import { Link } from "react-router-dom";
import "./UserData.scss";

const UserData = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cell-action">
            <Link to="/users/test">
              <div className="view-btn">View</div>
            </Link>
            <div className="delete-btn">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="user">
      <div className="user-top">
        <h1>Users</h1>
        <Link to="/users/new">
          <div className="add-btn">Add New User</div>
        </Link>
      </div>
      <DataGrid
        className="data-grid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  );
};

export default UserData;
