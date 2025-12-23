import { FaBriefcase, FaBullhorn, FaCapsules, FaDesktop, FaLeaf, FaPenNib, FaTools, FaUserGraduate } from "react-icons/fa";
import Dental from "../Assets/Dental.jpeg"

const CoursesData = [
  {
    id: 1,
    title: "Engineering",
    icon: <FaTools />,
    image:
      "https://plus.unsplash.com/premium_photo-1661335273939-beb340be439a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW5naW5lZXJpbmclMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "Ayurvedic",
    icon:<FaLeaf/>,
    image:
      "https://plus.unsplash.com/premium_photo-1661501498929-d0956b902bb7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEF5dXJ2ZWRpY3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "MBA",
    icon: <FaBriefcase />,
    image:
      "https://plus.unsplash.com/premium_photo-1664474559614-74d16c1c6f6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnVzaW5lc3MlMjBBZG1pbmlzdHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "MCA",
    icon: <FaDesktop/>,
    image:
      "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    title: "MBBS",
    icon: <FaCapsules />,
    image:
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBoYXJtYWN5fGVufDB8fDB8fHww",
  },
  {
    id: 6,
    title: "PG",
    icon: <FaUserGraduate/>,
    image:
      "https://plus.unsplash.com/premium_photo-1682974403683-591557aa631b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TUJBfGVufDB8fDB8fHww",
  },
  {
    id: 6,
    title: "Dental",
    icon: <FaUserGraduate/>,
    image:
      Dental,
  },
];

export default CoursesData;
