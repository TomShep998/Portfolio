import ProjectCard from "./ProjectCard"
const Projects = () => {
    const projects =[{
        id:0,
        title:"Project 1",
        description:"This is project1",

    }];
    return(
        <div className="text-center">
            <h2 className="text-white text-3xl font-bold mb-10"> Projects </h2>
            <ul className="flex flex-row justify-between">
                <li>
                    <ProjectCard title={"Project 1"} description={"Hello this is project 1"} />
                </li>
            </ul>

        </div>
    )
}

export default Projects;
