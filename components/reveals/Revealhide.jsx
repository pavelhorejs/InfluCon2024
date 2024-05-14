import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export const Reveal = ({ children, delay = 0 }) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2, // Adjust this threshold as needed
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.4, delay }} // Use the delay prop here
      >
        {children}
      </motion.div>
    </div>
  );
};
export default Reveal;
