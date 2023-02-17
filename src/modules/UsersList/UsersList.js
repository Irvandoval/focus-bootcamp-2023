import { useUsers } from "../../hooks";
import { User } from "../User";
import './users-list.css';

const UsersList = () => {
  const { isLoading, users } = useUsers();

  const onUserClick = (name) => () => alert(`Hello ${name}`);

  if (isLoading) {
    return <div> Is Loading!!</div>;
  }

  return (<div className="users"> 
    {
      users.map((user) => <User
        key={user.id}
        id={user.id}
        name={user.name}
        onUserClick={onUserClick}
      />)
    }
  </div>);
};

export default UsersList;
