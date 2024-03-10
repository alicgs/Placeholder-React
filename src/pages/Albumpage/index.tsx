import { useLoaderData } from "react-router-dom";
import Album from "../../components/Album";
import { UserType } from "../../types/user";
import { Row } from "react-bootstrap";
import { AlbumType } from "../../types/album";
import AlbumPhoto from "../../components/AlbumPhoto";

const AlbumPage = () => {
  const pageData = useLoaderData() as {
    album: AlbumType;
    user: UserType;
    photos: { url: string }[];
  };

  return (
    <div>
      {pageData.user.name}
      <Album album={pageData.album} />
      <Row className="p-4">
        {pageData.photos.map((photo) => {
          return <AlbumPhoto photo={photo} />;
        })}
      </Row>
    </div>
  );
};

export default AlbumPage;
