import { Row, Col, Card, Container, CardBody } from "reactstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/Reducers/Auth/actions";

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.Auth);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) =>
    setUser({
      ...user,
      [name]: value,
    });

  const submitUser = () => dispatch(loginUser(user));

  return (
    <Container className="py-5">
      <Row>
        <Col md={6} sm={12} className="mx-auto">
          <Card>
            <CardBody>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={user.username}
                  placeholder="Username"
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <div className="mt-3">
                <button
                  disabled={loading}
                  onClick={submitUser}
                  className="btn btn-primary w-100"
                >
                  Login
                </button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
