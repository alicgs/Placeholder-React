import { useNavigate } from "react-router-dom";
import useLikedAlbums from "../../state/useLikedAlbums";
import { FaTrash } from "react-icons/fa";

const FavouritePage = () => {
  const { likedAlbums, setLikedAlbums } = useLikedAlbums();

  const navigate = useNavigate();

  return (
    <div>
      {likedAlbums.map((likedAlbum) => (
        <div key={likedAlbum.photoId}> { /* Eğer her bir likedAlbum benzersiz bir photoId'ye sahipse  */}
          <FaTrash
            onClick={() => {
              setLikedAlbums(
                likedAlbums.filter((LA) => LA.photoId !== likedAlbum.photoId)
              );
            }}
          />
          <img
            onClick={() => {
              navigate(
                `/users/${likedAlbum.userId}/albums/${likedAlbum.album.id}`
              );
            }}
            src={likedAlbum.photoUrl}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default FavouritePage;
