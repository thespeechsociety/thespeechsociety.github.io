export interface TeamMember {
  name: string;
  role: string;
  category: "Leadership & Faculty" | "Core Team" | "Heads" | "Student Coordinators" | "Past Team";
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Prof. Dr. Mukesh Yadav",
    role: "Faculty Coordinator",
    category: "Leadership & Faculty",
    image: "/assets/img/team/info/mukesh-yadav.jpg"
  },
  {
    name: "Dr Snehalata Dhaka",
    role: "Faculty Coordinator",
    category: "Leadership & Faculty",
    image: "/assets/img/team/info/Dr_Snehalata_Dhaka.jpg"
  },
  {
    name: "Alok Agarwal",
    role: "Founder",
    category: "Leadership & Faculty",
    image: "/assets/img/team/info/alok-agarwal.png"
  },
  {
    name: "Somen Halder",
    role: "Co-Founder",
    category: "Leadership & Faculty",
    image: "/assets/img/team/info/Somen_Halder.jpg"
  },
  {
    name: "Souvik Chowdhury",
    role: "President",
    category: "Core Team",
    image: "https://avatars.githubusercontent.com/u/141899070?v=4"
  },
  {
    name: "Somnath Das",
    role: "Vice President",
    category: "Core Team",
    image: "https://avatars.githubusercontent.com/u/176694812?v=4"
  },
  {
    name: "Sujoy Moulick",
    role: "Web Developer",
    category: "Core Team",
    image: "https://avatars.githubusercontent.com/u/177207941?v=4"
  },
  {
    name: "Arnab Basak",
    role: "Web Developer",
    category: "Core Team",
    image: "https://avatars.githubusercontent.com/u/177306006?v=4"
  },
  {
    name: "Piyush Kumar Rai",
    role: "Technical Head",
    category: "Heads",
    image: "/assets/img/team/info/Piyush_Kumar_Rai.jpg"
  },
  {
    name: "Abhijit Dubey",
    role: "Graphics Head",
    category: "Heads",
    image: "/assets/img/team/info/Abhijit_Dubey.png"
  },
  {
    name: "Ashmit Palit",
    role: "Head Speaker",
    category: "Heads",
    image: "/assets/img/team/info/Ashmit_Palit.jpg"
  },
  {
    name: "Riddhi Agrawal",
    role: "Content Writing Head",
    category: "Heads",
    image: "/assets/img/team/info/Riddhi_Agrawal.png"
  },
  {
    name: "Rimi Majumdar",
    role: "Public Relations Head",
    category: "Heads",
    image: "/assets/img/team/info/Rimi_Majumder.jpg"
  },
  {
    name: "Kanjari Bhattacharya",
    role: "Operations Head",
    category: "Heads",
    image: "/assets/img/team/info/Kanjari_Bhattacharyya.jpg"
  },
  {
    name: "Shanu Singh",
    role: "Operation Co-Head | Photographer",
    category: "Heads",
    image: "/assets/img/team/info/Shanu_Singh.jpg"
  },
  {
    name: "Aritra Sanyal",
    role: "Photography Head",
    category: "Heads",
    image: "/assets/img/team/info/Aritra_Sanyal.jpg"
  },
  {
    name: "Shashank Singh",
    role: "Social Media Head",
    category: "Heads",
    image: "/assets/img/team/info/Shashank_Singh.jpg"
  },
  {
    name: "Yashwant Sahay",
    role: "Mentor",
    category: "Leadership & Faculty",
    image: "/assets/img/team/info/Yashwant_Sahay.png"
  },
  {
    name: "Akash Bera",
    role: "Videography Head",
    category: "Heads",
    image: "/assets/img/team/info/Akash_Bera.png"
  },
  {
    name: "Bhumika Biswas",
    role: "Creative Team Co-Head",
    category: "Heads",
    image: "/assets/img/team/info/bhumika_biswas.jpg"
  },
  {
    name: "Aditi Das",
    role: "Creative Team Co-Head",
    category: "Heads",
    image: "/assets/img/team/info/Aditi_Das.jpg"
  },
  {
    name: "Stuti Modak",
    role: "Student Coordinator | TSS Trainee",
    category: "Student Coordinators",
    image: "/assets/img/team/info/Stuti_Modak.jpg"
  },
  {
    name: "Sagnik Dey",
    role: "Student Coordinator | TSS Trainee",
    category: "Student Coordinators",
    image: "/assets/img/team/info/sagnik_dey.jpg"
  },
  {
    name: "Prashant Halder",
    role: "Student Coordinator - BPT",
    category: "Student Coordinators",
    image: "/assets/img/team/info/prashant_halder.jpg"
  },
  {
    name: "Kashish Singh",
    role: "Event Management",
    category: "Past Team",
    image: "/assets/img/team/info/Kashish_Singh.jpg"
  },
  {
    name: "Ankan Biswas",
    role: "Event Management",
    category: "Past Team",
    image: "/assets/img/team/info/Ankan_biswas.jpg"
  },
  {
    name: "Sankalp Singh",
    role: "Event Management",
    category: "Past Team",
    image: "/assets/img/team/info/Sankalp_Singh.jpg"
  },
  {
    name: "Jiya Saraf",
    role: "Technical Team",
    category: "Past Team",
    image: "/assets/img/team/info/jiya_saraf.jpg"
  },
  {
    name: "Pulkit Kumar Verma",
    role: "Content Writer | Web Developer",
    category: "Past Team",
    image: "/assets/img/team/info/Pulkit_Kumar.jpg"
  },
  {
    name: "Gourav Kumar Singh",
    role: "Debate Master",
    category: "Past Team",
    image: "/assets/img/team/info/Gourav_Kumar_Singh.jpg"
  },
  {
    name: "Souryajyoti Chakraborty",
    role: "Speaker",
    category: "Past Team",
    image: "/assets/img/team/info/Sourajyoti_Chakraborty.jpg"
  },
  {
    name: "Aman Anand",
    role: "Event Management",
    category: "Past Team",
    image: "/assets/img/team/info/AMAN_ANAND.png"
  },
  {
    name: "Arayan Shaw",
    role: "Event Management",
    category: "Past Team",
    image: "/assets/img/team/info/Aryan_Shaw.jpg"
  },
  {
    name: "Aaditya Banala",
    role: "Content Writer",
    category: "Past Team",
    image: "/assets/img/team/info/Aaditya_Banala.jpg"
  },
  {
    name: "Gargi Biswas",
    role: "Event Management",
    category: "Past Team",
    image: "/assets/img/team/info/Gargi_Biswas.jpg"
  },
  {
    name: "Yuvraj Kumawat",
    role: "Event Management",
    category: "Past Team",
    image: "/assets/img/team/info/Yuvraj_Kumawat.jpg"
  },
  {
    name: "Biswanath Mukherjee",
    role: "Web Developer",
    category: "Past Team",
    image: "/assets/img/team/info/Biswnath_Mukherjee.jpg"
  },
  {
    name: "Payal Chandel",
    role: "Event Management",
    category: "Past Team",
    image: "/assets/img/team/info/Payal_Chandel.jpg"
  },
  {
    name: "Aradhy Gaur",
    role: "Technical Team | TSS Trainee",
    category: "Past Team",
    image: "/assets/img/team/info/Aaradhy_Gaur.jpg"
  },
  {
    name: "Biraj Bhattacharya",
    role: "Speaker",
    category: "Past Team",
    image: "/assets/img/team/info/Biraj_Bhattacharya.jpg"
  },
  {
    name: "Ankshika Ghosh",
    role: "Social Media Manager",
    category: "Past Team",
    image: "/assets/img/team/info/Ankshika_Ghosh.jpg"
  },
  {
    name: "Supratim Modak",
    role: "Media Team",
    category: "Past Team",
    image: "/assets/img/team/info/supratim_Modak.jpg"
  },
  {
    name: "Rakesh Bangra",
    role: "Graphics Team",
    category: "Past Team",
    image: "/assets/img/team/info/Rakesh_Bangra.jpg"
  },
  {
    name: "Arka Mahajan",
    role: "TSS Trainee",
    category: "Past Team",
    image: "/assets/img/team/info/Arka_Mahajan.jpg"
  },
  {
    name: "Dikansha Bindal",
    role: "Content Writer | Speaker",
    category: "Past Team",
    image: "/assets/img/team/info/Dikansha_Bindal.jpg"
  },
  {
    name: "Shibagni Bhattacharjee",
    role: "Technical Team | Content Writer",
    category: "Past Team",
    image: "/assets/img/team/info/shibagni_Bhattacharjee.jpg"
  },
  {
    name: "Jyoti Rai",
    role: "Speaker | Content Writer",
    category: "Past Team",
    image: "/assets/img/team/info/Jyoti_Rai.jpg"
  },
  {
    name: "Palak Sharma",
    role: "Speaker",
    category: "Past Team",
    image: "/assets/img/team/info/Palak_Sharma.jpg"
  },
  {
    name: "Debrup Banik",
    role: "Technical Team",
    category: "Past Team",
    image: "/assets/img/team/info/debrup_banik.jpg"
  },
  {
    name: "Deepika Gupta",
    role: "TSS Trainee",
    category: "Past Team",
    image: "/assets/img/team/info/Deepika_Gupta.jpg"
  },
  {
    name: "Keshav Bhardwaj",
    role: "Speaker",
    category: "Past Team",
    image: "/assets/img/team/info/Keshav_Bhardwaj.jpg"
  },
  {
    name: "Radhika Saini",
    role: "TSS Trainee",
    category: "Past Team",
    image: "/assets/img/team/info/radhika_saini.jpg"
  },
  {
    name: "Sohit Kumawat",
    role: "TSS Trainee",
    category: "Past Team",
    image: "/assets/img/team/info/Sohit_Kumawat.jpg"
  },
  {
    name: "Tanisha Jangid",
    role: "Speaker",
    category: "Past Team",
    image: "/assets/img/team/info/Tanisha_Jangid.jpg"
  },
  {
    name: "Abhishek Gupta",
    role: "TSS Trainee",
    category: "Past Team",
    image: "/assets/img/team/info/Abhishek_Gupta.jpg"
  }
];
