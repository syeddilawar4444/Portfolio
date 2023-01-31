//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiTwitter,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiLinkedin,
  FiPhoneCall
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

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

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

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
  // {
  //   img: BehanceBrandIcon,
  //   href: '',
  // },
  // {
  //   img: DribbbleBrandIcon,
  //   href: '',
  // },
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
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Mobile Application',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  // {
  //   icon: <FiTag />,
  //   name: 'SEO',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  // },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

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
    // href:"app.js"
  },
  {
    icon: <FiPhoneCall />,
    // DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
    title: 'Discuss a Project',
    subtitle: 'My Inbox Is Open For All',
    description: '+92-3181195330',
    href:"tel:+92-3181195330"
  },
];
