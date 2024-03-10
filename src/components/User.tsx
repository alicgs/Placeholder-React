import { UserType } from "../types/user";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const User = ({ user }: { user: UserType }) => {
  return (
    <Card>
      <Card.Header>{user.name}</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button>
          <Link
            className="text-white "
            style={{ textDecoration: "none" }}
            to={"/user/" + user.id}
          >
            Go somewhere
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default User;
