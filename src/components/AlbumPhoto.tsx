import { Col } from "react-bootstrap";

const AlbumPhoto = ({photo} : {photo: {url: string}}) => {
  return (
    <>
        <Col sm={2}>
              <img className="w-100 h-100" src={photo.url} alt="" />
            </Col>
    </>
  );
};

export default AlbumPhoto;
