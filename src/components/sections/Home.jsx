
export const Home = () =>{
    return(
     <section 
     id="home" 
     className="min-h-screen flex items-center justify-center relative">
       
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold md-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right"> Hi,I'm Parmita</h1>
       
       <p className="text-gray-400 text-lg mb-8 mx-auto">
       Budding React developer passionate about crafting intuitive UIs, managing databases, and solving real-world problems with clean, scalable code.
Driven by curiosity, I continuously explore new tools and best practices to grow as a versatile and thoughtful engineer.
 🚀
      </p>
      <div className="flex justify-center space-x-4">
       <a href=" #projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)"> View Projects</a>
       <a href=" #contact" className="border-blue-500/50 text-blue-500 py-3 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4) hover:bg-blue-500/10"> Contact Me</a>
      </div>
        </div>
        
    </section>
    );
};