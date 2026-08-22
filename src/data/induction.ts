import { societyInfo } from './society';

export interface EvaluationCriterion {
  criterion: string;
  marks: number;
  desc: string;
}

export interface TrackDetail {
  id: string;
  category: "Non-Technical" | "Technical";
  title: string;
  activity: string;
  timing: string;
  targetParticipants: string;
  award?: string;
  description: string;
  points: { title: string; desc: string; icon: string }[];
}

export const inductionEventData = {
  name: "Official Society Induction 2026",
  society: "The Speech Society (#teamtss)",
  theme: "Step Into the Arena: Mind + Voice",
  badge: "THE SPEECH SOCIETY",
  headline: "Step Into the Arena:",
  highlightedHeadline: "Mind + Voice",
  description: "Welcome to the flagship induction ceremony of The Speech Society (#teamtss). Featuring our twin tracks: the Technical Next-Gen Web Workshop and the Non-Technical Group Discussion & Debate Arena.",
  venue: "Basement Seminar-Hall, UEMJ",
  schedule: "1:00 to 2:40 PM",
  entry: "Free for all Students",
  registrationLink: societyInfo.links.inductionForm,
  whatsappLink: "https://chat.whatsapp.com/KSBnVlwycTE9SKmcG4ketV?mode=gi_t",

  tracks: [
    {
      id: "non-technical",
      category: "Non-Technical",
      title: "The Stage & Story",
      activity: "Group Discussion & Debate Arena",
      timing: "1:00 – 2:40 PM",
      targetParticipants: "BBA, BPT, B.Tech, BCA",
      award: "1st Position Award & Certificate",
      description: "A dynamic group discussion and debate challenge. Participants engage in structured deliberations, articulating opinions, countering arguments, and demonstrating poise under observation.",
      rules: [
        { label: "Team Structure", value: "Participants are divided into teams of 6", icon: "👥" },
        { label: "Topic Allocation", value: "Each team receives a distinct discussion topic", icon: "🎯" },
        { label: "Speaking Time", value: "Approximately 2 minutes per participant", icon: "⏱️" },
        { label: "Observation", value: "Assigned TSS members observe and mentor each group", icon: "🛡️" },
        { label: "Recognition", value: "1st Position Award for top performing orator", icon: "🏆" }
      ],
      points: [
        {
          title: "Structured Team Dynamics",
          desc: "Engage in 6-member roundtables debating thought-provoking social, philosophical, and corporate topics.",
          icon: "🗣️"
        },
        {
          title: "Active Listening & Rebuttals",
          desc: "Learn to synthesize peer perspectives, deliver respectful counters, and steer conversations toward actionable solutions.",
          icon: "👂"
        },
        {
          title: "Adjudication & Individual Feedback",
          desc: "Gain real-time feedback from seasoned collegiate debaters and faculty mentors on posture, voice modulation, and argument flow.",
          icon: "📝"
        }
      ]
    },
    {
      id: "technical",
      category: "Technical",
      title: "Next-Gen Web",
      activity: "Your First Portfolio Website",
      timing: "1:00 – 4:30 PM",
      targetParticipants: "B.Tech, BCA",
      description: "An intensive, hands-on workshop guiding students to master Prompt Engineering and deploy their very own modern personal portfolio website to the cloud.",
      rules: [
        { label: "Format", value: "Interactive Live Coding & Prompt Lab", icon: "💻" },
        { label: "Audience", value: "Tailored for B.Tech & BCA Developers", icon: "👨‍💻" },
        { label: "Prerequisites", value: "None — beginner-friendly from zero to live", icon: "🚀" },
        { label: "Outcome", value: "Live deployed personal portfolio website", icon: "🌐" }
      ],
      points: [
        {
          title: "What is Prompt Engineering?",
          desc: "Understand how structured prompts, context framing, and system instructions unlock the full potential of Large Language Models.",
          icon: "🧠"
        },
        {
          title: "Why Prompt Engineering Matters",
          desc: "In an AI-first software world, the ability to architect, refine, and steer code generation is a primary developer superpower.",
          icon: "⚡"
        },
        {
          title: "AI-Assisted Web Development",
          desc: "Learn how modern developers use AI tools and modern frameworks (Astro, Tailwind, React) to build web interfaces 10x faster.",
          icon: "🛠️"
        },
        {
          title: "Why You Need a Portfolio Website",
          desc: "A personal website serves as your living digital proof-of-work, replacing static resumes with interactive, verifiable projects.",
          icon: "🌐"
        },
        {
          title: "Career & Placement Leverage",
          desc: "Stand out in tech internships, campus placements, freelancing, and personal branding with your own live custom domain.",
          icon: "💼"
        }
      ]
    }
  ],

  evaluationCriteria: [
    { criterion: "Communication", marks: 20, desc: "Clarity of speech, articulation, grammar, and vocabulary choice." },
    { criterion: "Confidence", marks: 20, desc: "Stage presence, body language, eye contact, and composure." },
    { criterion: "Content & Ideas", marks: 20, desc: "Relevance, original perspectives, logic, depth, and structured flow." },
    { criterion: "Team Participation", marks: 20, desc: "Collaboration, acknowledging peers, building on arguments, and team synergy." },
    { criterion: "Leadership & Listening", marks: 20, desc: "Active listening, steering discussion constructively, and respectful rebuttals." }
  ],

  faqs: [
    {
      q: "Who is eligible to attend TSS Induction 2026?",
      a: "All students across all departments (B.Tech, BCA, BBA, BPT, MCA, MBA, etc.) at UEM Jaipur are warmly invited to attend!"
    },
    {
      q: "Is there any registration fee?",
      a: "No, the induction ceremony, Technical Next-Gen Web workshop, and Non-Technical Group Discussion arena are 100% free."
    },
    {
      q: "Which track should I join?",
      a: "Students from BBA, BPT, B.Tech, and BCA can participate in 'The Stage & Story' GD track. B.Tech & BCA students are especially encouraged to also attend the 'Next-Gen Web' portfolio workshop."
    },
    {
      q: "What do I need to bring for the Technical Track?",
      a: "Bring a laptop (or notebook) and your enthusiasm. We will guide you step-by-step through prompt engineering and website deployment."
    }
  ]
};
