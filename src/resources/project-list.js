import { FaReact, FaJs, FaSass, FaHtml5 } from "react-icons/fa";
const projects = [
    {
      name: 'Naturalz Daily Skin Care',
      description: 'E-commerce app with following features:',
      details: [
        'Shopping cart functionality',
        'Credit card payments using Stripe',
        'Backend storage & auth using Firebase'
      ],
      tools: [<FaJs />, <FaReact />, <FaSass />,<FaHtml5 />],
      image: 'https://i.imgur.com/JtfIIQc.gif',
      git: 'https://github.com/harshadajog/crwn-clothing',
      link: 'http://naturalz-live.herokuapp.com/'
  
    }
    // },
    // {
    //   name: 'Project 2',
    //   description: 'Description 2',
    //   details: [
        
    //   ],
    //   tools: ['React', 'Javascript', 'CSS'],
    //   image: '',
    //   git: 'https://github.com/harshadajog/profile-search-and-tag',
    //   link: 'https://profile-search-tag.herokuapp.com/',
    //   codepen: ''
    // },
    // {
    //   name: "Portfolio",
    //   description: "React portfolio",
    //   details: [],
    //   tools: ["React", "Javascript", "CSS", "HTML"],
    //   image: "",
    //   git: "https://github.com/harshadajog/harshada-portfolio-v2",
    //   link: "ttps://inspiring-bohr-eb6a48.netlify.app",
    //   codepen: ""
    // },
  ]
  
  export default projects;