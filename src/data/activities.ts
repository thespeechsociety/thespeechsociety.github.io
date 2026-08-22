export interface ActivityItem {
  title: string;
  category: string;
  description: string;
  iconName: string;
}

export const activitiesData: ActivityItem[] = [
  {
    title: "Debate Competition",
    category: "Critical Discourse",
    description: "Structured parliamentary and cross-examination debates that hone logical arguments and quick thinking.",
    iconName: "message-square"
  },
  {
    title: "Speech & Elocution",
    category: "Public Speaking",
    description: "Platforms to master persuasive speech delivery, vocal modulation, and stage presence.",
    iconName: "mic"
  },
  {
    title: "Extempore & Just-A-Minute",
    category: "Spontaneous Speaking",
    description: "Rapid-fire speech exercises that test agility, flow of thoughts, and poise under time constraints.",
    iconName: "zap"
  },
  {
    title: "Model United Nations (MUN)",
    category: "Diplomacy & Global Affairs",
    description: "Simulations of diplomatic councils negotiating real-world treaties and international crises.",
    iconName: "globe"
  },
  {
    title: "Chai Pe Charcha",
    category: "Open Forum",
    description: "Informal, thought-provoking table talks exploring contemporary cultural, social, and tech trends over tea.",
    iconName: "coffee"
  },
  {
    title: "Quizzes & Trivia",
    category: "Knowledge Arena",
    description: "High-energy literary, general knowledge, and pop-culture buzzer challenges.",
    iconName: "help-circle"
  },
  {
    title: "Poetry & Spoken Word",
    category: "Creative Expression",
    description: "Intimate recitals and slam poetry workshops celebrating rhythms, emotions, and poetic meter.",
    iconName: "feather"
  },
  {
    title: "Language & Linguistics",
    category: "Skill Development",
    description: "Interactive sessions exploring vocabulary nuances, phonetics, and communicative idioms.",
    iconName: "book-open"
  },
  {
    title: "Anchoring & Emceeing",
    category: "Stage Mastery",
    description: "Mastering crowd engagement, stage handling, cue coordination, and live event hosting.",
    iconName: "radio"
  },
  {
    title: "Tech Talks & Industry Panels",
    category: "Industry Insights",
    description: "Conversations with notable founders, engineers, and influencers on technology and career paths.",
    iconName: "terminal"
  },
  {
    title: "Open Mic Sessions",
    category: "Unfiltered Stage",
    description: "Free-format open stage welcoming comedy, storytelling, acoustic music, and monologue performances.",
    iconName: "volume-2"
  },
  {
    title: "Spell Bee & Lexicon Battles",
    category: "Wordcraft",
    description: "Competitive spelling and vocabulary showdowns for linguistic perfectionists.",
    iconName: "award"
  },
  {
    title: "Improv Games",
    category: "Creativity & Teamwork",
    description: "Unscripted role-play games and icebreakers that conquer stage fright and build team chemistry.",
    iconName: "sparkles"
  },
  {
    title: "Storytelling & Narrative Arc",
    category: "Narrative Arts",
    description: "Crafting captivating personal, business, and fictional narratives that resonate with listeners.",
    iconName: "compass"
  }
];
