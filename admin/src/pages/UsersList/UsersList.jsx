import { Navbar, Sidebar, UserData } from "components";
import "./UsersList.scss";

const UsersList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="list-content">
        <Navbar />
        <UserData />
      </div>
    </div>
  );
};

export default UsersList;
