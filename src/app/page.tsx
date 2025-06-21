import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-highlight/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-highlight/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-highlight via-foreground to-highlight bg-clip-text text-transparent">
                Jathartha Das
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 mb-8 leading-relaxed">
              Full-stack developer passionate about creating modern, dynamic, and responsive web experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects" className="bg-highlight text-background px-8 py-4 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all duration-300 transform hover:scale-105">
                View My Work
              </Link>
              <Link href="/contact" className="border border-highlight text-highlight px-8 py-4 rounded-lg font-semibold hover:bg-highlight hover:text-background transition-all duration-300">
                Get In Touch
              </Link>
              <a 
                href="https://drive.google.com/file/d/1DKxVVu8oSyaUNqrxl-dqM2alTs4GtgaC/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-highlight px-8 py-4 rounded-lg font-semibold border border-highlight hover:bg-highlight hover:text-background transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-highlight mb-4">Skills & Technologies</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              I work with modern technologies to build scalable and efficient applications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'React.js', icon: '⚛️' },
              { name: 'Next.js', icon: '▲' },
              { name: 'TypeScript', icon: '📘' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'MongoDB', icon: '🍃' },
              { name: 'Tailwind CSS', icon: '🎨' },
              { name: 'Java', icon: '☕' },
              { name: 'SQL', icon: '🗄️' },
              { name: 'Python', icon: '🐍' },
              { name: 'Data Analytics', icon: '📊' },
              { name: 'Generative AI', icon: '🤖' },
              { name: 'Blockchain', icon: '⛓️' },
            ].map((skill) => (
              <div key={skill.name} className="group bg-gradient-to-br from-secondary to-accent rounded-xl p-6 text-center shadow-lg border border-highlight/20 hover:border-highlight/40 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="font-semibold text-highlight group-hover:text-foreground transition-colors">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Preview Sections */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience Preview */}
            <div className="group">
              <div className="bg-gradient-to-br from-secondary to-accent rounded-2xl p-8 shadow-xl border border-highlight/20 hover:border-highlight/40 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-highlight">Experience</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I&apos;ve gained valuable experience through internships and projects, working with modern technologies and collaborating with cross-functional teams.
                </p>
                <Link href="/experience" className="inline-flex items-center text-highlight hover:text-foreground transition-colors">
                  View Experience
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Projects Preview */}
            <div className="group">
              <div className="bg-gradient-to-br from-secondary to-accent rounded-2xl p-8 shadow-xl border border-highlight/20 hover:border-highlight/40 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-highlight">Projects</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  From e-commerce platforms to blockchain-based conservation systems, I&apos;ve built innovative solutions that solve real-world problems.
                </p>
                <Link href="/projects" className="inline-flex items-center text-highlight hover:text-foreground transition-colors">
                  View Projects
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-secondary to-accent rounded-2xl p-12 shadow-xl border border-highlight/20">
            <h2 className="text-3xl sm:text-4xl font-bold text-highlight mb-6">Let&apos;s Work Together</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <Link href="/contact" className="bg-highlight text-background px-8 py-4 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
