import isales from '../../assets/experience/logos/ringy-logo.svg';
import hpe from '../../assets/experience/logos/HPE.svg';
import pelco from '../../assets/experience/logos/pelco_blue.png';
import usbank from '../../assets/experience/logos/usbank.png';

import extralife from '../../assets/experience/logos/extralife.png';
import csu from '../../assets/experience/logos/CSU.png';

// import acmw1 from '../../assets/experience/acmw1.jpg';
// import acmw2 from '../../assets/experience/acmw2.jpg';
// import acmw3 from '../../assets/experience/acmw3.png';
// import acmw4 from '../../assets/experience/acmw4.jpg';

import puzzle1 from '../../assets/experience/mandalapuzzle.jpg';
import puzzle2 from '../../assets/experience/bikepuzzle.jpg';
import puzzle3 from '../../assets/experience/turtlepuzzle.jpg';
import earrings from '../../assets/experience/tarotearrings.jpg';
import fruitearrings from '../../assets/experience/fruitearrings.jpg'

import escaperoommirrorcam from '../../assets/experience/escaperoommirrorcam.jpg';
import escaperoomskullpuzzle from '../../assets/experience/escaperoomskullpuzzle.jpg';
import escaperoomhallway from '../../assets/experience/escaperoomhallway.jpg';


// import extralife1 from '../../assets/experience/extralife1.jpg';
import { ReactNode } from 'react';

export interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  dates: string;
  logo?: string;
  images?: {
    title: string;
    images: {
      src: string;
      alt: string;
      description?: string;
    }[];
  }[];
  technologies: string[];
  description: ReactNode;
  link?: string;
}

export const professional: ExperienceItem[] = [
  {
    company: "U.S. Bank",
    position: "Full Stack Software Engineer",
    location: "Remote",
    dates: "July, 2023 - Today",
    logo: usbank,
    images: [],
    technologies: ["Typescript", "ReactJS", "Redux-Saga", "Java", "SQL", "Figma"],
    description: 
    <ul>
      <li>Collaborates with numerous engineering teams from different products and parts of the world in order to integrate Bento software with the existing financial systems at U.S. Bank with a high attention to security and compliance requirements</li>
      <li>Works and communicates effectively on a fully remote team of engineers at varying experience levels and provides mentorship and onboarding support to junior developers and new hires</li>
      <li>Implements efficient modular interfaces from prototypes and works closely with product and design teams to identify undefined requirements and give feedback on engineering needs</li>
      <li>Writes thorough documentation on processes and features that is actively referenced by product owners and developers throughout the company</li>
    </ul>,
    
    // <div>
    //   I am currently a Front End Software Engineer at iSalesCRM on a small but effective engineering team. The company 
    //   is at a critical point of growth as it takes its success and revenue and pours it back into the engineering 
    //   department and the progress of the company on the whole. Joining the company at this stage has given me a unique 
    //   perspective on transitioning from a small to a medium sized company, and more importantly, on how that change 
    //   affects the software. My position gives me the opportunity to influence the direction of our system’s architecture 
    //   and design, while also learning from the decisions of the more experienced developers around me.
    //   <br/><br/>
    //   I get to work on large features solo or collaboratively with senior developers at the company and I am constantly 
    //   learning how to tackle new problems that arise with scaling applications. I have the creative freedom to make my 
    //   own design choices as I work on new elements and the trust and respect from my superiors to offer suggestions and 
    //   ideas about important aspects of our software.
    // </div>,
    link: "usbank.com"
  },
  {
    company: "Freelance Work",
    position: "Engineer and Artist",
    location: "Fort Collins, Colorado",
    dates: "November, 2022 - July, 2023",
    images: [
      {title: "ConTRAPtions Escape Room", images: [{src: escaperoommirrorcam, alt:"Laser engraved tarot card charms"}, {src: escaperoomskullpuzzle, alt:"Laser engraved tarot card charms"},
        {src: escaperoomhallway, alt:"Laser engraved tarot card charms"}
      ]},
      {title: "Engraved mandala puzzle during cutting", images: [{src: puzzle1, alt:"Engraved mandala puzzle during cutting"}]}, 
      {title: "Photo vector puzzle", images: [{src: puzzle3, alt:"Photo vector puzzle"}]},
      {title: "Laser engraved tarot card charms", images: [{src: earrings, alt:"Laser engraved tarot card charms"}]},
      {title: "Laser cut lemon and strawberry earrings", images: [{src: fruitearrings, alt: "Laser cut lemon and strawberry earrings"}]}, 
      {title: "Hand painted jigsaw puzzle", images: [{src: puzzle2, alt:"Hand painted jigsaw puzzle"}]}

    ],
    technologies: ["Javascript", "Python", "IoT", "Lightburn", "Inkscape"],
    description: 
    <ul>
      <li>
        Constructed and developed for an enclosed Raspberry Pi system and peripherals to be used in a local escape room to synchronize room behavior with audio effects with physical, signal, and API triggered interface options.
      </li>
      <li>Illustrated and fabricated jigsaw puzzles, jewelry, and other trinkets using a laser cutter and vector graphics software.</li>
    </ul>,
    
    // <div>
    //   I am currently a Front End Software Engineer at iSalesCRM on a small but effective engineering team. The company 
    //   is at a critical point of growth as it takes its success and revenue and pours it back into the engineering 
    //   department and the progress of the company on the whole. Joining the company at this stage has given me a unique 
    //   perspective on transitioning from a small to a medium sized company, and more importantly, on how that change 
    //   affects the software. My position gives me the opportunity to influence the direction of our system’s architecture 
    //   and design, while also learning from the decisions of the more experienced developers around me.
    //   <br/><br/>
    //   I get to work on large features solo or collaboratively with senior developers at the company and I am constantly 
    //   learning how to tackle new problems that arise with scaling applications. I have the creative freedom to make my 
    //   own design choices as I work on new elements and the trust and respect from my superiors to offer suggestions and 
    //   ideas about important aspects of our software.
    // </div>,
  },
  {
    company: "Ringy",
    position: "Senior Front End Software Engineer",
    location: "Denver, Colorado",
    dates: "April, 2020 - November, 2022",
    logo: isales,
    images: [],
    technologies: ["Node.js", "Typescript", "ReactJS", "Redux-Saga", "SQL"],
    description: 
    <ul>
      <li> Maintained and developed for a Node/ReactJS customer relationship management system (Ringy) that improved results for thousands of sales agents through automated marketing tactics
      </li>
      <li>Lead migration effort to move state and side-effect logic throughout codebase from Redux-Saga to React-Query </li>
      <li>Identified and creatively redesigned sticking points in user experience by understanding analytics on use patterns as well as first-hand accounts from clients and support staff</li>
      <li>Collaborated with senior engineers on major application design decisions, both visual and architectural, to determine code standards, plan features and refactoring efforts, and map out new microservice interactions</li>
      <li>Designed workflow and visual presentation for new and exciting products and features; independently produced client side of a modern video conferencing application (Scopey) for integration with primary product</li>
      <li>Promoted to senior after only eighteen months, in recognition of senior level performance and responsibilities  </li>
    </ul>,
    
    // <div>
    //   I am currently a Front End Software Engineer at iSalesCRM on a small but effective engineering team. The company 
    //   is at a critical point of growth as it takes its success and revenue and pours it back into the engineering 
    //   department and the progress of the company on the whole. Joining the company at this stage has given me a unique 
    //   perspective on transitioning from a small to a medium sized company, and more importantly, on how that change 
    //   affects the software. My position gives me the opportunity to influence the direction of our system’s architecture 
    //   and design, while also learning from the decisions of the more experienced developers around me.
    //   <br/><br/>
    //   I get to work on large features solo or collaboratively with senior developers at the company and I am constantly 
    //   learning how to tackle new problems that arise with scaling applications. I have the creative freedom to make my 
    //   own design choices as I work on new elements and the trust and respect from my superiors to offer suggestions and 
    //   ideas about important aspects of our software.
    // </div>,
    link: "ringy.com"
  },
  {
    company: "Hewlett Packard Enterprise",
    position: "Software Development Intern",
    location: "Fort Collins, Colorado",
    dates: "Summer, Fall 2019",
    logo: hpe,
    // images: [{title: "Lumberjack, a log processor", images: [{src: lumberjack, caption:"Lumberjack"}]}],
    technologies: ['C#', 'Node.js', 'ReactJS', 'GraphQL', 'PostgresQL'],
    description: 
    <ul>
      <li>Saved hours of developer time during triage by creating a tool for the visualization and navigation of log files</li>
      <li>Parsed log information from 100,000+ line log files, stored and accessed data using PostgreSQL and GraphQL</li>
      <li>Intuitively displayed data in a locally hosted ReactJS web application; log entries follow the chronological flow of system activity and allow users to filter for more relevant events</li>
    </ul>,
    // <div>
    //   At the beginning of my HPE internship, I was given a problem: too much developer time was being spent combing through 
    //   log files from multiple systems, each with 100k+ lines. I was given creative control to solve this problem and over a 
    //   six month period, I developed Lumberjack (so titled because it broke down logs).
    //   <br/><br/>
    //   Lumberjack was a log processing service I wrote for Hewlett Packard Enterprise. It was one of my first experiences 
    //   designing an application end to end and it consisted of three main parts: a robust C# parsing system that processed new 
    //   logs every night, a PostgresQL database to store the parsed information and a Node GraphQL server to access it, and the 
    //   ReactJS interface built to display linked events in a flow that accurately emulated data flow across multiple machines 
    //   working off of different time servers.
    // </div>,
    link: "hpe.com"
  },
  {
    company: "Pelco",
    position: "Software Quality Assurance Intern",
    location: "Fort Collins, Colorado",
    dates: "Summer, Fall 2018",
    logo: pelco,
    images: [],
    technologies: ['Python', 'Robot Framework'],
    description: 
    <ul>
      <li>Automated API testing for a security video management system using Python and Robot Framework among a team of full time engineers working in an agile environment</li>
      <li>Performed manual API and UX testing for interfacing with camera firmware</li>
    </ul>
   
    ,
    // <div>
    //   At Pelco, I spent the first few weeks of my internship doing manual testing for security camera firmware. This helped me learn my way around the camera models, the bug submission process, and the company pipeline in general before I got to join a remote QA automation team with whom I wrote API tests using Python and the Robot Framework for a proprietary video management system that tracks feeds from and interfaces with Pelco's cameras and certain third party devices.
    //   <br/><br/>
    //   Being my first experience in a software-focussed workplace, a lot of what I took away from the job are foundational skills that I now consider second nature. It was my first time using Git. My first daily stand-ups. My first kanban boards. I learned what a REST API was and how to use Postman. I started out clicking my way through network interfaces for security cameras and looking for bugs and by the end, I was taking tasks off the same pile as the rest of my team of full-time QA engineers.
    // </div>,
    link: "pelco.com"
  }
]

export const volunteer = [
  // {
  //   company: "My Brother's Keeper 617",
  //   position: "Project manager, developer",
  //   location: "Boston, Massachusetts",
  //   dates: "August, 2020 - Today",
  //   logo: mbk,
  //   images: [
  //     {title: "Community posts", images: [{src: mbk1, alt:"MBK App Prototype"}]}, 
  //     {title: "Calendar events", images: [{src: mbk2, alt:"MBK App Prototype"}]}, 
  //     {title: "Profile", images: [{src: mbk3, alt:"MBK App Prototype"}]}
  //   ],
  //   description: <div>
  //     I am among a team of seven engineers working on an internal social network for the Boston nonprofit My Brother’s 
  //     Keeper 617. MBK617 does some amazing work for black youth in the Boston area and we’re doing what we can to make 
  //     some of that work a little easier for them. I’m beyond excited about this project, which we were connected to through 
  //     the super cool efforts of <a rel="noreferrer" target="_blank" href="https://buildforblacklives.com">Build For Black Lives</a>.
  //     <br/><br/>
  //     While this project is still deeply in its beginning phases, my contribution so far has largely been on the architectural 
  //     and administrative sides of things, writing repository skeletons, making stack decisions, and doing database setup. I have
  //     also done some prototyping for the app's layout and design. In the works is a React Native mobile app and a Node server using 
  //     a Mongodb non-relational database. 
  //   </div>,
  //   link: "mbk617.com"
  // },
  {
    company: "Extra Life",
    position: "Project leader, event coordinator",
    location: "Fort Collins, Colorado",
    dates: "November, 2019",
    logo: extralife,
    // images: [{ title: "Poster", images: [{src: extralife1, alt:"Extra Life poster"}] }],

    description: <div>
      Extra Life is an organization that facilitates charity events across the continent by providing a platform to 
      receive donations at and an easy system for directing those funds to a local children's hospital. With the support of the Computer Science department at Colorado State University, I had the opportunity to plan and implement a 24 hour Extra Life event on CSU's campus, marketed primarily to
      the students of the department but open to all. I obtained sponsorships and funding from local businesses, coordinated venue needs, and 
      ended up raising over $1000 for a local children’s hospital and having a fantastic day filled with all kinds of games (video, 
      board, trivia, roleplaying, etc.).
    </div>,
    link: "extra-life.org"
  },
  // {
  //   company: "ACM-W",
  //   position: "Treasurer, Webmaster, Ex-officio",
  //   location: "Fort Collins, Colorado",
  //   dates: "August 2016 - December 2019",
  //   logo: acmw,
  //   images: [
  //     { title: "Hiking with ACM-W", images: [{src: acmw1, caption:"Hiking with ACM-W"}] }, 
  //     { title: "ACM-W Community Board Game Night", images: [{src: acmw2, caption:"ACM-W Community Board Games"}] }, 
  //     { title: "Grace Hopper, 2018", images: [{src: acmw3, caption:"Grace Hopper, 2018"}] }, 
  //     { title: "Collegian Photo", images: [{src: acmw4, caption:"Collegian Photo"}] }
  //   ],
  //   description: <div>
  //     ACM-W was a grounding force in my life throughout the duration of my experience at Colorado State University. I sought out community 
  //     with the club and found it, and was happy to spend the remainder of my time in school working to bring that community to others. I 
  //     started a long running tradition of department game nights with consistently high attendence from students and staff, which has continued 
  //     even in my absence. I served in multiple leadership positions, including Treasurer and Webmaster, for the organization. I also mentored
  //     new leadership after stepping down as an officer. 
  //     <br/><br/>
  //     While working with this organization, I organized, attended, and volunteered for events designed both to foster community amongst 
  //     and create opportunities for women and minorities in Computer Science. We had many outreach projects focussed on introducing STEM
  //     topics at elementary, middle, and high school levels to local students in underserved communities and taught recurring "Binary Bracelets"
  //     workshops to young girls with an interest in STEM at the annual "Expanding Your Horizons" conference in Northern Colorado.
  //     <br/><br/>
  //     The organization was also a part of department-wide efforts to send students on scholarship (or otherwise) to the annual Grace Hopper 
  //     Celebration and the Richard Tapia Conference. This included panels of students and staff who have attended in the past, as well as a 
  //     series of informational meetings leading up to the conferences, providing a space to plan out the experience and meet others who
  //     would be in attenance. I got to attend the Grace Hopper Celebration twice during school, once on scholarship from CSU and once funded 
  //     directly by a combination of donations from local businesses and travel grants from the school.
  //   </div>,
  // },
  // {
  //   company: "Maker Comittee",
  //   position: "Founding member, Officer",
  //   location: "Fort Collins, Colorado",
  //   dates: "October 2018 - December 2019",
  //   images: [],
  //   description: <div>
  //     The Maker Comittee, and later "Makers Club", at Colorado State University was a group of engineering students working to faciliate student access to and interest in equipment for prototyping, woodworking, and metalworking at the newly built Nancy Richardson Design Center. We worked closely with the staff of the RDC to develop plans for workshops and semester-long competitions sponsored by local businesses, which were implemented after my graduation.
  //     <br/><br/>
  //     We hosted specialized trainings for the lab equipment, taught by RDC staff during club meetings. Students learned to use 3D modeling software, vector illustration software, and safety and methods for using lab equipment such as laser cutters, 3D printers, embroidery machines, and many other CNC devices as well as woodworking and metalworking tools and machines. 
  //   </div>,
  // }
]

export const education = [
  {
    company: "Colorado State University",
    logo: csu,
    location: "Fort Collins, Colorado",
    dates: "August 2016 - December 2019",
    position: "Bachelor of Science in Computer Science",
    link: "compsci.colostate.edu"
  }
]
