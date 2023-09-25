

const AboutMe = () =>{

    return(
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8  xl:gap-16 sm:py-16 ">
                <img src="src/assets/Images/about-me.png " alt="about-me image" width={500} height={500}></img>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="font-bold text-4xl mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">I spent the last four years studying computer science, I have a passion for developing fullstack applications using modern technologies and frameworks. I am always looking for new oppertunities to develop my skills and progress my carreer. I am a team player and enjoy working in high pressure enviroments.  </p>
                </div>
            
            </div>

          
            
         </section>

    )
           


    
}

export default AboutMe;