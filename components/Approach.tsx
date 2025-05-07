"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-sm mx-auto">
        <p className="text-purple-500 text-xs text-center">Approach</p>
        <h1 className="heading capitalize">
          my <span className="text-purple-500">Approach</span>
        </h1>
      </div>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          title="Systems Optimization"
          desc="I streamline your tools, workflows, and routines—eliminating friction, reducing manual tasks, and boosting your daily efficiency through automation and smart system setups."
          icon={<AceternityIcon order="Phase I" />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title=" Proactive Communication"
          desc="I stay one step ahead by anticipating needs, sending timely reminders, and organizing priorities—helping you stay focused, on track, and stress-free."
          icon={<AceternityIcon order="Phase II" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title=" Strategic Initiative"
          desc="Beyond execution, I contribute ideas, spot inefficiencies, and suggest improvements—supporting your growth with insight-driven assistance."
          icon={<AceternityIcon order="Phase III" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  desc,
  icon,
  children,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 lg:h-[35rem] relative rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div
          className={`text-center transition duration-200 w-full mx-auto flex items-center justify-center text-2xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${
            hovered ? "-translate-y-4 opacity-0" : ""
          }`}
        >
          {icon}
        </div>
        <div
          className={`text-white relative z-10 mt-4 font-bold transition duration-200 text-center ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl pb-6">{title}</h2>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-3xl font-bold text-purple-500 backdrop-blur-3xl">
        {order}
      </span>
    </button>
  );
};

export const Icon = ({ className, ...rest }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
