import React, { useContext } from "react";
import { ProductContext } from "../../Contexts/Product";
import Card from "../Card";

function Video() {
  const { video } = useContext(ProductContext).product;

  return (
    <Card>
      <div className="w-full">
        <h1 className="p-5 text-5xl text-center text-orange-500 font-mono font-bold">
          Hur gör man
        </h1>
        <iframe
          className="w-full aspect-video rounded-3xl"
          src={video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Card>
  );
}

export default Video;
