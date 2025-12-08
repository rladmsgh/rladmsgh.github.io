export const siteConfig = {
  name: "김은호",
  title: "Senior Software Engineer",
  description: "Portfolio website of 김은호",
  accentColor: "#1d4ed8",
  social: {
    email: "krladmsgh@gmail.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://x.com/rfitzio",
    github: "https://github.com/RyanFitzgerald",
  },
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  projects: [
    {
      name: "Air Pollution Inquiry Mashup",
      description:
        "한국환경공단 에어코리아 Open API를 이용해 시·도별 실시간 대기오염 정보를 조회하는 웹 서비스입니다.",
      link: "https://air-pollution-2022810020.netlify.app",
      skills: ["HTML", "CSS", "JavaScript", "Open API"],
    },
    {
      name: "서울시 문화행사 알리미",
      description:
        "서울시 문화행사 Open API를 이용해 공연·전시 정보를 검색하고, PWA로 설치해 사용할 수 있도록 만든 웹앱입니다.",
      link: "https://eventpwa-2022810020.netlify.app",
      skills: ["HTML", "CSS", "JavaScript", "PWA"],
    },
    {
      name: "Kakao Map을 이용한 서울시 공공도서관 검색 Mashup",
      description:
        "서울시 공공도서관 정보와 Kakao Map을 결합해 지도에서 도서관 위치와 상세 정보를 확인할 수 있는 Mashup 서비스입니다.",
      link: "https://seoul-library-search-mashup2022810020.netlify.app",
      skills: ["HTML", "CSS", "JavaScript", "Kakao Map API"],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
