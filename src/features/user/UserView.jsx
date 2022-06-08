import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";
const UserView = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2> List of users </h2>
      {user.loading && <div> loading..! </div>}
      {!user.loading && user.error ? <div> Error: {user.error} </div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((item) => {
            return <li key={item.id}> {item.name}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default UserView;
