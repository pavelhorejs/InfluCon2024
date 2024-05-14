"use client";
import styles from "/components/buttons/button/Button.module.scss";
import { motion } from "framer-motion";
const Button = ({ text }) => {
  return (
    <motion.button
      whileHover={{ scale: 0.97 }}
      transition={{ type: "spring" }}
      className={styles.buttonOutline}
    >
      {text}
    </motion.button>
  );
};
export default Button;
