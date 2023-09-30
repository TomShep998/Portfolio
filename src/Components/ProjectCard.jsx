

const ProjectCard = ({title,description,$imgurl}) => {

    return(
        <div className="`h-[52px] md:h-[72px] bg-cover "style={{background:'url home/Projects/Portfolio/src/assets/Images/about-me.png'}}>

            <h3 className="text-white font-semibold text-2xl mb-5"> {title} </h3>
            <p className="text-white text-xl"> {description} </p>

        </div>
    )
}

export default ProjectCard;
