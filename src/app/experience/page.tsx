export default function Experience() {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 sm:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-highlight to-foreground bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontWeight: '700' }}>
            Experience
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My professional journey and internships that have shaped my development career
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Main timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-highlight via-highlight/50 to-transparent"></div>
          
          {/* Internship 1 */}
          <div className="relative flex items-start gap-8 mb-12">
            <div className="absolute left-6 top-4 w-4 h-4 bg-highlight rounded-full shadow-lg shadow-highlight/50"></div>
            <div className="ml-16 flex-1">
              <div className="bg-gradient-to-r from-secondary to-accent rounded-2xl p-8 shadow-xl border border-highlight/20 hover:border-highlight/40 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-highlight mb-2">Software Development Intern</h3>
                    <h4 className="text-xl font-semibold text-foreground">Silicon TechLab Pvt. Ltd.</h4>
                  </div>
                  <span className="text-sm text-gray-400 bg-accent px-4 py-2 rounded-full border border-highlight/20">
                    Nov 2023 - Dec 2023
                  </span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                AI Chatbot for Academic Assistance<br/>
                Researched Generative AI tools and contributed to building a student-focused chatbot to support academic queries. Collaborated with cross-functional teams in designing and deploying the solution, gaining hands-on experience in real-world AI applications for education.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {['Python', 'Generative AI', 'MongoDB', 'Git','NLP'].map(tech => (
                    <span key={tech} className="bg-accent text-highlight px-3 py-1 rounded-full text-sm font-medium border border-highlight/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="https://drive.google.com/file/d/1KAi72wsCEEdn3Y6SuNqHmG8Wj-w_TWTd/view?usp=sharing" className="text-highlight hover:text-foreground transition-colors underline">View Certificate</a>
                  <a href="https://www.silicontechlab.com/" className="text-highlight hover:text-foreground transition-colors underline">Company Website</a>
                </div>
              </div>
            </div>
          </div>

          {/* Internship 2 */}
          <div className="relative flex items-start gap-8 mb-12">
            <div className="absolute left-6 top-4 w-4 h-4 bg-highlight rounded-full shadow-lg shadow-highlight/50"></div>
            <div className="ml-16 flex-1">
              <div className="bg-gradient-to-r from-secondary to-accent rounded-2xl p-8 shadow-xl border border-highlight/20 hover:border-highlight/40 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-highlight mb-2">Project Intern</h3>
                    <h4 className="text-xl font-semibold text-foreground">National Informatics Centre</h4>
                  </div>
                  <span className="text-sm text-gray-400 bg-accent px-4 py-2 rounded-full border border-highlight/20">
                    Aug 2023 - Oct 2023
                  </span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                Big Data Analytics for E-Governance<br/>
                Developed a data-driven project analyzing government datasets using Python and Machine Learning. Extracted key insights to support policy-making and explored large-scale public sector data to uncover trends for informed governance decisions.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {['Python', 'Data Analytics', 'Data Visualization(Seaborn)', 'EDA','Machine Learning'].map(tech => (
                    <span key={tech} className="bg-accent text-highlight px-3 py-1 rounded-full text-sm font-medium border border-highlight/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="https://drive.google.com/file/d/1Y9Wll1Y9dqPZsnpHTFVRstm6_SpQf0FB/view?usp=sharing" className="text-highlight hover:text-foreground transition-colors underline">View Certificate</a>
                  <a href="https://www.nic.gov.in/" className="text-highlight hover:text-foreground transition-colors underline">Company Website</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 