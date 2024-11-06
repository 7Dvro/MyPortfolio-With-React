/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "7Dvro",
  title: "Hi all, I'm Mohamed",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1fTrP39iUMwGBAfbwHrZpjK1UPsfXtLhL/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/7Dvro",
  linkedin: "https://www.linkedin.com/in/mohamed-elrais-257ab1241/",
  gmail: "mohemadmuzamil@gmail.com",
  gitlab: "https://github.com/7Dvro",
  facebook: "https://www.facebook.com/mohamed.muzamel.54/",
  medium: "https://medium.com/@7Dvro",
  stackoverflow: "https://stackoverflow.com/users/20082541/mohemad-muzamil",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    
    {
      skillName: "flutter",
      fontAwesomeClassname: "fab fa-flutter"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "International University of Africa",
      logo: require("./assets/images/images/IUA Logo.png"),
      alt_name: "IUA",
      subHeader: "Master of Science in Computer Science",
      duration: "September 2023 - Present",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "⚡ I have undergone comprehensive training in key information security areas, including network security, cryptography, algorithms, and an in-depth exploration of operating systems..etc.",
       ],
    },
    {
      schoolName: "Alsalama collage of science and technology",
      logo: require("./assets/images/images/ACST.png"),
      alt_name: "ACST",
      subHeader: "Bachelor of Science in Information Technology",
      duration: "September 2018 - September 2022",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "⚡ I have completed extensive coursework in core IT subjects, including programming, algorithms, databases, operating systems, networking, information security, and artificial intelligence..etc.",
        "⚡ Apart from this, I also pursued specialized courses in Networking, Information Security, Data Science, Cloud Computing and Full-stack Software Development.",
        "⚡ I was honored to receive a Masters scholarship at the International University of Africa, where I also had the opportunity to serve as a teaching assistant in the School of Computer Studies. These experiences have allowed me to achieve numerous milestones in my academic and professional journey.",
      ],
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "PenTest", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Bugs Hunting", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Networking", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Web-mobile Apps Frontend/Backend", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IT Manager",
      company: "AFM - Alsifa Flour Mills.",
      companylogo: require("./assets/images/images/afm.png"),
      date: "August 2023 – Present",
      desc: "Job Details",
      descBullets: [
       "IT Manager, Data Analyst, Web and Mobile Application Development Specialist with expertise in Information Security, Strategic Planning and Website Management. Committed to applying technical and managerial skills to succeed in dynamic business environments."
     ]
    },
    {
      role: "Teaching Assistant",
      company: " IUA - International University of Africa",
      companylogo: require("./assets/images/images/IUA Logo.jpg"),
      date: "January 2023 – Present",
      desc: "Teaching Details",
      descBullets: [
        "Teach programming principles and languages including Java and JavaScript.",
        "Instruct on database management using MySQL."
      ]
    },
    {
      role: "HR Employee",
      company: "AFM - Alsifa Flour Mills.",
      companylogo: require("./assets/images/images/afm.png"),
      date: "May 2024 – Present",
      desc: "Job Details",
      descBullets: [
        "Completing and entering employee data into the electronic archive, creating a paper archive, and drafting questionnaires to support work development."      ]
    },
    {
      role: "Server Management (CS College)",
      company: " IUA - International University of Africa",
      companylogo: require("./assets/images/images/IUA Logo.jpg"),
      date: "January 2023 – Present",
      desc: "Job Details",
      descBullets: [
        "Providing technical support at the college, managing the internal network and computer labs, and setting up a local server for student training.",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/images/saqs.png"),
      projectName: "Sadiq Al-Taj Quranic Primary School",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://satqs1.odoo.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/images/Final.png"),
      projectName: "Portfolio",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://muzamilelrais.net/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [
      {
        title: "Ethical Hacker Certificate",
        subtitle:
          "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
        image: require("./assets/images/images/ethical-hacker.png"),
        imageAlt: "Cisco Ethical Hacker Certificate Logo",
        footerLink: [
          {
            name: "Certification",
            url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
          },
          {
            name: "Award Letter",
            url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
          },
          {
            name: "Google Code-in Blog",
            url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
          }
        ]
      },
      {
        title: "Network Support & Security Certificate",
        subtitle:
          "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
        image: require("./assets/images/images/network-support-and-security.png"),
        imageAlt: "CiSco Network Support & Security Certificate Logo",
        footerLink: [
          {
            name: "View Google Assistant Action",
            url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
          }
        ]
      },
      {
        title: "Operting systems Basics Certificate",
        subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
        image: require("./assets/images/images/cisco-operating-systems-basics.png"),
        imageAlt: "PWA Logo",
        footerLink: [
          {name: "Certification", url: ""},
          {
            name: "Final Project",
            url: "https://pakistan-olx-1.firebaseapp.com/"
          }
        ]
      },
      {
        title: "Introduction to Cybersecurity Certificate",
        subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
        image: require("./assets/images/images/cisco-introduction-to-cybersecurity.png"),
        imageAlt: "Cisco Introduction to Cybersecurity Certificate Logo",
        footerLink: [
          {name: "Certification", url: ""},
          {
            name: "Final Project",
            url: "https://pakistan-olx-1.firebaseapp.com/"
          }
        ]
      },
      {
        title: "Network Technician Certificate",
        subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
        image: require("./assets/images/images/cisco-network-technician-career-path.png"),
        imageAlt: "Cisco Introduction to Cybersecurity Certificate Logo",
        footerLink: [
          {name: "Certification", url: ""},
          {
            name: "Final Project",
            url: "https://pakistan-olx-1.firebaseapp.com/"
          }
        ]
      },
    ],
    display: true // Set false to hide this section, defaults to true
};
  
// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/mohamed.muzamel.54/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+249-128233909",
  email_address: "mohemadmuzamil@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "vRo_1_", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
