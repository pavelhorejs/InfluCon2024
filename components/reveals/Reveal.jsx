"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Reveal({ children, delay }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const animation = {
    initial: { y: "50%", opacity: 0 },
    enter: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay || 0,
      },
    },
  };

  return (
    <div ref={ref} className="body" style={{ overflow: "hidden" }}>
      <motion.div animate={{ translateY: inView ? "100%" : 0 }} />
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className="lineMask"
          style={{ position: "relative", zIndex: 2 }}
        >
          <motion.div
            variants={animation}
            initial="initial"
            animate={inView ? "enter" : "initial"}
          >
            {child}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
