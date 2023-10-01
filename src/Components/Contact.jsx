

const Contact = () => {
    return(
        
        <div className ="grid md: grid-cols-2 my-12 md:my-12 py-24 gap-4">
            <h2 className="text-white text-2xl font-bold mt-10"> Contact Me </h2>

            <form className="flex flex-col gap-4">
                <label htmlFor="email" className="text-white">
                Your Email
                </label>
                <input type="email" id="email" required placeholder="example@example.com" className="rounded bg-transparent" />
                <label htmlFor="subject" className="text-white">
                Subject
                </label>
                <input type="text" id="subject" required placeholder="Subject" className="rounded bg-transparent border-cyan-500 border-2 border-solid text-white" />
                <label htmlFor="message" className="text-white">
                Your Message
                </label>
                <input type="text" id="message" required placeholder="Enter your message here" className="h-[300px] rounded bg-transparent" />
      

            </form>
        </div>
    )


        
}
export default Contact;
