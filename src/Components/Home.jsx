
const Home = () =>{

    return(
        <section >
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center lg:text-left justify-self-start">
                    <h1 className='  mb-4 text-4xl lg:text-6xl font-extrabold'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500">
                            Hello, I'm Tom
                        </span>
                    </h1>
                    <p className="text-white text-lg mb-6 lg:text-xl"> I am a software developer based in the UK</p>
                    <div>
                        <button className='px-6 py-3 rounded-full mr-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-slate-200  '> Download CV </button>
                        <button className='px-6 py-3 rounded-full border-solid border-2 border-cyan-500 mr-4 bg-transparent text-white  '> Contact Me </button>
                    </div>
                </div>

                    <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                            <img src="src/assets/Images/avatar.png "alt="Avatar " className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={300} height={300}></img>
                        </div>
                    </div>
            

             
            </div>
            
        </section>
    )
}

export default Home;
