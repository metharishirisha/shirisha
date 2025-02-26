import ProjectCard from "../ProjectCard";

const projectsList = [
  {
    id:1,
    name:"Nxt-Trendz-Payment",
    imgUrl: "movies.png",  
    liveUrl:"https://nxtTrenzpay81.ccbp.tech",
    githubUrl:"https://github.com/metharishirisha/Enhancement-of-Nxt-Trendz---Payment",
  },
  {
    id:2,
    name:"Youtube Clone",
    imgUrl: "youtube.png",
    liveUrl:"https://nxtwatch79.ccbp.tech/login",
    githubUrl:"https://github.com/metharishirisha/Nxt-Watch",
  },
  {
    id:3,
    name:"IPL-Dashboard-App",
    imgUrl: "weather.png",
    liveUrl:"https://ipldashboard38.ccbp.tech/",
    githubUrl:"https://github.com/metharishirisha/IPL-Dashboard-App",
  },
  {
    id:4,
    name:"Jobby App",
    imgUrl: "jobby.png",
    liveUrl:"https://JobbyApp81s.ccbp.tech",
    githubUrl:"https://github.com/metharishirisha/Jobby-App",
  },
  {
    id:5,
    name:"Match-Game",
    imgUrl: "food.png",
    liveUrl:"https://matchgame38.ccbp.tech/",
    githubUrl:"https://github.com/metharishirisha/Match-Game",
  },
  {
    id:6,
    name:"Cowin-DashBoard",
    imgUrl: "budget.png",
    liveUrl:"https://cowin81.ccbp.tech/",
    githubUrl:"https://github.com/metharishirisha/cowinDashboard",
  }
]

const ProjectsSection = () => (
  <section
    id="projects"
    className="py-16 flex flex-col items-center bg-blue-100"
  >
    <h1 className="text-center font-semibold text-3xl">
      Cool Stuff I've Built
    </h1>
    <p className="text-gray-500 text-lg  text-center p-8 w-4/5 leading-relaxed">
    Here are some websites I've built for clients and personal projects.
    I’ve worked with a range of technologies, including JavaScript, HTML, and CSS. Additionally, I have experience with frameworks and libraries such as React, Bootstrap, and Tailwind CSS to create responsive and visually appealing web applications.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-4/5">
      {projectsList.map(each=>(
        <ProjectCard key={each.id} project={each}/>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
