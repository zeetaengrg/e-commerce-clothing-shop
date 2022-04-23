import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "data-user";
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
            <div className="view-btn">View</div>
            <div className="delete-btn">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="user">
      <h1>Users</h1>
      <DataGrid
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
