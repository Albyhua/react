import Project from "../components/Project";

function Portfolio() {
  // fill in the required data, image file should be in the assets folder and name should match exactly including extension
  const projects = [
    {
      name: "Horiseon",
      description: "my first ever assignment",
      link: "https://albyhua.github.io/Horiseon-Client/",
      repo: "https://github.com/Albyhua/Horiseon-Client",
      image: "one",
    },
    {
      name: "phillygrove",
      description: "Forum to make philly go round",
      link: "https://philly-grove-213220-3419636a6539.herokuapp.com/",
      repo: "https://github.com/Albyhua/PhillyGrove",
      image: "phillygrove"
    },
    {
      name: "Company Employee Tracker",
      description: "mySQL employee tracker app",
      link: "https://github.com/Albyhua/Week12",
      repo: "https://github.com/Albyhua/Week12",
      image: "companytracker"
    },
    {
      name: "quiz",
      description: "my first ever quiz game",
      link: "https://albyhua.github.io/Quiz-game/",
      repo: "https://github.com/Albyhua/Quiz-game",
      image: "quiz"
    },
    {
      name: "Jate",
      description: "Text editor",
      link: "https://fast-tor-43200-e3df9f7fb052.herokuapp.com/",
      repo: "https://github.com/Albyhua/text-editor-pwa",
      image: "Jate"
    },
    {
      name: "forecaster",
      description: "weather forecast",
      link: "https://albyhua.github.io/weather-forecast/",
      repo: "https://github.com/Albyhua/weather-forecast",
      image: "forecaster"
    },
  ];

  // for each project, use the Project component to build a project
  return (
    <div className="container mt-4">
        <div className="row">
            {projects.map((project) => (
                <div className="col-md-4 mb-4" key={"project=" + project.name}>
                    <Project project={project} />
                </div>
            ))}
        </div>
    </div>
  );
}

export default Portfolio;