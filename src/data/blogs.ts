export interface Author {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    instagram?: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  dateIso: string;
  authors: Author[];
  image: string;
  summary: string;
  contentHtml: string;
  quote?: string;
}

export const blogsData: BlogPost[] = [
  {
    slug: "the-establishment",
    title: "The Speech Society: The Establishment",
    date: "Feb 02, 2023",
    dateIso: "2023-02-02",
    image: "/assets/img/blog/blog1.jpg",
    summary: "How a vision born among first-year students evolved into UEM Jaipur's premier communication society, marking historical milestones along the way.",
    quote: "The journey of a thousand miles begins with one step.",
    authors: [
      {
        name: "Pulkit Kumar Verma",
        role: "Content Writer & Web Developer at TSS, UEMJ",
        image: "/assets/img/blog/pulkit.jpg",
        bio: "B.Tech (CSE) student passionate about writing, coding and colors. Dedicated to The Speech Society which provided a platform to sharpen communication & tech skills.",
        social: {
          linkedin: "https://www.linkedin.com/in/pulkitkrverma",
          instagram: "https://www.instagram.com/pk_verma1823/"
        }
      },
      {
        name: "Riddhi Agrawal",
        role: "Head Content Writer at TSS, UEMJ",
        image: "/assets/img/blog/riddhi.jpg",
        bio: "BBA student at University of Engineering & Management. Head Content Writer for TSS with a keen eye for storytelling, literature and creative arts.",
        social: {
          linkedin: "https://www.linkedin.com/in/riddhiagr",
          instagram: "https://instagram.com/_._riddhi_?igshid=YmMyMTA2M2Y="
        }
      }
    ],
    contentHtml: `
      <p class="lead">Speaking: The only action which never stops and is used throughout our lives. We hear, react, respond, and talk, and no one hesitates to express themselves. Some people are introverts while some are extroverts. Extroverts are the people who influence the public through their speaking and thoughts. It is a medium to make a change in the thinking of society, and in the lifestyle of the people.</p>

      <p>Lakhs and crores of students graduate every year and due to fewer job opportunities, lack of communication and public speaking skills throw them out of the race. Every graduate might have the same level of professional skill, they might all qualify but fail in their communication skills, and here is the reason for the birth of <strong>“TSS - THE SPEECH SOCIETY”</strong>.</p>

      <p>Alok Agrawal (Founder) realized the loss borne by the students of the University of Engineering and Management, Jaipur. The idea of “The Speech Society” was first thought of by Alok when he found that there were only five Clubs/Groups in UEMJ, namely: Photography, Nature, Coding, Cultural, and Gaming. There was no existence of a club to hone one’s speaking skills. However, he had the dream of joining a speech community in college. This was when the footing of such an idea started taking place.</p>

      <p>He contacted some students and discussed the plan for a speech society. This was the point where TSS got its Co-founder Somen Halder. From that day, the journey of TSS started. At that time, 4-5 members, including the founder and co-founder, reached out to the HOD (English) and proposed the idea of starting a communication club, and with the decision in favour of TSS, Dr. Mukesh Yadav was appointed as faculty coordinator whose ideology and suggestions helped to make the idea of a speech society into ‘The Speech Society’.</p>

      <p>In early Nov 2022, the idea of TSS started taking shape and Web developers, Event managers, Content creators, Photographers, speakers, and many more members, the best from 1st year, were joined who helped Alok to change his dream into a reality. They all worked together and discussed the working model of TSS. After much deliberation, it was decided that TSS would cover and organize events such as Debates, Speeches/Elocutions, Chai Pe Charcha, Quizzes, Poetry, Language, Anchoring, Live Podcast, Interview Preparation, Spell Bee, Story Telling and many more.</p>

      <div class="my-8 space-y-6">
        <div class="p-6 rounded-2xl bg-gray-50 border border-gray-200">
          <h3 class="text-xl font-bold text-gray-900 mb-2">Milestone 1: Official Approval</h3>
          <p class="text-gray-600">Getting the official approval to form the society. The Registrar signed and registered TSS under the Society Act on 8th Nov 2022, giving it a new identity.</p>
        </div>

        <div class="p-6 rounded-2xl bg-gray-50 border border-gray-200">
          <h3 class="text-xl font-bold text-gray-900 mb-2">Milestone 2: Dean's Endorsement</h3>
          <p class="text-gray-600">On 14th Nov 2022, Prof. (Dr.) Anirudh Mukherjee, Dean(Academics), signed the proposal draft and showed a green flag to make ‘THE SPEECH SOCIETY’ an official body at UEMJ.</p>
        </div>

        <div class="p-6 rounded-2xl bg-gray-50 border border-gray-200">
          <h3 class="text-xl font-bold text-gray-900 mb-2">Milestone 3: Readiness & Resilience</h3>
          <p class="text-gray-600">TSS was now ready to launch. The inauguration event was to be held in the same month but examinations and practicals became the hurdle in the path of the grand opening. In a race, athletes take a few steps back to make a great start, not to leave.</p>
        </div>

        <div class="p-6 rounded-2xl bg-gray-50 border border-gray-200">
          <h3 class="text-xl font-bold text-gray-900 mb-2">Milestone 4: Pilot Success</h3>
          <p class="text-gray-600">The first, but unofficial event by TSS was organized on 11th Nov 2022 with the students from the BPT department which was a successful demo of TSS and it was highly appreciated.</p>
        </div>

        <div class="p-6 rounded-2xl bg-gray-50 border border-gray-200">
          <h3 class="text-xl font-bold text-gray-900 mb-2">Milestone 5: The Grand Inauguration - AARAMBH</h3>
          <p class="text-gray-600">After a long wait and much preparation, on 19th Jan 2023, Prof. (Dr.) Biswajoy Chatterjee (Vice Chancellor) and the Registrar permitted and sanctioned the budget for the inauguration event: “AARAMBH”. The dream of an official Inauguration came true on 02nd Feb 2023 with renowned influencer Mr. Kuldeep Singhania as Chief Guest.</p>
        </div>

        <div class="p-6 rounded-2xl bg-gray-50 border border-gray-200">
          <h3 class="text-xl font-bold text-gray-900 mb-2">Milestone 6: Leadership Assembly</h3>
          <p class="text-gray-600">The first official meeting of selected TSS members with the Vice Chancellor was held on 8th Feb 2023 where he appreciated the Founder and members for their dedication and grand execution.</p>
        </div>
      </div>

      <p>TSS currently has more than 30 Core members and 200+ Community Members who are the best in their field, striving to make TSS a grand success. TSS will help every student of UEMJ develop their communication skills.</p>

      <blockquote class="border-l-4 border-brand-500 pl-4 italic text-brand-800 bg-brand-50/50 p-4 rounded-r-xl my-6">
        <p>"I, The TSS, will build up confidence in you to address the public and improve your interpersonal skills."</p>
        <p class="font-bold tracking-wider mt-2 not-italic text-gray-900">THINK. SCRIPT. SPEAK.</p>
      </blockquote>
    `
  },
  {
    slug: "tech-talk-ishan-sharma",
    title: "Tech Talk with Ishan Sharma",
    date: "Feb 23, 2023",
    dateIso: "2023-02-23",
    image: "/assets/img/blog/blog2.jpg",
    summary: "A thrilling collaboration session on artificial intelligence, tech entrepreneurship, time management and navigating college life.",
    authors: [
      {
        name: "Pulkit Kumar Verma",
        role: "Content Writer & Web Developer at TSS, UEMJ",
        image: "/assets/img/blog/pulkit.jpg",
        bio: "B.Tech (CSE) student passionate about writing, coding and colors. Dedicated to The Speech Society.",
        social: {
          linkedin: "https://www.linkedin.com/in/pulkitkrverma",
          instagram: "https://www.instagram.com/pk_verma1823/"
        }
      },
      {
        name: "Riddhi Agrawal",
        role: "Head Content Writer at TSS, UEMJ",
        image: "/assets/img/blog/riddhi.jpg",
        bio: "BBA student at University of Engineering & Management. Head Content Writer for TSS.",
        social: {
          linkedin: "https://www.linkedin.com/in/riddhiagr",
          instagram: "https://instagram.com/_._riddhi_?igshid=YmMyMTA2M2Y="
        }
      }
    ],
    contentHtml: `
      <p class="lead">The Speech Society (TSS) conducted its second official event on 22nd February 2023. This event was held in collaboration with the UEM Jaipur ACM Student Chapter & Department Of Computer Science & Engineering & IIC. This was TSS's first collaboration event and like its previously organised events, 'Tech Talk with Ishan Sharma' was a grand success.</p>

      <p>Mr. Ishan Sharma, the keynote speaker, who is also an inspiration for college students, is the Co-Founder of MarkitUp, a Content Creator, and a YouTuber with 720K+ subscribers. The event began with his felicitation by Prof. (Dr) Aniruddha Mukherjee, Dean, Academics, UEM Jaipur and Prof. (Dr.) Pradeep Sharma, Registrar, UEM Jaipur. A welcome address by the dignitaries then followed the program.</p>

      <p>This event served as an excellent opportunity for the students to learn about the latest trends in AI technology and its future scope in the industry. The students got to hear from the keynote speaker - Mr. Ishan Sharma - about his startup journey and what he learnt from his mistakes throughout his journey.</p>

      <p>Ishan Sharma also narrated his life journey. He traced himself as a normal college student and shared his experiences and ideology during college times, his journey from a general college dropout student to a Youtuber and builder as well as co-founder of a successful company “Markitup”. He shared the methods of growing using AI-based technology like ChatGPT, Futurepedia, and many more. He focused on finding one’s uniqueness in a world full of copycats. He also highlighted the importance of time management in college life and that of building one’s self-confidence.</p>

      <p>There was even a lively Q&A session where attendees were given the opportunity to ask the speaker their burning questions. The audience was inspired and the students benefitted greatly from this event. They were delighted to meet their inspiration in person.</p>

      <p>The organisers of the event- ACM Jaipur Chapter & Department Of Computer Science & Engineering and The Speech Society (TSS) were applauded and highly praised for their efforts and hardwork in making the event a grand success. It was an inspiring session that kept the audience engaged throughout.</p>
    `
  },
  {
    slug: "empowering-women-womens-day",
    title: "Empowering Women: Celebrating International Women's Day with Joy & Purpose",
    date: "Mar 02, 2023",
    dateIso: "2023-03-02",
    image: "/assets/img/blog/blog3.jpg",
    summary: "Reflections on literature, resilience, and womanhood from distinguished poets and authors at the Jingle Convention.",
    authors: [
      {
        name: "Riddhi Agrawal",
        role: "Head Content Writer at TSS, UEMJ",
        image: "/assets/img/blog/riddhi.jpg",
        bio: "BBA student at University of Engineering & Management. Head Content Writer for TSS.",
        social: {
          linkedin: "https://www.linkedin.com/in/riddhiagr",
          instagram: "https://instagram.com/_._riddhi_?igshid=YmMyMTA2M2Y="
        }
      }
    ],
    contentHtml: `
      <p class="lead">In a world where women continue to break barriers and challenge stereotypes, this event, held on 1st March 2023, organised by the Department of English, in association with Dhanika (Women Cell) and The Speech Society, was a testament to the collective effort and commitment of the club members to honour and empower the incredible women in our community.</p>

      <p>In this captivating blog, we will take you through the inspiring moments, thought-provoking discussions, and heartwarming festivities that made this Women's Day celebration an unforgettable experience. Prepare to be inspired by the stories of resilience, courage, and determination shared by influential guest speakers.</p>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Jingle Convention: A Poetic Odyssey</h3>
      <p>The day commenced with a Jingle Convention, a poetic journey that captivated hearts and minds. Many award-winning poets and authors namely Ms Pankhuri Sinha (Bihar), Ms Mili Das (West Bengal), Dr Shalini Yadav (Rajasthan), and Dr Firoz Khan (Rajasthan) were present to mark the event. The event was chaired by Prof. (Dr) Rajul Bhargava, Former Professor, University of Rajasthan. Thoughts on the theme, "Women as the Foundation of a Value-Based Society" were shared.</p>

      <p>The celebration took a poetic turn as talented poets from diverse backgrounds took to the stage to share their heartfelt compositions. Each poem beautifully captured the essence of womanhood, exploring themes of resilience, empowerment, and breaking societal barriers.</p>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Words From Eminent Poets & Scholars</h3>
      <p>Prof (Dr) Rajul Bhargava shared that ours is a world where traditional gender roles often confine women to the kitchen and household chores, however, it is important to recognize and celebrate the immense power and contributions of women in all aspects of life. The kitchen may have been their first school, but their capabilities and aspirations extend far beyond those boundaries. As females, as women, they deserve to be known and acknowledged for their individuality, strength, and accomplishments.</p>

      <p>Ms Pankhuri Sinha shed light on a patriarchal world where women continue to face numerous challenges and prejudices. However, women serve as a reminder of our power to make this world a more loving and equal place. In conclusion, she urged us to rise above our bodies and strive to be recognized as human beings. Elevating the status of women cannot be achieved without elevating the status of all individuals in society.</p>

      <p>Ms Shalini Yadav highlighted that in the realm of sociology, the lives and narratives of strong women play a pivotal role in highlighting preexisting inequalities and advocating for change. Through the works of influential figures like Kiran Desai, Arundhati Roy, and Begum Rokeya, we witness fiery voices that challenge societal norms and empower generations.</p>

      <p>Dr. Firoz Khan added: "Naari bina jeevan chal nahi sakta" (Life cannot thrive without women). Their nurturing nature, wisdom, and resilience contribute to the well-being and growth of individuals and communities at large.</p>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">A Resounding Success</h3>
      <p>Throughout the session, students, participants and listeners together enjoyed powerful, inspirational, and passionate poems on the themes of women, love, life, death and migration. The International Women's Day celebration at UEM Jaipur, organized by The Speech Society, was a resounding success that served as a catalyst for meaningful reflection and positive social change.</p>
    `
  },
  {
    slug: "tech-debate-recap",
    title: "Unveiling the Power of Words: A Recap of the Thrilling 'Tech Debate'",
    date: "Mar 18, 2023",
    dateIso: "2023-03-18",
    image: "/assets/img/blog/blog4.jpg",
    summary: "Clash of intellect, persuasive rhetoric, and intense arguments as 10 teams competed in TechUtopia TechFest.",
    authors: [
      {
        name: "Riddhi Agrawal",
        role: "Head Content Writer at TSS, UEMJ",
        image: "/assets/img/blog/riddhi.jpg",
        bio: "BBA student at University of Engineering & Management. Head Content Writer for TSS.",
        social: {
          linkedin: "https://www.linkedin.com/in/riddhiagr",
          instagram: "https://instagram.com/_._riddhi_?igshid=YmMyMTA2M2Y="
        }
      }
    ],
    contentHtml: `
      <p class="lead">The domain of technology constantly evolves, and what better way to explore its nuances than through a lively debate? The recent 'Tech Debate' organized by the Speech Society at UEMJ was an electrifying event that brought together tech enthusiasts and eloquent minds on March 18, 2023. This engaging affair, held as part of the TechUtopia UEMJ TechFest, proved to be a battleground of ideas and a celebration of intellect.</p>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">TechUtopia UEMJ TechFest: Where Minds Clash and Ideas Ignite</h3>
      <p>In this event, a total of 10 teams registered for the event out of which 8 teams were from different streams of UEM Jaipur and 2 teams were from Govt ITI College, Chomu. Contestants participated in four rounds of intense debates, showcasing their articulation, critical thinking, and persuasive argumentation skills.</p>

      <div class="my-6 grid sm:grid-cols-3 gap-4">
        <div class="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
          <div class="text-brand-600 font-bold text-lg mb-1">1st Place</div>
          <div class="text-gray-900 font-semibold">Team Smarticles</div>
        </div>
        <div class="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
          <div class="text-brand-600 font-bold text-lg mb-1">2nd Place</div>
          <div class="text-gray-900 font-semibold">Team Exaudio</div>
        </div>
        <div class="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
          <div class="text-brand-600 font-bold text-lg mb-1">3rd Place</div>
          <div class="text-gray-900 font-semibold">Team Arbitrators</div>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Rewards Galore: Acknowledging Talent</h3>
      <p>One of the highlights of this exhilarating event was the acknowledgement bestowed upon the participants. Regardless of the debate's outcome, everyone received recognition. Laptop stickers were distributed to all participants as a memento.</p>

      <p>Winners were awarded physical certificates alongside cash prizes celebrating their exceptional debating skills. Moreover, every participant received a participation certificate acknowledging their dedication.</p>

      <p>TSS extends sincere gratitude to our faculty coordinators and judges for their continuous support: <strong>Prof. (Dr) Mukesh Yadav</strong>, <strong>Prof. KV Kuriakose</strong>, and <strong>Prof. Krishna Kumar Sharma</strong>.</p>
    `
  },
  {
    slug: "induction-event-2023",
    title: "Induction Event: Unveiling New Potential",
    date: "Aug 07, 2023",
    dateIso: "2023-08-07",
    image: "/assets/img/blog/blog5.jpg",
    summary: "Welcoming the new batch of enthusiastic freshers with improv icebreakers, leadership addresses, and Toastmasters integration.",
    authors: [
      {
        name: "Pulkit Kumar Verma",
        role: "Content Writer & Web Developer at TSS, UEMJ",
        image: "/assets/img/blog/pulkit.jpg",
        bio: "B.Tech (CSE) student passionate about writing, coding and colors. Content Writer & Web Developer at TSS.",
        social: {
          linkedin: "https://www.linkedin.com/in/pulkitkrverma",
          instagram: "https://www.instagram.com/pk_verma1823/"
        }
      }
    ],
    contentHtml: `
      <p class="lead">The dawn of a new academic year brings a sense of new beginnings, an opportunity for students to embark on a path of growth, discovery, and fellowship. The Speech Society (TSS) successfully coordinated an awe-inspiring “Induction Event” for excited first-year students at the heart of this enthusiasm.</p>

      <p>The Induction Ceremony brought joy and happiness to the hearts of freshers. Ashmit Palit began the festivities by greeting first-year students. The event was followed by an opening address by the TSS faculty coordinator Prof. Dr. Mukesh Yadav.</p>

      <p>Prof. (Dr.) Pradeep Kumar Sharma, Dr. Snehlata Dhaka, and Sanchari Basak, together with hundreds of students, saw the remarkable event successfully presented by TSS. Dr. Mukesh Yadav emphasized the English Department's goal and motivation in their educational program.</p>

      <p>He introduced everyone to The Speech Society's founder, Alok Agrawal, and co-founder, Somen Halder, and appreciated everyone for coming up with innovative ideas. He also introduced Rimi Majumdar (now in her second year of B.Tech), who was one of the few first-year students whose research paper was featured in ICALES 2022. The TSS faculty coordinator also announced the Toastmasters integration into TSS led by the English department.</p>

      <p>Founder Alok Agarwal took the stage and described TSS's journey, the road taken to make it a reality, and the fond memories of Aarambh. An interactive Improv Game was conducted where participants had to reply only in questions, breaking the ice and sparking lively laughter.</p>

      <p>Sayantani Dey won the game, and Stuti Modak, Shibagni Mahajan, Arka Mahajan, and Anjishnu Mallick earned honours. Sagnik Dey and Rahul Yadav were among those who interacted most and received surprise gifts.</p>
    `
  },
  {
    slug: "toastmasters-journey",
    title: "Introductory Session to Toastmasters: Embark on a Journey of Effective Communication & Leadership",
    date: "Dec 01, 2023",
    dateIso: "2023-12-01",
    image: "/assets/img/blog/blog6.jpg",
    summary: "Insights and takeaways from our collaborative session with delegates and leaders from Rajasthan Toastmasters Club.",
    authors: [
      {
        name: "Tanish Sunita Pareek",
        role: "Content Writer at TSS, UEMJ",
        image: "/assets/img/blog/tanish.jpg",
        bio: "BCA student currently exploring inner potential on the basis of values, public speaking and continuous personal growth.",
        social: {
          linkedin: "http://www.linkedin.com/in/tanish-pareek-564b83293",
          instagram: "https://www.instagram.com/tanish_sunita_pareek?igsh=Y2x2ZTZwNWhsNDdx"
        }
      }
    ],
    contentHtml: `
      <p class="lead">In today's world, effective communication and leadership skills are crucial for personal and professional success. Toastmasters International provides a supportive and empowering platform for individuals to enhance these skills and become confident communicators and leaders. On 1st December 2023, University of Engineering & Management, Jaipur proudly hosted an Introductory session to provide an overview of the Toastmasters experience.</p>

      <p>Toastmasters is a global organization dedicated to empowering individuals to become more effective communicators and leaders. Through structured meetings, members have the opportunity to practice public speaking, improve listening skills, provide constructive feedback, and develop leadership abilities.</p>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Core Benefits of Toastmasters</h3>
      <ul class="list-disc pl-6 space-y-2 text-gray-600">
        <li><strong>Improved Public Speaking Skills:</strong> A safe and supportive environment to practice speaking in front of an audience, gradually conquering stage anxiety.</li>
        <li><strong>Enhanced Listening Skills:</strong> Active listening to understand diverse viewpoints and provide actionable evaluations.</li>
        <li><strong>Leadership Development:</strong> Real roles managing parliamentary agenda, timing, and speech evaluations.</li>
        <li><strong>Global Networking:</strong> Connecting with passionate speakers and leaders worldwide.</li>
      </ul>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Distinguished Guests & Dignitaries</h3>
      <p>On this memorable day, Mr. Vishal Garg (Division Director, Rajasthan Toastmasters Club), Mr. Shashikant Agarwal (Ex-VP Education, Jaipur Toastmasters Club), Ms. Khushi Khandelwal (President, Rajasthan Toastmasters Club), Ms. Kirandeep Kaur (Area Director), and Mr. Shiv Chaturvedi graced the event as esteemed speakers.</p>

      <p>Participants left the session motivated and excited to embark on their journey of confident articulation and impactful leadership through Toastmasters.</p>
    `
  }
];
