import { create } from "zustand";
import { LikedAlbumType } from "../types/album";
import { devtools } from "zustand/middleware";

type StateType = {
  likedAlbums: LikedAlbumType[];
  setLikedAlbums: (likedAlbums: LikedAlbumType[]) => void;
};

const useLikedAlbums = create<StateType>()(
  devtools((set) => ({
    likedAlbums: [],
    setLikedAlbums: (likedAlbums) => set({ likedAlbums }),
  }))
);

export default useLikedAlbums;
