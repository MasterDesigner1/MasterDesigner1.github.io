import logo from "@/images/resources/Köksal Partners Mavi Siyah Logo.png";
import bg from "@/images/shapes/site-footer-shape-1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


const footerData = {
  bg,
  logo,
  aboutText: "Better Call Köksal",
  socials: [
    {
      id: 1,
      icon: "fa-brands fa-x-twitter", 
      href: "https://twitter.com/i/flow/login?redirect_after_login=%2FKoksalPartners",
    },
    {
      id: 2,
      icon: "fab fa-linkedin",
      href: "https://www.linkedin.com/company/koksalpartners/",
    },
    {
      id: 3,
      icon: "fab fa-instagram",
      href: "https://www.instagram.com/koksalpartners/",
    },
  ],
  links: [
    {
      id: 1,
      text: "About",
      href: "/about",
    },
    {
      id: 2,
      text: "Meet our team",
      href: "/team",
    },
    {
      id: 3,
      text: "Case stories",
      href: "/case",
    },
    {
      id: 4,
      text: "Latest news",
      href: "/blog",
    },
    {
      id: 5,
      text: "Contact",
      href: "/contact",
    },
    {
      id: 6,
      text: "Support",
      href: "/about",
    },
    {
      id: 7,
      text: "Terms of use",
      href: "/about",
    },
    {
      id: 8,
      text: "Privacy policy",
      href: "/about",
    },
    {
      id: 9,
      text: "Help",
      href: "/about",
    },
  ],
  newsletterText: "Subsrcibe for our upcoming latest articles and resources",
  address: "Burhaniye Mahallesi, Burhaniye Abdullahağa Caddesi, Merdivençıkmazı Sokak, No:2, Üsküdar, İstanbul",
  mapLink: "https://www.google.com/maps/place/Burhaniye+Mahallesi,+Burhaniye+Abdullahağa+Caddesi,+Merdivençıkmazı+Sokak,+No:2,+Üsküdar,+İstanbul",
  phone: "+90 (216) 700 1833",
  phoneHref: "+902167001833",
  email: "buro@koksalpartners.com",
  author: "Oslim",
  year: new Date().getFullYear(),
};

export default footerData;
