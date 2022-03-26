import React from "react";
import Header from "../Components/Header";
import Post from "../Components/Post";

export default function Works() {
  return (
    <div className="flex  justify-center mt-2">
      <div className="w-[485.5px] my-3 divide-y divide-zinc-500 ">
        <div>
          <Header title="Works" />
          <div className="flex justify-center mt-2">
            <div className="grid grid-rows-2 grid-flow-col gap-4 mb-4">
              <div>
                <Post
                  title="Life as a Dev"
                  description="My Youtube Channel"
                  imagesrc="../Resources/PostImages/Post1.png"
                  imagealt="some description"
                />
              </div>
              <div>
                <Post
                  title="Post 2"
                  description="some other description"
                  imagesrc="../Resources/PostImages/Post1.png"
                  imagealt="some description 2"
                />
              </div>
              <div>
                <Post
                  title="Post 2"
                  description="some other description"
                  imagesrc="../Resources/PostImages/Post1.png"
                  imagealt="some description 2"
                />
              </div>
              <div>
                <Post
                  title="Post 2"
                  description="some other description"
                  imagesrc="../Resources/PostImages/Post1.png"
                  imagealt="some description 2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <Header title="Works" />
          <div className="flex justify-center mt-2">
            <div className="grid grid-rows-2 grid-flow-col gap-4">
              <div>
                <Post
                  title="Life as a Dev"
                  description="My Youtube Channel"
                  imagesrc="../Resources/PostImages/Post1.png"
                  imagealt="some description"
                />
              </div>
              <div>
                <Post
                  title="Post 2"
                  description="some other description"
                  imagesrc="../Resources/PostImages/Post1.png"
                  imagealt="some description 2"
                />
              </div>
              <div>
                <Post
                  title="Post 2"
                  description="some other description"
                  imagesrc="../Resources/PostImages/Post1.png"
                  imagealt="some description 2"
                />
              </div>
              <div>
                <Post
                  title="Post 2"
                  description="some other description"
                  imagesrc="../Resources/PostImages/Post1.png"
                  imagealt="some description 2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
