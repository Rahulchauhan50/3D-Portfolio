import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker, 
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "C / C++ Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
   
  ];
  
  const experiences = [
   
    {
      title: "Diploma in Web and Software Development",
      company_name: "DSDC",
      icon: 'https://media.licdn.com/dms/image/C5103AQFXEu4schLQ6w/profile-displayphoto-shrink_800_800/0/1581133129980?e=2147483647&v=beta&t=IL1MkHydusDW8nlzhJTIVi9uUReXORB4dIVxflb4A10',
      iconBg: "#E6DEDD",
      date: "Dec 2021 - Dec 2023",
      points: [
        " Diploma in web and software Development from Delhi skill Development centre",
      ],
    },
    {
      title: "Bachelor of Computer Appliction",
      company_name: "IGNOU",
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6S8bAH35RWLL6NA7vmFDdrQUib1_3YgzZOYdgTXVm_KtgnQIAdSOn8ahWj0KC044Ta8&usqp=CAU',
      iconBg: "#383E56",
      date: "June 2021 - june 2024",
      points: [
        "I am pursuing Bachelor of Computer Application from Indra Gandhi National Open University",
        "I am currently in my final year of graduation",
       ],
    },
    {
      title: "12th standard",
      company_name: "GBSSS No. 2 Badarpur, New Delhi",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaKwcORH_0NkcksrUSxWdMBLXoDPh6aCjxzNImKbFKg&s",
      iconBg: "#383E56",
      date: "Apr 2020 - Mar 2021",
      points: [
        "I have successfully completed my 12th grade at Government Boys Senior Secondary School No.2 in Badarpur, New Delhi-110044.",
        "I pursued Commerce with Mathematics and achieved a score of 75% in my 12th standard examinations.",
      ],
    },
    {
      title: "10th standard",
      company_name: "GBSSS No. 2 Badarpur, New Delhi",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaKwcORH_0NkcksrUSxWdMBLXoDPh6aCjxzNImKbFKg&s",
      iconBg: "#E6DEDD",
      date: "Apr 2018 - Mar 2019",
      points: [
        "I have successfully completed my 10th grade at Government Boys Senior Secondary School No.2 in Badarpur, New Delhi-110044.",
        "I achieved a score of 70% in my 12th standard examinations.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Spotify",
      description:
        "Web-based music platform offering secure user sign-in, search, artist-specific tracks, repeat and shuffle options, history, and favorite track list. Seamlessly sign up, log in, and log out. Enjoy personalized music experiences with ease and security.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Express",
          color: "yellow-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Rahulchauhan50/Spotify-Clone",
      project_link: "https://music-rahul.netlify.app/",

    },
    {
      name: "Notebook",
      description:
        "Web-based application Notebook platform offering secure cloud-based storage, allowing users to organize notes into folders. Users can securely save, search, and manage notes, while robust encryption guarantees privacy. User-friendly signin, logout.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "Express",
          color: "yellow-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Rahulchauhan50/iNotebook",
      project_link: "https://notebook-rahul.netlify.app/",
    },
    {
      name: "QuickNews",
      description:
        "Web-based news feed platform. Explore current updates, top headlines, and filter news by sports, health, science, tech, and more. Enjoy full articles from official sources. Customize your feed by country. Your one-stop source for global and local news.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Rahulchauhan50/NewsApp-FunctionBased",
      project_link: "https://news-rahul.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };