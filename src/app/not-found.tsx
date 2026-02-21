"use client";

import Link from "next/link";
import { motion,Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { Home, SearchX } from "lucide-react";


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants : Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

// A continuous floating animation for the 404 icon
const floatVariants : Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center max-w-md"
      >
        {/* The Floating Icon */}
        <motion.div variants={floatVariants} animate="animate" className="mb-8">
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary dark:bg-primary/20">
            <SearchX className="w-12 h-12" />
          </div>
        </motion.div>

        {/* The 404 Text */}
        <motion.div variants={itemVariants}>
          <h1 className="text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-4">
            404
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
            Asset Not Found
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8">
            The page or dashboard view you are looking for doesn't exist or has
            been moved.
          </p>
        </motion.div>

        {/* The Return Button */}
        <motion.div variants={itemVariants}>
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <Home className="w-4 h-4" />
              Return to Dashboard
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
