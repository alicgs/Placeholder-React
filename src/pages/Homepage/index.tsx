import { useLoaderData } from "react-router-dom";
import { UserType } from "../../types/user";
import { Row, Col } from "react-bootstrap";
import User from "../../components/User";

const HomePage = () => {
  const PageData = useLoaderData() as UserType;
  return (
    <Row className="row-gap-2 p-2">
      {PageData.map((user: unknown) => (
        <Col sm={4}>
          <User user={user} />
        </Col>
      ))}
    </Row>
  );
};

export default HomePage;
