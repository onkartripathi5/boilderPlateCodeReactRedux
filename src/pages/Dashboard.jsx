import { getUserData, filterBySalary } from "../store/Reducers/User/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    max: 0,
    min: 0,
  });

  const { loading, users, filteredUsers } = useSelector((state) => state.User);

  const handleChange = ({ target: { name, value } }) => {
    setFilter({
      ...filter,
      [name]: value ? parseInt(value) : 0,
    });
  };

  console.log({ filter });

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  const filterUsers = () => {
    if (filter.max === 0 || filter.min === 0) {
      return;
    }
    dispatch(filterBySalary(filter.max, filter.min));
  };

  return (
    <div className="container py-4">
      <input
        name="min"
        type="number"
        value={filter.min}
        onChange={handleChange}
        className="form-control"
        placeholder="Min Salary"
      />
      <input
        name="max"
        type="number"
        value={filter.max}
        onChange={handleChange}
        className="form-control"
        placeholder="Max Salary"
      />
      <button onClick={filterUsers} className="btn btn-primary">
        Filter
      </button>
      <div>{loading && <div>Loading....</div>}</div>
      <div>
        {!!users.length &&
          !filteredUsers.length &&
          users.map((user) => (
            <div key={user.username} className="card mx-2 mb-4">
              <div className="card-body">
                <h3>{user.username}</h3>
              </div>
            </div>
          ))}

        {!!filteredUsers.length &&
          filteredUsers.map((user) => (
            <div key={user.username} className="card mx-2 mb-4">
              <div className="card-body">
                <h3>{user.username}</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
