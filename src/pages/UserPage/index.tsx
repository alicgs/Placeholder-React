import { useLoaderData } from "react-router-dom";
import { UserType } from "../../types/user";
import User from "../../components/User";
import Nav from "react-bootstrap/Nav";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import { PostType } from "../../types/post";
import Post from "../../components/Post";
import { AlbumType } from "../../types/album";
import Album from "../../components/Album";

type TabType = "posts" | "albums" | "todos";

const UserPage = () => {
  const userData = useLoaderData() as UserType;

  const [tab, setTab] = useState<TabType>("posts");

  const [tabData, setTabData] = useState<PostType[] | AlbumType[] | null>(null);

  const handleFetchData = async () => {
    setTabData(null);
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/user/" + userData?.id + "/" + tab
    );
    const data = await res.json();
    setTimeout(() => {
      setTabData(data);
    }, 1000);
  };
  1;
  useEffect(() => {
    handleFetchData();
  }, [tab]);

  return (
    <div>
      <User user={userData} />
      <Nav fill variant="tabs" defaultActiveKey={"post"}>
        <Nav.Item
          onClick={() => {
            setTab("posts");
          }}
        >
          <Nav.Link eventKey={"posts"}>Posts</Nav.Link>
        </Nav.Item>
        <Nav.Item
          onClick={() => {
            setTab("albums");
          }}
        >
          <Nav.Link eventKey={"albums"}>Albums</Nav.Link>
        </Nav.Item>
        <Nav.Item
          onClick={() => {
            setTab("todos");
          }}
        >
          <Nav.Link eventKey={"todos"}>Todos</Nav.Link>
        </Nav.Item>
      </Nav>
      {!tabData && (
        <div className="d-flex align-items-center justify-content-center mt-2">
          <PacmanLoader color="#36d7b7" />
        </div>
      )}
      {tabData && tabData.map(tabD => {
        if (tab === "posts") {
          return <Post post={tabD as PostType}/>;
        } 
        if(tab === "albums") {
         return <Album album={tabD as AlbumType}/>
        }
        else {
          return <></>
        }
      } )}
    </div>
  );
};

export default UserPage;
