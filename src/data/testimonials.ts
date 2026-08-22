export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  social?: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
  };
  shortQuote: string;
  fullQuote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "kushal-vijay",
    name: "Kushal Vijay",
    role: "Software Engineer 2 @ Microsoft",
    image: "/assets/img/testimonials/khushal-vijay.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/kushalvijay/?originalSubdomain=in",
      instagram: "https://www.instagram.com/kushal_vijay_/?hl=en"
    },
    shortQuote: "I had an incredible time interacting with the vibrant minds at University of Engineering & Management - Jaipur. Engaging with the 2nd and 3rd-year students was both enlightening and inspiring. We delved into a myriad of topics ranging from career pathways to the impact of AI on jobs.",
    fullQuote: "I had an incredible time interacting with the vibrant minds at University of Engineering & Management - Jaipur. Engaging with the 2nd and 3rd-year students was both enlightening and inspiring. We delved into a myriad of topics ranging from career pathways to the impact of AI on jobs. Despite the current challenges in the job market, the enthusiasm and curiosity of the students were truly commendable. I'm grateful for the warm hospitality extended by the faculty and the organizing team. It was a pleasure being a part of such a well-organized event. Thank you for the opportunity to share insights and learn from this talented group of individuals. 🙏🏼❤"
  },
  {
    id: "mukesh-yadav",
    name: "Prof. Dr. Mukesh Yadav",
    role: "Faculty Coordinator, TSS & Associate Dean (Academics & Foreign Relations) at UEM Jaipur",
    image: "/assets/img/testimonials/mukesh-yadav.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/dr-mukesh-y-a6513b19/",
      facebook: "https://www.facebook.com/mukesh.yadav.374"
    },
    shortQuote: "I am delighted to share my experience with The Speech Society, which has played a pivotal role in students’ personal growth and encouraged students to think, script and speak confidently. The Speech Society has transformed many students from a terrified speaker to a confident one.",
    fullQuote: "I am delighted to share my experience with The Speech Society, which has played a pivotal role in students’ personal growth and encouraged students to think, script and speak confidently. The Speech Society has transformed many students from a terrified speaker to a confident one. I am eternally grateful for joining The Speech Society as it has made me feel victorious and ready to take up any challenge beforehand. The fabulous work done by The Speech Society in shaping the lives of students is commendable.\n\nAs a mentor, I have had the joy of witnessing the smiling faces of young aspirants who have achieved great milestones right in their first year of joining the University. The TSS team thinks beyond limits and works beyond imagination. They put their entire energy into making things happen their way. Their indomitable spirit, boundless energy, and great zest to bring drastic changes in people's lives are truly inspiring. It's rare to see such enthusiasm in a unified team, and I am proud to be a part of it.\n\nI would like to make a special mention of Alok Agarwal, President of The Speech Society. It is his brainchild, and he is leading TSS upfront with his exemplary leadership skills. I wish the entire TSS team more success and laurels in the future. Overall, I highly recommend The Speech Society to anyone who wants to develop their communication skills, boost their confidence and achieve personal growth. My best wishes to the entire TSS team!"
  },
  {
    id: "gaurav-jain",
    name: "Gaurav Jain",
    role: "Electrical Engineer",
    image: "/assets/img/testimonials/gaurav-jain.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/gaurav-jain-92ba22206/",
      instagram: "https://www.instagram.com/gaurav.jain.14/"
    },
    shortQuote: "I was in the team for the demo meeting of Toastmasters at UEM college. The event was great. We were warmly welcomed. Authorities were supportive and gentle.",
    fullQuote: "I was in the team for the demo meeting of Toastmasters at UEM college. The event was great. We were warmly welcomed. Authorities were supportive and gentle. We were taken to the basement hall where the event would happen. Volunteers did a great job in coordinating us and managing events. Students were curious and interactive throughout the event. Overall, it was a great experience with the TSS team at UEM college."
  },
  {
    id: "khushi-khandelwal",
    name: "Khushi Khandelwal",
    role: "LinkedIn Growth Expert",
    image: "/assets/img/testimonials/kushi-kandelwal.jpg",
    social: {
      instagram: "https://www.instagram.com/thekhushikhandelwal"
    },
    shortQuote: "Thank you, UEM College, for providing us with an enriching experience. All your students and faculties were welcoming. I genuinely felt respected and honored.",
    fullQuote: "Thank you, UEM College, for providing us with an enriching experience. All your students and faculties were welcoming. I genuinely felt respected and honored. I'm grateful for all the appreciation and love I received after giving my speech. It was one of the best experiences I've ever had, conducting a workshop at UEM. Eagerly awaiting more opportunities to deliver value to students at UEM. Thank you so much everyone from the bottom of my heart!"
  },
  {
    id: "vishal-garg",
    name: "Vishal Garg",
    role: "Toastmasters Delegate",
    image: "/assets/img/testimonials/vishal-garg.jpg",
    social: {
      instagram: "https://www.instagram.com/vishal.garg13"
    },
    shortQuote: "Conducting a Toastmasters session at UEM Jaipur was a rewarding experience. The students’ enthusiasm and eagerness to learn were commendable.",
    fullQuote: "Conducting a Toastmasters session at UEM Jaipur was a rewarding experience. The students’ enthusiasm and eagerness to learn were commendable. UEM Jaipur stands out for its commitment to nurturing effective communication skills while providing a vibrant platform for growth. Kudos to the college management for fostering an environment that encourages self-expression and development."
  },
  {
    id: "shiv-chaturvedi",
    name: "Shiv Chaturvedi",
    role: "Public Speaking Coach | Business Development Manager",
    image: "/assets/img/testimonials/shiv-chaturvedi.jpg",
    social: {
      instagram: "https://www.instagram.com/shiv__chaturvedi"
    },
    shortQuote: "Attending the Toastmasters demo meeting at UEM College was an exceptional experience. The warm welcome and incredible energy of the participants created an engaging atmosphere.",
    fullQuote: "Attending the Toastmasters demo meeting at UEM College was an exceptional experience. The warm welcome and incredible energy of the participants created an engaging atmosphere. I was impressed by their strong focus on learning and personal development. My sincere best wishes to all, and thank you for a memorable time."
  }
];
