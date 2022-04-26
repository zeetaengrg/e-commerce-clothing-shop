import { useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "data/user";
import "./UserData.scss";

const UserData = () => {
  const [data, setData] = useState(userRows);

  // Delete user from the list
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

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
            <div
              className="delete-btn"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
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
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default UserData;
