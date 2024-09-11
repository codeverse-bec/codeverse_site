// components/ProjectSection.tsx

import { HoverEffect } from "../(ui)/card-hover-effect";
import Typography from "@mui/material/Typography";

interface ProjectSectionProps {
  heading: string;
  projects: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
}

export default function ProjectSection({ heading, projects }: ProjectSectionProps) {
  return (
    <section className="py-3">
      <Typography
        variant="h3"
        component="h1"
        sx={{
          textAlign: 'left', // Aligns text to the left
          fontFamily: 'Gloock, serif', // Change font family to Gloock
          // mb: 1, 
          // Adjust margin bottom
        }}
      >
        {heading}
      </Typography>
      <HoverEffect items={projects} />
    </section>
  );
}
