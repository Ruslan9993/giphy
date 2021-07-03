import React from "react";
import { Gif } from "../Gif/Gif";
import { Loader } from "../Loader/Loader";
import { useSelector } from "react-redux";
import { SearchBar } from "../SearchBar/SearchBar";
import { Empty } from "../Empty/Empty";
import "./GiphyApp.css";

export const GiphyApp = () => {
  const gifs = useSelector((state) => state.gifs.gifs);
  const loading = useSelector((state) => state.gifs.loading);
  const isEmpty = useSelector((state) => state.gifs.isEmpty);

  console.log("gifs");

  // if(loading) {
  //   return (
  //     <div>Loading...</div>
  //   )
  // }

  return (
    <div className="">
      <SearchBar />
      <div className="App__main">
        {loading === false ? (
          gifs.map((gif) => {
            return <Gif key={gif.id} gif={gif} />;
          })
        ) : (
          <Loader />
        )}
        {isEmpty ? <Empty /> : ""}
      </div>
    </div>
  );
};
