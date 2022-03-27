import React from "react";
import Header from "../Components/Header";
import Post from "../Components/Post";
import AnimatedPage from "./AnimatePage";
import { motion } from "framer-motion";

export default function Works() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemA = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
  };

  return (
    <AnimatedPage>
      <motion.div variants={container} initial="hidden" animate="show">
        <div className="flex  justify-center mt-2">
          <div className="w-[485.5px] my-3 divide-y divide-zinc-500 ">
            <div>
              <Header title="Works" />
              <div className="flex justify-center mt-2">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <motion.div variants={itemA}>
                    <Post
                      title="1"
                      description="My Youtube Channel"
                      imagesrc="../Resources/PostImages/Post1.png"
                      imagealt="some description"
                    />
                  </motion.div>
                  <motion.div variants={itemA}>
                    <Post
                      title="2"
                      description="some other description"
                      imagesrc="../Resources/PostImages/Post1.png"
                      imagealt="some description 2"
                    />
                  </motion.div>
                  <motion.div variants={itemA}>
                    <Post
                      title="3"
                      description="some other description"
                      imagesrc="../Resources/PostImages/Post1.png"
                      imagealt="some description 2"
                    />
                  </motion.div>
                  <motion.div variants={itemA}>
                    <Post
                      title="4"
                      description="some other description"
                      imagesrc="../Resources/PostImages/Post1.png"
                      imagealt="some description 2"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Header title="Works" />
              <div className="flex justify-center mt-2">
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                  <motion.div variants={itemA}>
                    <Post
                      title="Life as a Dev"
                      description="My Youtube Channel"
                      imagesrc="../Resources/PostImages/Post1.png"
                      imagealt="some description"
                    />
                  </motion.div>
                  <motion.div variants={itemA}>
                    <Post
                      title="Post 2"
                      description="some other description"
                      imagesrc="../Resources/PostImages/Post1.png"
                      imagealt="some description 2"
                    />
                  </motion.div>
                  <motion.div variants={itemA}>
                    <Post
                      title="Post 2"
                      description="some other description"
                      imagesrc="../Resources/PostImages/Post1.png"
                      imagealt="some description 2"
                    />
                  </motion.div>
                  <motion.div variants={itemA}>
                    <Post
                      title="Post 2"
                      description="some other description"
                      imagesrc="../Resources/PostImages/Post1.png"
                      imagealt="some description 2"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatedPage>
  );
}
