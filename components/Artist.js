import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import React, { useState, useEffect } from "react";

const Artist = ({ artist }) => {
  return (
    <div>
      <div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg  hover:shadow-2xl transition duration-300 ease-in-out relative border-1">
          <h2 className="text-center font-black uppercase  text-bluegray-800 m-2 tracking-wider">
            {artist.name}
          </h2>

          <p className="text-center font-medium text-bluegray-600 "></p>
          <img
            className="w-full h-16 sm:h-32 object-cover"
            src={artist.image.asset.url}
            alt="meh"
          />
          <div className="m-4 text-center">
            <span className=" text-bluegray-600 ">{artist.tagline}</span>
          </div>

          <Link href={`artist/${artist.slug.current}`}>
            <button
              type="button"
              className=" m-3 py-3 px-4  uppercase  text-xs  rounded-sm font-bold  text-white bg-pink-900 hover:bg-gray-800 justify-end"
            >
              Artist Profile ...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Artist;
