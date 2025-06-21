export default function Projects() {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 sm:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-highlight to-foreground bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical projects and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="group relative">
            <div className="bg-gradient-to-br from-secondary via-accent to-secondary rounded-2xl p-8 shadow-xl border border-highlight/20 hover:border-highlight/40 transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute top-4 right-4">
                <span className="text-sm text-gray-400 bg-accent px-3 py-1 rounded-full border border-highlight/20">
                  2025
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-highlight mb-4 group-hover:text-foreground transition-colors">
                CampusCart - Online Sharing Platform
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                A comprehensive e-commerce platform designed specifically for campus communities. Features include user authentication, 
                product management, real-time messaging, and secure payment integration. Built with modern web technologies for optimal performance.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['React.js', 'TypeScript', 'MongoDB', 'Socket.io', 'Tailwind CSS'].map(tech => (
                  <span key={tech} className="bg-accent text-highlight px-3 py-1 rounded-full text-sm font-medium border border-highlight/20">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a href="https://ss-frontend.onrender.com/" className="bg-highlight text-background px-4 py-2 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all duration-300">
                  Check it out!
                </a>
                
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative">
            <div className="bg-gradient-to-br from-secondary via-accent to-secondary rounded-2xl p-8 shadow-xl border border-highlight/20 hover:border-highlight/40 transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute top-4 right-4">
                <span className="text-sm text-gray-400 bg-accent px-3 py-1 rounded-full border border-highlight/20">
                  2024
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-highlight mb-4 group-hover:text-foreground transition-colors">
                Blockchain based Wildlife Conservation System using IOT
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                An innovative IoT and blockchain-based system for wildlife conservation. Integrates real-time sensor data with 
                blockchain technology to create transparent and secure wildlife monitoring and protection mechanisms.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['Python', 'Truffle', 'Blockchain', 'IoT','Ganache'].map(tech => (
                  <span key={tech} className="bg-accent text-highlight px-3 py-1 rounded-full text-sm font-medium border border-highlight/20">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a href="https://drive.google.com/file/d/1NtHAfWj8dVTdgRaM0PFPtSOFClOE1ztZ/view?usp=sharing" className="bg-highlight text-background px-4 py-2 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all duration-300">
                  Check it out!
                </a>
               
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-secondary to-accent rounded-2xl p-8 border border-highlight/20">
            <h3 className="text-2xl font-bold text-highlight mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-300 mb-6">
              I'm constantly working on new projects and learning new technologies. 
              Check back soon for more innovative solutions!
            </p>
            <a href="https://github.com/Jathartha" className="bg-highlight text-background px-6 py-3 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all duration-300">
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 