const User = (props) =>  
  <button
    key={props.id}
    onClick={props.onUserClick(props.name)}>
     {props.name}
  </button>;

export default User;
