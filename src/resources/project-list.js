import { FaReact, FaJs, FaSass, FaHtml5 } from "react-icons/fa";

const projects = [
  {
    name: "Portfolio",
    description: "React portfolio",
    details: [
      'Mobile Responsive website design',
      'Navigation using React Router'
    ],
    tools: [<FaJs />, <FaReact />, <FaSass />,<FaHtml5 />],
    image: 'https://i.imgur.com/o0PzJNC.gif',
    git: "https://github.com/harshadajog/harshada-portfolio-v2",
  //  link: "https://inspiring-bohr-eb6a48.netlify.app",
  },
  {
    name: 'Profile Search and Tag',
    description: 'App with User search and tag features ',
    details: [
      'Use of fetch for asynchronous API requests',
      'Search by name or tag functionality',
      'Persistence using session storage'
    ],
    tools: [<FaJs />, <FaReact />, <FaSass />,<FaHtml5 />],
    image: 'https://i.imgur.com/WuR3rfe.gif',
    git: 'https://github.com/harshadajog/profile-search-and-tag',
    link: 'https://profile-search-tag.herokuapp.com/'
  },
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
  ]
  
  export default projects;