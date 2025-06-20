"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center overflow-hidden bg-secondary/30 dark:bg-gray-900/50 rounded-md z-0 py-8 mb-8",
        className
      )}
    >
      <div className="relative flex w-full items-center justify-center isolate z-0 h-40">
        {/* Light Effects */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-40 w-[30rem] bg-gradient-conic from-primary/40 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        />
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-40 w-[30rem] bg-gradient-conic from-transparent via-transparent to-primary/40 [--conic-position:from_290deg_at_center_top]"
        />

        {/* Glow Effects */}
        <div className="absolute top-1/2 h-32 w-full translate-y-4 scale-x-150 bg-background/80 dark:bg-slate-950 blur-2xl" />
        <div className="absolute top-1/2 z-50 h-32 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-24 w-[24rem] -translate-y-1/2 rounded-full bg-primary/50 dark:bg-cyan-500 opacity-50 blur-3xl" />
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-24 w-64 -translate-y-16 rounded-full bg-primary/40 dark:bg-cyan-400 blur-2xl"
        />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-20 bg-primary dark:bg-cyan-400"
        />
        <div className="absolute inset-auto z-40 h-24 w-full -translate-y-36 bg-background/80 dark:bg-slate-950" />
      </div>

      <div className="relative z-50 flex flex-col items-center px-2">
        {children}
      </div>
    </div>
  );
};
