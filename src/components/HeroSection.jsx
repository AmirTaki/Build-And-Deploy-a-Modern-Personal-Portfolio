const HeroSection = () => {
    return (
        <section 
            id = "hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in "> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> {" "} Pedro</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Machado</span>
                    </h1>
                    <p>
                       I create stellar web experiences with modern technologies.
                       Specializing in front-end develpment, I build interfaces that are both beatiful and fucntional. 
                    </p>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;