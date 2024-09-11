import DataArrayIcon from "@mui/icons-material/DataArray";
import CodeIcon from "@mui/icons-material/Code";
import BugReportIcon from "@mui/icons-material/BugReport";
import { Box, Typography } from "@mui/material";
import "./styles.css";

const benefits = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className="w-24 h-24"
      >
        <defs>
          <linearGradient id="gradient-dat" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F6C8A" />
            <stop offset="100%" stopColor="#2C3E50" />
          </linearGradient>
        </defs>
        <DataArrayIcon sx={{ fontSize: 100, fill: "url(#gradient-dat)" }} />
      </svg>
    ),
    title: "DSA",
    description: "Unlock the power of DSA and master complex coding challenges.",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className="w-24 h-24"
      >
        <defs>
          <linearGradient
            id="gradient-code"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#F76C6C" />
            <stop offset="100%" stopColor="#F9A825" />
          </linearGradient>
        </defs>
        <CodeIcon sx={{ fontSize: 100, fill: "url(#gradient-code)" }} />
      </svg>
    ),
    title: "PROJECTS",
    description: "Enhance your coding skills through hands-on projects.",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className="w-24 h-24"
      >
        <defs>
          <linearGradient id="gradient-bug" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8E44AD" />
            <stop offset="100%" stopColor="#3498DB" />
          </linearGradient>
        </defs>
        <BugReportIcon sx={{ fontSize: 100, fill: "url(#gradient-bug)" }} />
      </svg>
    ),
    title: "CONTESTS",
    description:
      "Improve your problem-solving abilities with real-world challenges.",
  },
];

const BenefitsSection = () => (
  <div className="w-full min-h-screen flex items-center justify-center">
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {benefits.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg"
          >
            <Box className="icon-container mb-2 flex items-center justify-center w-24 h-24">
              {icon}
            </Box>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: "bold",
                mb: 3,
                fontFamily: "Archivo Black, sans-serif",
              }}
            >
              {title}
            </Typography>
            <Typography variant="body1" className="description">
              {description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BenefitsSection;
