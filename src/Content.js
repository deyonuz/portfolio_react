// import images
import Hero_person from "./assets/images/Hero/person.png";
import figma from "./assets/images/Skills/figma.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/snakeimg.png";
import project2 from "./assets/images/projects/tetrisimg.png";
import project3 from "./assets/images/projects/alarmimg.png";
import project4 from "./assets/images/projects/teacherCrud.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";


import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Hello I`m  Frontend Developer",
    firstName: "Deyon",
    LastName: "Web",
    btnText: "Hire Me",
    tme: "https://t.me/deyondev",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Ability to work with web pages related to Figma",
        logo: figma,
      },
      {
        name: "Adobe Photoshop",
        para: "Insufficient and unprofessional knowledge of photomontage",
        logo: ps,
      },
      {
        name: "React js",
        para: "Full-time experience in frontend ReactJs.",
        logo: reactjs,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        id: 1,
        title: "Snake Game",
        image: project1,
        link: "https://snakegamewithdeyon.netlify.app/"
      },
      {
        id: 2,
        title: "Tetris Game",
        image: project2,
        link: "https://tetriswithdeyon.netlify.app/"
      },
      {
        id: 3,
        title: "Country-info",
        image: project3,
        link: "https://country-info-45rscscco-deyonuz.vercel.app/"
      },
      {
        id: 4,
        title: "Teacher CDUD",
        image: project4,
        link: "https://teacher-adksku2kp-deyonuz.vercel.app//"
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Siz bilan ishlaganimdan mamnunman !!”",
        img: avatar1,
        name: "Hikmat Haydarov",
      },
      {
        review:
          "“Yordamingiz uchun alohida rahmat, ishingizga rivoj tilayman”",
        img: avatar2,
        name: "Sharifjon Azamatov",
      },
      {
        review:
          "“Omad !!!”",
        img: avatar3,
        name: "Jalol Eshbo`riyev",
      },
      {
        review:
          "“Ishlaringizga rivoj tilaymiz jamoa bilan ....”",
        img: avatar4,
        name: "Doston Abduxoliqov",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "diyorbekabduxoliqov2003@gmail.com",
        icon: GrMail,
        link: "mailto:diyorbekabduxoliqov2003@gmail.com",
      },
      {
        text: "+998 90 110 0801",
        icon: MdCall,
        link: "https://t.me/deyondev",
      },
      {
        text: "deyonuz",
        icon: BsInstagram,
        link: "https://www.instagram.com/deyonuz/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};