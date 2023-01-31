//  icons
import {
  FiGithub,
  FiTwitter,
  FiLayout,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiLinkedin,
  FiPhoneCall,
  FiMonitor,
  FiSmartphone
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
 
               // projects images
// HTML Project img
import Project1 from './assets/img/projects/html/1.png';
import Project2 from './assets/img/projects/html/2.png';
import Project3 from './assets/img/projects/html/3.png';
import Project4 from './assets/img/projects/html/4.png';
import Project5 from './assets/img/projects/html/5.png';
import Project6 from './assets/img/projects/html/6.png';
import Project7 from './assets/img/projects/html/7.PNG';


// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/bootstrap.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';



// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  
  {
    icon: <FiFacebook  />,
    href: 'https://www.facebook.com/',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://pk.linkedin.com/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/syeddilawar4444',
  },
  {
    icon: <FiTwitter />,
    href: 'https://twitter.com',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '0',
    image: Project7,
    name: 'Olx Application',
    
    category: 'Web Development',
    technology: 'HTML / CSS / JAVASCRIPT/ FIREBASE',

    github:"https://www.github.com",

    view:"https://smit-batch-8-olx-clone.web.app/",
    description:"The application also has user SignUp and Login as a sellers and buyers A place where sellers could sell their products and post an Ad, and buyers are able to view those products, With real-time chat feature, the buyer can ask questions about the product using with chat feature"
  },
  {
    id: '1',
    image: Project1,
    name: 'Biography',
    
    category: 'Web Development',
    technology: 'HTML / CSS',

    github:"https://www.github.com",

    view:"https://gleeful-sprite-68284d.netlify.app/",
    description:"Design simple biography of '1st Governor-General of Pakistan MOHAMMAD ALI JINNAH' using HTML / CSS "
  },
  {
    id: '2',
    image: Project2,
    name: 'Registration Form',
    category: 'Web Development',
    technology: 'HTML / CSS',

    github:"https://www.github.com",
    view:"https://visionary-biscuit-3916a5.netlify.app/",
    description:"Design Simple and responsive registration form using HTML / CSS"

  },
  {
    // https://merry-crisp-91ea81.netlify.app/
    id: '3',
    image: Project3,
    name: 'Paralex Website',
    category: 'Web Development',
    technology: 'HTML / CSS',

    github:"https://www.github.com",
    view:"https://merry-crisp-91ea81.netlify.app/",
    description:"Create Paralex Website with beautiful design using HTML / CSS "
  },
  {
    id: '4',
    image: Project4,
    name: 'Portfolio',
    category: 'Web Development',
    technology: 'HTML / CSS',

    github:"https://www.github.com",
    view:"https://fluffy-crostata-eab9d1.netlify.app/",
    description:"Create simple portfolio website with responsive using HTML / CSS"
  },
  {
    id: '5',
    image: Project5,
    name: 'Restaurant',
    category: 'web development',
    technology: 'HTML / CSS',

    github:"https://www.github.com",
    view:"https://fantastic-froyo-2d1ed5.netlify.app/",
    description:"Create beautifull restaurants website with responsive using HTML / CSS"

  },
  {
    id: '6',
    image: Project6,
    name: 'Documentaion',
    category: 'web development',
    technology: 'HTML / CSS',
    github:"https://www.github.com",
    view:"https://precious-alpaca-e4d749.netlify.app/",
    description:"Create javascript documentation website using HTML / CSS"

  },
];
// projects
export const projectsNav = [
  {
    name: 'All',
  },
  {
    name: 'web development',
  },
  {
    name: 'React Js',
  },
  {
    name: 'React Native',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
   {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'I Build realy beautifull website technologies HTML / CSS /Javascript',
  },
  {
    icon: <FiMonitor />,
    name: 'Web Development',
    description:
      'I Build cool Web Applicaton with functionaly technologies Javascript / React Js / Tailwind Css / Firesbase / Node Js.',
  },
  {
    icon: <FiSmartphone />,
    name: 'Mobile Application',
    description:
      'Building magical Mobile Applications technologies React Native / Firesbase / Node JS.',
  },
];

// testimonials

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a Question?',
    subtitle: 'I am here to help you Email me at.',
    description: 'syeddilawar4444@gmail.com',
    href:"mailto:syeddilawar4444@gmail.com"
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Serving Clients Worldwide',
    description: 'Karachi, Pakistan',
  
  },
  {
    icon: <FiPhoneCall />,
    title: 'Discuss a Project',
    subtitle: 'My Inbox Is Open For All',
    description: '+92-3181195330',
    href:"tel:+92-3181195330"
  },
];
