"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../(ui)/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={tips}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const tips = [
  {
    quote:
      "Consistency is Key.! No matter, how good of a motivation do you have. It won't last forever. Mark a slot for DSA in your daily list and cram leetcode questions. This cramming shouldn't be bothered by any other task",
    name: "- Dhana sekhar",
    title: "Grinding DSA",
  },
  {
    quote:
      "Feeling Stuck is a very common syndrome. Every profesional was once a beginner, and no body is born a certain way. The only mantra is to believe in yourself and working on it. If you ever feel stuck come to us let us break the barrier",
    name: "- Imran khan",
    title: "Feeling Stuck",
  },{
    quote:
      "Learn to code layouts in CSS, before any other CSS animations or transitions or whatever. Draw your layout on paper and visualize the containers and their css properties prior coding. Don't forget to Keep it responsive :) D",
    name: "- Imran khan",
    title: "Frontend Tip",
  },
  {
    quote:
      "Get some words from sudhakar sir and put them here",
    name: "- Sudhakar sir",
    title: "Love coding",
  },
  {
    quote:
      "Get some words from varun and put them here",
    name: "- Dhana sekhar",
    title: "Leetcode Streak Battle",
  },
  {
    quote:
      "Get some words from varun and put them here",
    name: "- Varun",
    title: "Improving Contest Rating",
  },
];
