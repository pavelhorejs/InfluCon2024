"use client";
import styles from "/components/buttons/button_red/Button_red.module.scss";
import { motion } from "framer-motion";

const Button = ({ text }) => {
  return (
    <motion.button
      whileHover={{ scale: 0.99 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring" }}
      className={styles.button}
    >
      {text}
    </motion.button>
  );
};
export default Button;
