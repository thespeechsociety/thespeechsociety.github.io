export interface Contributor {
  name: string;
  role: string;
  github: string;
  githubUsername: string;
  avatar: string;
  contributions: string[];
  bio?: string;
  linkedin?: string;
  portfolio?: string;
  isLead?: boolean;
  badge?: string;
}

export const webDevContributors: Contributor[] = [
  {
    name: "Piyush Kumar Rai",
    role: "Technical Head & Lead Architect",
    githubUsername: "PiyushKrRai",
    github: "https://github.com/PiyushKrRai",
    avatar: "/assets/img/team/info/Piyush_Kumar_Rai.jpg",
    contributions: ["Architecture", "Backend & Hosting", "Component Engineering"],
    bio: "Leading technology initiatives and web systems architecture for The Speech Society.",
    isLead: true,
  },
  {
    name: "Pulkit Verma",
    role: "Full Stack & UI Developer",
    githubUsername: "pulkitverma",
    github: "https://github.com/thespeechsociety",
    avatar: "/assets/img/team/info/Pulkit_Kumar.jpg",
    contributions: ["UI Components", "Responsive Design", "Blog Engine"],
    bio: "Passionate developer focused on building intuitive and dynamic web experiences.",
    isLead: true,
  },
  {
    name: "Alok Agarwal",
    role: "Founder & Product Visionary",
    githubUsername: "alokagarwal565",
    github: "https://github.com/alokagarwal565",
    avatar: "/assets/img/team/info/alok-agarwal.png",
    contributions: ["Project Inception", "Content Strategy", "Review & Direction"],
    bio: "Founder & President of The Speech Society, shaping the platform vision.",
  },
  {
    name: "Sujoy Moulick",
    role: "Web Developer & Frontend Engineer",
    githubUsername: "sujoymoulick",
    github: "https://github.com/sujoymoulick",
    avatar: "https://avatars.githubusercontent.com/u/177207941?v=4",
    badge: "Editor",
    contributions: ["Editor 2026", "Astro v5 Modernization", "UI/UX Enhancements", "Performance Tuning"],
    bio: "Crafting performant web experiences, reactive interfaces, and modern frontend design.",
  },
  {
    name: "Yashasvi Chhaliya",
    role: "Open Source Contributor",
    githubUsername: "yashasvichhaliya",
    github: "https://github.com/thespeechsociety",
    avatar: "https://avatars.githubusercontent.com/u/172958922?v=4",
    contributions: ["Feature Enhancements", "Documentation", "Bug Fixes"],
    bio: "Active student contributor to TSS digital presence and open-source codebase.",
  },
  {
    name: "Soham Banerjee",
    role: "Open Source Contributor",
    githubUsername: "sohambanerjee",
    github: "https://github.com/thespeechsociety",
    avatar: "https://avatars.githubusercontent.com/u/117766259?v=4",
    contributions: ["Assets Management", "Styling Fixes", "Testing"],
    bio: "Contributing to the speech society platform improvements and maintenance.",
  },
  {
    name: "Arnab Basak",
    role: "Open Source Contributor",
    githubUsername: "arnabbasak01",
    github: "https://github.com/arnabbasak01",
    avatar: "https://avatars.githubusercontent.com/u/177306006?v=4",
    contributions: ["Open Source Contributor", "Frontend Updates", "Community Code"],
    bio: "Contributing to The Speech Society web platform and open-source initiatives.",
  },
  {
    name: "Souvik",
    role: "Open Source Contributor",
    githubUsername: "Souvik444411",
    github: "https://github.com/Souvik444411",
    avatar: "https://avatars.githubusercontent.com/u/141899070?v=4",
    contributions: ["Open Source Contributor", "Bug Fixes", "Community Member"],
    bio: "Passionate developer contributing to The Speech Society open-source projects.",
  },
  {
    name: "Somnath Das",
    role: "Open Source Contributor",
    githubUsername: "somnathdas29",
    github: "https://github.com/somnathdas29",
    avatar: "https://avatars.githubusercontent.com/u/176694812?v=4",
    contributions: ["Open Source Contributor", "Frontend Updates", "Community Member"],
    bio: "Contributing to The Speech Society web development and open-source initiatives.",
  },
];
