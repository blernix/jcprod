"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function TransitionLink({ href, children, ...props }) {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsExiting(true);
    setTimeout(() => {
      router.push(href);
    }, 300); // durée de l'animation (doit correspondre à transition.duration)
  };

  return (
    <motion.a
      {...props}
      href={href}
      onClick={handleClick}
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.a>
  );
}