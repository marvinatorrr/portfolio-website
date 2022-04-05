import React from "react";
import Header from "../Components/Header";
import Thumbnail from "../Components/Thumbnail";
import AnimatedPage from "./AnimatePage";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
                    <Link to="avensys">
                      <Thumbnail post="avensys" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Header title="Projects" />
              <div className="flex justify-center mt-2">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div variants={itemA}>
                    <Link to="buggy">
                      <Thumbnail post="buggy" />
                    </Link>
                  </motion.div>
                  <motion.div variants={itemA}>
                    <Link to="battery">
                      <Thumbnail post="battery" />
                    </Link>
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
