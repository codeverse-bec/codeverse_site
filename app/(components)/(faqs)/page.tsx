"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

// Define the type for each FAQ item
interface Question {
  id: number;
  question: string;
  answer: string;
}

export default function FAQs() {
  // Set the active question state with a type that can be either number or null
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  // Define the questions array with proper types
  const questions: Question[] = [
    {
      id: 1,
      question: "How long is shipping?",
      answer: "Shipping is between 5-10 business days.",
    },
    {
      id: 2,
      question: "What is your return policy?",
      answer: "You can return any unused item within 30 days.",
    },
    {
      id: 3,
      question: "How do I track my order?",
      answer: "You can track your order using the tracking number provided via email.",
    },
    {
      id: 4,
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide. Shipping times vary depending on the destination.",
    },
  ];

  return (
    <div className="w-auto h-screen bg-black flex justify-center items-center">
      <div
        className="w-[89%] m-auto max-w-[1400px] p-8 rounded-lg shadow-md"
        style={{
          background: 'linear-gradient(180deg, #101820, #0a0d12)', // Darker gradient for a more professional look
          boxShadow: '0 0 15px rgba(0, 0, 0, 0.6)', // Slightly more intense shadow
        }}
      >
        <h2 className="text-2xl mb-6 font-semibold text-white">Frequently Asked Questions</h2>
        {questions.map((q) => (
          <div key={q.id} className="mb-4 last:mb-0">
            <button
              className="w-full text-left text-xl focus:outline-none p-4 rounded-lg shadow-md flex justify-between items-center"
              style={{
                backgroundColor: activeQuestion === q.id ? '#1a1d1f' : '#2c2f34', // Darker color for buttons
                color: 'white',
                transition: 'background-color 0.3s ease', // Smooth transition for background color
              }}
              onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}
            >
              {q.question}
              {activeQuestion === q.id ? <RemoveCircleIcon /> : <AddCircleIcon />}
            </button>
            <AnimatePresence>
              {activeQuestion === q.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    height: { duration: 0.2, ease: "easeOut" },
                    opacity: { duration: 0.2, ease: "easeOut" }
                  }}
                  className="mt-2 text-gray-300 ml-4 text-left"
                >
                  <p>{q.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
