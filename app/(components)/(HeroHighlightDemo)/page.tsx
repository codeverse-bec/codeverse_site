"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../(ui)/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-3xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        In the silence of debugging, every error is a whisper. Reality distorts, <br className="hidden sm:block" />
        <Highlight className="text-black dark:text-white text-base sm:text-lg md:text-xl lg:text-2xl highlighted-text">
          code remains.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
