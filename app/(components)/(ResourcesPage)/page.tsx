// pages/page.tsx

import  ProjectSection  from "../(CardHoverEffectDemo)/Page";
import { resources } from "./resources";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-8">
      {resources.map(({ genre, projects }) => (
        <ProjectSection
          key={genre}
          heading={genre}
          projects={projects}
        />
      ))}
    </div>
  );
}
