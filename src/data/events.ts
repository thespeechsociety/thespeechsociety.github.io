export interface EventItem {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  galleryUrl: string;
  featured?: boolean;
}

export const eventsData: EventItem[] = [
  {
    id: "induction-2026",
    title: "Official Society Induction 2026",
    date: "Upcoming (1:00 PM – 2:40 PM)",
    category: "Induction",
    description: "The flagship induction ceremony of The Speech Society (#teamtss). Featuring twin tracks: Technical Next-Gen Web & Prompt Engineering Workshop alongside Non-Technical Group Discussion & Debate Arena.",
    image: "/assets/img/lnduction2026.png",
    galleryUrl: "/induction",
    featured: true
  },
  {
    id: "aarambh",
    title: "AARAMBH - Inaugural Session",
    date: "Feb 02, 2023",
    category: "Inaugural",
    description: "Kicking off by marking a grand inauguration with an unforgettable event that set the tone for an exciting journey ahead. Our inaugural event was graced by the esteemed presence of Mr. Kuldeep Singhania, who delivered an inspiring keynote address. The event was a resounding success, attracting an enthusiastic audience of over 300 individuals.",
    image: "/assets/img/event/event1.jpg",
    galleryUrl: "https://photos.app.goo.gl/4A6ebTdGprUQiZQw5",
    featured: true
  },
  {
    id: "tech-talk-ishan-sharma",
    title: "Tech Talk with Ishan Sharma",
    date: "Feb 23, 2023",
    category: "Tech Talk",
    description: "This was TSS’s first collaboration event, featuring Ishan Sharma, the co-founder of Markitup. The event was a learning extravaganza, offering participants an engaging discourse on the transformative power of AI technology. It sparked discussions on innovation, emerging trends, and the potential impact of AI on future career paths.",
    image: "/assets/img/event/event2.jpeg",
    galleryUrl: "https://photos.app.goo.gl/8nug6BsMGcBiWTMZ6",
    featured: true
  },
  {
    id: "womens-day-jingle",
    title: "International Women’s Day Celebration & Jingle Convention",
    date: "Mar 01, 2023",
    category: "Celebration & Poetry",
    description: "An unforgettable event, graced by award-winning poets and authors, to honour the remarkable women in our community. It was a memorable occasion that left a lasting impact, fostering a sense of unity, respect, and appreciation for the incredible women shaping our world.",
    image: "/assets/img/event/event3.jpg",
    galleryUrl: "https://photos.app.goo.gl/yN9JDFK2RQr7T6uU9"
  },
  {
    id: "speech-poetry-recitation",
    title: "Speech Competition & Poetry Recitation",
    date: "Mar 02, 2023",
    category: "Competition",
    description: "Through their speeches and poetic expressions, contestants shed light on the diverse roles women play in shaping values, imparting wisdom, and instilling virtues in future generations and highlighted the theme \"Women as the Foundation of a Value-Based Society.\"",
    image: "/assets/img/event/event4.JPG",
    galleryUrl: "https://photos.app.goo.gl/yN9JDFK2RQr7T6uU9"
  },
  {
    id: "techdebate-2023",
    title: "TechDebate",
    date: "Mar 18, 2023",
    category: "Debate",
    description: "This event not only served as a platform for intellectual discourse but also highlighted the club's commitment to nurturing critical thinking and communication skills among participants. It was an inspiring display of talent, passion, and intellectual prowess, making it a memorable and enriching experience for all involved.",
    image: "/assets/img/event/event5.jpg",
    galleryUrl: "https://drive.google.com/drive/folders/1o3jsueJEV9FwS2aH-253c8WZvdvJMSYR?usp=sharing"
  },
  {
    id: "induction-2023",
    title: "Induction Event 2023",
    date: "Aug 07, 2023",
    category: "Induction",
    description: "A captivating and memorable \"Induction Event\" for the enthusiastic first-year students of the 23-24 batch. This event was more than just an introduction; it was a catalyst for building connections, fostering friendships, and igniting the spirit of exploration and learning.",
    image: "/assets/img/event/event6.jpg",
    galleryUrl: "https://photos.app.goo.gl/saE7FgJjbueLLJLc7"
  },
  {
    id: "toastmasters-intro",
    title: "Introductory Session with Toastmasters Club",
    date: "Dec 01, 2023",
    category: "Workshop",
    description: "This event, masterminded by TSS trainees, aimed to familiarize participants with the essence of Toastmasters and its profound impact on personal development. The narratives of the current members not only enthralled the audience but also motivated and encouraged participants to embark on their transformative journeys.",
    image: "/assets/img/event/event7.jpg",
    galleryUrl: "https://photos.app.goo.gl/JHrtDFJEvWe7YxLr5"
  },
  {
    id: "litfest-2024",
    title: "UEM Jaipur LitFest 2024",
    date: "Jan 31, 2024 - Feb 02, 2024",
    category: "LitFest",
    description: "TSS hosted an array of exhilarating competitions. Students showcased their talents and creativity, earning cash prizes, cherished mementos, and certificates. The event concluded with an inspiring speech by Ms. Aditi Gupta, a young entrepreneur and founder of TechTip24, followed by musical performances from our talented students.",
    image: "/assets/img/event/event8.jpg",
    galleryUrl: "https://photos.app.goo.gl/KCBjYcoLByCCWAwg9",
    featured: true
  },
  {
    id: "crushing-job-hunt",
    title: "Crushing Job Hunt with Kushal Vijay",
    date: "Feb 23, 2024",
    category: "Career & Tech",
    description: "Unveiling strategies for software engineers, entrepreneurs, and aspiring professionals to crush the job hunt! From landing roles at tech giants to launching startups, dive into insider tips and craft your roadmap to success.",
    image: "/assets/img/event/event9.jpg",
    galleryUrl: "https://photos.app.goo.gl/JjK9qjnTHP7FjDvM9",
    featured: true
  },
  {
    id: "litfest-2025",
    title: "UEM Jaipur LitFest 2025",
    date: "Mar 09, 2025",
    category: "LitFest",
    description: "TSS Club organized two engaging competitions that showcased student's creativity and knowledge. Participants competed with passion—through powerful written expressions and pop culture mastery—earning recognition, awards, and memorable experiences.",
    image: "/assets/img/event/event10.jpg",
    galleryUrl: "https://drive.google.com/drive/folders/12m3BMsmgMkULNAS2HtyzV_wWMzYze81e?usp=sharing"
  }
];
