import React from "react";
import { motion } from "motion/react";

const App = () => {
  return (
    <div>
      <motion.div
        animate={{
          x: [0, 800, 800, 0, 0],
          y: [0, 0, 300, 300, 0],
          // duration: 1,
          // scale: 127,
          // rotate: [0, 360, 0, -360],
        }}
        transition={{ duration: 10, delay: 0, ease: "anticipate" }}
        className="box"
      >
        <motion.img
          // whileInView={{ scale: 11.2 }}

          transition={{ repeat: Infinity }}
          src="https://i.pinimg.com/474x/8f/b0/ac/8fb0acda4897a3eaefcf02fb4952472b.jpg"
          alt=""
        />
      </motion.div>

      <motion.h1
        // style={}
        drag 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.8,
          delay: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        Hello every one
      </motion.h1>
      <motion.h1
        drag
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.8,
          delay: 2.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        This is satish chandra
      </motion.h1>
    </div>
  );
};

export default App;
