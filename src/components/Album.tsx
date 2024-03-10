import { Card, Nav } from "react-bootstrap";
import { AlbumType } from "../types/album";
import { useParams, NavLink } from "react-router-dom";

const Album = ({ album }: { album: AlbumType }) => {
  const params = useParams();
  return (
    <Nav.Link as={NavLink} to={`/users/${params.userId}/albums/${album.id}`}>
      <Card>
        <Card.Header>{album.title}</Card.Header>
        <Card.Body>
          {/*  
           <Link>
            className="text-white "
            style={{ textDecoration: "none" }}
            to={"/user/" + post.id}
          >
            Go somewhere
          </Link> */}
        </Card.Body>
      </Card>
    </Nav.Link>
  );
};

export default Album;
