import Project1 from './assets/project1.png';
import Project2 from './assets/project2.png';

import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';
import Testimonial4 from './assets/testimonial4.jpg';
import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Resume',
    path: 'resume',
  },

  {
    name: 'Recommendations',
    path: 'testimonial',
  },
  {
    name: 'Pricing',
    path: 'pricing',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Web Development',
    title: 'Web Design & development',
    description:
      'Create custom designs for your website that are tailored to your brand and business goals.Build your website from scratch or work with an existing design to develop a functional website using the latest web technologies.',
  },
  {
    id: 2,
    name: ' Creative ',
    title: ' Graphics Design, UI & UX',
    description:
      ' create a user experience (UX) design that ensures your website is intuitive and easy to navigate, leading to increased user satisfaction and engagement.',
  },
  {
    id: 3,
    name: ' Digital Marketing ',
    title: ' Campaign Manager ',
    description:
      '  I can help you create and execute successful digital marketing campaigns to promote your brand and reach your target audience. services include: Strategy development, campaign planning and execution, audience targeting etc. ',
  },
  {
    id: 4,
    name: ' Advertising ',
    title: ' Paid & Organic ',
    description:
      '  I can work with you to develop a comprehensive paid and organic advertising strategy that aligns with your business goals and targets your ideal audience. ',
  },
  {
    id: 5,
    name: ' Innovation ',
    title: ' Innovation Management ',
    description:
      'As an innovation manager, I can work with you to develop and implement strategies to foster innovation within your organization',
  },
  {
    id: 6,
    name: ' Social Media ',
    title: ' Social Media Management ',
    description:
      'As a social media manager, I can help you create and execute successful social media strategies to build your brand, engage with your audience, and drive business results.',
  },
  {
    id: 7,
    name: ' SEO ',
    title: ' Search Engine Optimization ',
    description:
      'As an SEO specialist, I can work with you to improve your websites search engine rankings, increase organic traffic, and drive business results.',
  },
  {
    id: 8,
    name: ' Marketing ',
    title: ' Marketing Manager ',
    description:
      'As a marketing manager, I can work with you to develop and implement effective marketing strategies that help you reach your business goals. ',
  },
];

export const skills = [
  {
    id: 1,
    name: 'React',
    percentage: 85,
    description:
      'Good understanding of react core concepts including components, props and state. Ability to write reusable and maintainable code',
  },

  {
    id: 2,
    name: 'JavaScript',
    percentage: 75,
    description:
      'Knowledge of Object-oriented programming and asynchronous programming, familiarity with popular frameworks and libraries',
  },

  {
    id: 3,
    name: 'CSS',
    percentage: 90,
    description:
      'Proficiency in CSS syntax and selectors, Knowledge of CSS layout and techniques, great understanding of responsive designs.',
  },

  {
    id: 4,
    name: 'Express',
    percentage: 75,
    description:
      'Familiarity with Express framework and good knowledge of database Integrations. Experience with RESTful APIs using express',
  },

  {
    id: 5,
    name: 'Mongodb',
    percentage: 70,
    description:
      'Familiarity with the MongoDB shell, Knowledge of data Modelling and experience and CRUD operations',
  },

  {
    id: 6,
    name: 'Nextjs',
    percentage: 60,
    description:
      'Understanding of server-side rendering. Experience with Next.js API routes, Knowledge of static site generation and understanding of Next.js routing',
  },

  {
    id: 7,
    name: 'Typescript',
    percentage: 60,
    description:
      'Familiarity with Typescript syntax and understanding of data typing, Experienced with typescript framework and libraries',
  },
  {
    id: 8,
    name: 'Photoshop',
    percentage: 80,
    description:
      'Great Understanding of design principles. Familiarity with Photoshop interface and tools.Ability to create wireframes and mockups',
  },
  {
    id: 6,
    name: 'Figma',
    percentage: 60,
    description:
      ' Understanding of Figmas interface and tools. Experience with design systems and understanding prototyping',
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'Full-Stack',
    title: 'Job Tracking App',
    description:
      'Application built with MERN Technology, Mongodb, react, express and node js. ',
    href: 'https://golajob.onrender.com/landing',
  },
  {
    id: 2,
    img: Project2,
    category: 'React-App',
    title: 'Cerrajeriaamigos.com',
    description:
      'Website was built with reactjs for a locksmith firm in Barcelona',
    href: 'https://cerrajeriaamigos.com',
  },
];

export const cv = [
  {
    id: 1,
    title: 'Masters in Web Development',
    subtitle: 'Masterschool, New York United States',
    date: '2022 - 2023',
    description:
      'Relevant course work: Advance HTML and CSS, JavaScript and DOM, MERN Full-stack development',
    category: 'education',
  },

  {
    id: 2,
    title: 'Masters degree in Innovation Marketing',
    subtitle: 'UCAM, MURCIA SPAIN',
    date: '2020 - 2021',
    description:
      'Relevant course work: Digital and Mobile Marketing, Creativity and Innovation management, IOT education, Big Data management.',
    category: 'education',
  },

  {
    id: 3,
    title: 'Bachelor Degree Physical Education & Sports',
    subtitle: 'Obafemi Awolowo University',
    date: '2010 - 2012',
    description:
      'Relevant course work: Organization Administration of sports event, Project Management',
    category: 'education',
  },

  {
    id: 4,
    title: 'Web Developer & Digital Marketing Expert',
    subtitle: 'Neuroscience Business School',
    date: '2022 - present',
    description:
      'Manage company website and daily digital marketing activities',
    category: 'experience',
  },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'David L. Rajcher',
    author: 'Head of Web Schools (Amsterdam, Netherlands)',
    description:
      'George is a highly motivated student who brings is past experience in the digital industry and as a web developer to the table. He constantly challenges himself and pushes the borders of his knowledge and expertise. I have no doubt he can succeed working in any web development team.',
    href: 'https://www.linkedin.com/in/david-rajcher/',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Nathaniel Obafemi',
    author: 'Data Researcher and Analyst(Barcelona, Spain)',
    description:
      'Dear Adeola, I am delighted to have the opportunity to recommend you for your exceptional skills in web development and digital marketing. Throughout the time we have worked together, I have been continually impressed by your technical proficiency',
    href: 'https://www.linkedin.com/in/nathaniel-obafemi-1279b8146/',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Issazhan Malgarayeva',
    author: 'Business Developer and Sales Executive ',
    description:
      'George is a skilled professional who is not only proficient in several programming languages, but also has a deep understanding of web design, user experience, and project management. He has an eye for detail and is dedicated to delivering high-quality...',
  },
];
