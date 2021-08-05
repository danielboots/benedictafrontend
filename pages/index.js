import { sanityClient, urlFor } from "../sanity";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Post from "@/components/Post";

import Release from "@/components/Release";
import FeatureTitle from "@/components/FeatureTitle";
import Hero from "@/components/Hero";

const Home = ({}) => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'post'][0..1]{
        title,
        slug,
        body,
        mainImage {
            asset-> {
                _id,
                url
            },
            alt
        }

    }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <Layout>
      <div className="font-body">
        <Hero />
        <FeatureTitle />
        <div className=" p-4 container mx-auto font-body py-4">
          <div>
            <h1 className="flex justify-start text-3xl  font-body  font-bold sm:text-4xl ">
              Latest...
            </h1>

            <div className=" my-6 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
              {postData &&
                postData.map((post) => (
                  <div>
                    <Post key={post.id} post={post} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

//       id,
//       image {
//         asset-> {
//             _id,
//             url,
//         },
//         alt,
