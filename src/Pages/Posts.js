import React from "react";
import Header from "../Components/Header";
import Thumbnail from "../Components/Thumbnail";
import AnimatedPage from "./AnimatePage";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Posts() {
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
      <div className="flex  justify-center mt-2">
        <div className="w-[485.5px] my-3 divide-y divide-zinc-500 ">
          <div>
            <Header title="Posts" />
            <div className="flex justify-center mt-2">
              <motion.div
                className="grid grid-cols-2 gap-4 mb-4"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <motion.div variants={itemA}>
                  <Link to="mindset">
                    <Thumbnail post="mindset" />
                  </Link>
                </motion.div>

                <motion.div variants={itemA}>
                  <Link to="worldskills">
                    <Thumbnail post="worldskills" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
