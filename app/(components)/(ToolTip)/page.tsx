"use client";
import React from "react";
import { AnimatedTooltip } from "../(ui)/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Imran khan",
    designation: "Frontend",
    image:
      "/assets/images/imran.png",
  },
  {
    id: 2,
    name: "Dhana sekhar",
    designation: "Backend",
    image:
      "/assets/images/dhana.png",
  },
];
// "C:\Users\Imrankhan\sites\my-app\public\assets\images\imran.png"

export default function ToolTip() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full" style={{paddingTop:'20px'}}>
      <AnimatedTooltip items={people} />
    </div>
  );
}
