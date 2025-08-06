import { createContext, useState } from "react";

export let MyStore = createContext();

export const MyContextProvider = ({ children }) => {
const [menuToggle, setMenuToggle] = useState(false);
const [videos, setVideos] = useState([
    {
      "id": 1,
      "title": "2.0 Job Ready AI Cohort Launch | Web Dev + DSA + Gen AI + Aptitude",
      "thumbnail": "https://img.youtube.com/vi/xGtcHcPVb0o/hqdefault.jpg",
      "views": "36K views",
      "uploadTime": "2 days ago",
      "channel": "Sheryians Coding School",
      "description": "Launch video for AI cohort covering Web Dev, DSA, Gen AI and Aptitude.",
      "embedUrl": "https://www.youtube.com/embed/xGtcHcPVb0o?si=gNuemgDsS-OiGXsy",
      "duration": "9:23"
    },
    {
      "id": 2,
      "title": "Part 3 – Advanced JavaScript, Projects & Real Developer Mindset | Full Course",
      "thumbnail": "https://img.youtube.com/vi/wH6uf20dpAo/hqdefault.jpg",
      "views": "46K views",
      "uploadTime": "8 days ago",
      "channel": "Sheryians Coding School",
      "description": "Advanced JavaScript concepts, projects and guidance for becoming a real developer.",
      "embedUrl": "https://www.youtube.com/embed/wH6uf20dpAo?si=fdcIukfgzPDqh_kj",
      "duration": "4:15:37"
    },
    {
      "id": 3,
      "title": "Build Stunning UIs with This New Library | Skiper UI Full Project Tutorial",
      "thumbnail": "https://img.youtube.com/vi/CEdGKeo85bk/hqdefault.jpg",
      "views": "48K views",
      "uploadTime": "11 days ago",
      "channel": "Sheryians Coding School",
      "description": "Complete guide to building stunning UIs with the new Skiper UI library.",
      "embedUrl": "https://www.youtube.com/embed/CEdGKeo85bk?si=2Bq2jWL6eAVY265K",
      "duration": "2:43:47"
    },
    {
      "id": 4,
      "title": "Part 2 – Master JavaScript & Become a Real Developer | Full Course",
      "thumbnail": "https://img.youtube.com/vi/1aR7tcmWo_w/hqdefault.jpg",
      "views": "128K views",
      "uploadTime": "1 month ago",
      "channel": "Sheryians Coding School",
      "description": "Learn JavaScript from scratch and master skills to become a professional developer.",
      "embedUrl": "https://www.youtube.com/embed/1aR7tcmWo_w?si=2VVfezQFbOnLbdLY",
      "duration": "7:26:21"
    },
    {
      "id": 5,
      "title": "JavaScript Full Course | JavaScript - Learn Everything | Sheryians Coding School",
      "thumbnail": "https://img.youtube.com/vi/a-wVHL0lpb0/hqdefault.jpg",
      "views": "342K views",
      "uploadTime": "1 month ago",
      "channel": "Sheryians Coding School",
      "description": "Full JavaScript course covering everything from basics to advanced concepts.",
      "embedUrl": "https://www.youtube.com/embed/a-wVHL0lpb0?si=NuzksNnUR5QMjt0k",
      "duration": "11:53:00"
    },
    {
      "id": 6,
      "title": "College Rules are DESTROYING Your Future | Must Watch for Students!",
      "thumbnail": "https://img.youtube.com/vi/63IGdvpsNK0/hqdefault.jpg",
      "views": "25K views",
      "uploadTime": "1 month ago",
      "channel": "Sheryians Coding School",
      "description": "Discussion on how certain college rules negatively impact students' futures.",
      "embedUrl": "https://www.youtube.com/embed/63IGdvpsNK0?si=9IE2vh-alUnB_ysT",
      "duration": "20:42"
    },
    {
      "id": 7,
      "title": "KODR 2.0 Is Here: The Bootcamp That Changes Everything!",
      "thumbnail": "https://img.youtube.com/vi/AptmHn3bJoY/hqdefault.jpg",
      "views": "23K views",
      "uploadTime": "1 month ago",
      "channel": "Sheryians Coding School",
      "description": "Introducing KODR 2.0 Bootcamp, designed to transform your career.",
      "embedUrl": "https://www.youtube.com/embed/AptmHn3bJoY?si=ELzfDUxiPMQT7rBm",
      "duration": "12:11"
    },
    {
      "id": 8,
      "title": "Zero Knowledge to 7 LPA? | Kodr Bootcamp Placement Story",
      "thumbnail": "https://img.youtube.com/vi/TgaepDlNsY8/hqdefault.jpg",
      "views": "15K views",
      "uploadTime": "1 month ago",
      "channel": "Sheryians Coding School",
      "description": "Placement success story of a student going from zero knowledge to 7 LPA.",
      "embedUrl": "https://www.youtube.com/embed/TgaepDlNsY8?si=VHdE-sjleuAoP6Vn",
      "duration": "26:57"
    },
    {
      "id": 9,
      "title": "DSA Domination Cohort Launch | Language Independent | Trailer",
      "thumbnail": "https://img.youtube.com/vi/hcxdmWyQEKY/hqdefault.jpg",
      "views": "14K views",
      "uploadTime": "1 month ago",
      "channel": "Sheryians Coding School",
      "description": "Trailer for DSA Domination Cohort, a language-independent training program.",
      "embedUrl": "https://www.youtube.com/embed/hcxdmWyQEKY?si=g_FOVIlDMwPd7qE0",
      "duration": "1:56"
    },
    {
      "id": 10,
      "title": "Complete Hashing in 1 Video + MAANG Level Problems | DSA in JavaScript | Part 20",
      "thumbnail": "https://img.youtube.com/vi/Z8iFL7d0f90/hqdefault.jpg",
      "views": "11K views",
      "uploadTime": "1 month ago",
      "channel": "Sheryians Coding School",
      "description": "Comprehensive hashing tutorial with MAANG-level problems in JavaScript.",
      "embedUrl": "https://www.youtube.com/embed/Z8iFL7d0f90?si=Fyv86HyeImLulUlR",
      "duration": "25:12"
    },
    {
      "id": 11,
      "title": "From Zero Skills to Job Ready! 🔥 Sheryians Kodr Student's Placement Journey",
      "thumbnail": "https://img.youtube.com/vi/6BZC-JOwpJA/hqdefault.jpg",
      "views": "9.9K views",
      "uploadTime": "2 months ago",
      "channel": "Sheryians Coding School",
      "description": "Journey of a Sheryians student from no skills to job-ready in tech.",
      "embedUrl": "https://www.youtube.com/embed/6BZC-JOwpJA?si=pNJY1EZQE8Zojacd",
      "duration": "11:53"
    },
    {
      "id": 12,
      "title": "How to Create Anything With AI — Beginner’s Guide to AI Development",
      "thumbnail": "https://img.youtube.com/vi/fx-nD4V80fU/hqdefault.jpg",
      "views": "35K views",
      "uploadTime": "2 months ago",
      "channel": "Sheryians Coding School",
      "description": "Beginner’s guide to creating projects with AI.",
      "embedUrl": "https://www.youtube.com/embed/fx-nD4V80fU?si=Gaas09dnYqLongyv",
      "duration": "4:24:27"
    }
  ]
  
  )
  return (
    <MyStore.Provider value={{menuToggle, setMenuToggle,videos}}>
      {children}
    </MyStore.Provider>
  );
};