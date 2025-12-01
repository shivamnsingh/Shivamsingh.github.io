import Image from "next/image";
import Link from "next/link";
import { AnimatedCard } from "@/components/ui/cards/AnimatedCard";
import { ContentCard } from "@/components/ui/cards/ContentCard";
import { TechnologyTags } from "@/components/ui/TechnologyTag";

export default function Home() {
  return (
    <main className="m-auto p-4 pb-12 max-w-6xl overflow-hidden 2xl:overflow-visible">
      <div className="gap-5 grid grid-cols-4 lg:grid-cols-3 auto-rows-min">
        {/* Profile Image Section */}
        <AnimatedCard
          className="col-span-2 lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:row-start-1 flex justify-center items-center overflow-hidden bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm"
          animationDelay={100}
        >   
          <div className="relative w-full h-full max-w-md max-h-md rounded-lg overflow-hidden border-2 border-blue-500/30 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 p-4">
            <Image
              src="/shivam.jpg"
              alt="Shivam Singh"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </AnimatedCard>

        {/* Who Am I Section */}
        <AnimatedCard
          className="col-span-2 lg:col-span-2 lg:row-start-1 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50"
          animationDelay={100}
        >
          <ContentCard>
            <div className="space-y-4">
              <h2 className="font-bold text-4xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Who am I?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Hi! I'm Shivam, a Data Analyst based in India.
                I'm passionate about turning data into insights using tools like Python, SQL, and Power BI.
                Always eager to learn and collaborate—let's connect if you have an exciting project!
              </p>
            </div>
          </ContentCard>
        </AnimatedCard>

        {/* Profile Name Section */}
        <AnimatedCard
          className="col-span-full lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-2 bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 transition-all duration-300"
          animationDelay={200}
        >
          <ContentCard centered={true}>
            <Link href="https://github.com/shivamnsingh" target="_blank" className="group">
              <h1 className="font-bold text-4xl text-white group-hover:scale-105 transition-transform duration-300">
                Shivam Singh
              </h1>
              <p className="text-blue-100 mt-2 text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                @shivamnsingh
              </p>
            </Link>
          </ContentCard>
        </AnimatedCard>

        {/* Student & Entry-Level Card */}
        <AnimatedCard
          className="col-span-full lg:col-span-1 lg:col-start-1 row-start-2 lg:row-start-2 row-end-3 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 border border-blue-700/30"
          animationDelay={300}
        >
          <ContentCard centered={true}>
            <div className="space-y-2">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-4"></div>
              <h2 className="font-bold text-2xl text-center lg:text-3xl text-white leading-tight">
                <span className="block">Student &amp;</span>
                <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Entry-Level Data Analyst
                </span>
              </h2>
            </div>
          </ContentCard>
        </AnimatedCard>

        {/* Quote Card */}
        <AnimatedCard
          className="lg:flex flex-col hidden col-span-2 lg:col-span-1 lg:col-start-3 lg:row-span-1 lg:row-start-3 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 border border-purple-700/30 relative overflow-hidden"
          animationDelay={400}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
          <ContentCard centered={true}>
            <div className="relative z-10 space-y-4">
              <svg className="w-12 h-12 text-blue-400/30 mx-auto" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z"/>
              </svg>
              <p className="font-semibold text-2xl text-center text-white leading-relaxed">
                Your most valuable asset isn't your data; it's your ability to analyze it.
              </p>
            </div>
          </ContentCard>
        </AnimatedCard>

        {/* Technologies Section */}
        <AnimatedCard
          className="col-span-full lg:col-span-1 lg:col-start-1 lg:row-span-2 lg:row-start-3 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50"
          animationDelay={500}
        >
          <ContentCard>
            <div className="space-y-6">
              <div>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-4"></div>
                <h2 className="font-bold text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Technologies I have worked with
                </h2>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

  {/* Python */}
  <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-yellow-500/50 hover:scale-105 transition-all duration-300 group">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="40" />
    <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors font-medium">Python</span>
  </div>

  {/* R */}
  <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 group">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" width="40" />
    <span className="text-xs text-gray-400 group-hover:text-blue-400 transition-colors font-medium">R</span>
  </div>

  {/* SQL */}
  <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-green-500/50 hover:scale-105 transition-all duration-300 group">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="40" />
    <span className="text-xs text-gray-400 group-hover:text-green-400 transition-colors font-medium">SQL</span>
  </div>

  {/* MySQL */}
  <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-orange-500/50 hover:scale-105 transition-all duration-300 group">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="40" />
    <span className="text-xs text-gray-400 group-hover:text-orange-400 transition-colors font-medium">MySQL</span>
  </div>

  {/* Excel */}
  <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-green-300/50 hover:scale-105 transition-all duration-300 group">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/excel/excel-original.svg" width="40" />
    <span className="text-xs text-gray-400 group-hover:text-green-300 transition-colors font-medium">Excel</span>
  </div>

  {/* Power BI */}
  <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-yellow-400/50 hover:scale-105 transition-all duration-300 group">
    <img src="https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg" width="40" />
    <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors font-medium">Power BI</span>
  </div>

  {/* Pandas */}
  <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 group">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" width="40" />
    <span className="text-xs text-gray-400 group-hover:text-purple-400 transition-colors font-medium">Pandas</span>
  </div>

  {/* NumPy */}
  <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-blue-300/50 hover:scale-105 transition-all duration-300 group">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" width="40" />
    <span className="text-xs text-gray-400 group-hover:text-blue-300 transition-colors font-medium">NumPy</span>
  </div>

  {/* Matplotlib */}
  <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-indigo-300/50 hover:scale-105 transition-all duration-300 group">
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" width="40" />
    <span className="text-xs text-gray-400 group-hover:text-indigo-300 transition-colors font-medium">Matplotlib</span>
  </div>

  {/* Scikit-Learn */}
  <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-orange-300/50 hover:scale-105 transition-all duration-300 group">
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" width="40" />
    <span className="text-xs text-gray-400 group-hover:text-orange-300 transition-colors font-medium">Scikit-Learn</span>
  </div>

  {/* TensorFlow */}
  <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-orange-500/50 hover:scale-105 transition-all duration-300 group">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" width="40" />
    <span className="text-xs text-gray-400 group-hover:text-orange-500 transition-colors font-medium">TensorFlow</span>
  </div>

  {/* Machine Learning */}
  <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-teal-300/50 hover:scale-105 transition-all duration-300 group">
    <img src="https://cdn-icons-png.flaticon.com/512/2721/2721290.png" width="40" />
    <span className="text-xs text-gray-400 group-hover:text-teal-300 transition-colors font-medium">Machine Learning</span>
  </div>

  {/* Deep Learning */}
  <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-pink-400/50 hover:scale-105 transition-all duration-300 group">
    <img src="https://cdn-icons-png.flaticon.com/512/2942/2942924.png" width="40" />
    <span className="text-xs text-gray-400 group-hover:text-pink-400 transition-colors font-medium">Deep Learning</span>
  </div>

  {/* Git */}
  <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-red-400/50 hover:scale-105 transition-all duration-300 group">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="40" />
    <span className="text-xs text-gray-400 group-hover:text-red-400 transition-colors font-medium">Git</span>
  </div>

  {/* GitHub */}
  <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-gray-300/50 hover:scale-105 transition-all duration-300 group">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="40" />
    <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors font-medium">GitHub</span>
  </div>

</div>

            </div>
          </ContentCard>
        </AnimatedCard>

        {/* Education Section */}
        <AnimatedCard
          className="col-span-full lg:col-span-2 lg:col-start-2 lg:row-span-1 lg:row-start-4 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 relative overflow-hidden"
          animationDelay={600}
        >
          <div className="absolute right-5 top-5 opacity-5">
            <Image
              src="https://ext.same-assets.com/4047013576/3301625649.svg"
              alt="Education"
              width={200}
              height={200}
              className="w-48 h-48"
            />
          </div>
          <ContentCard>
            <div className="space-y-6 relative z-10">
              <div>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-4"></div>
                <h2 className="font-bold text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Education
                </h2>
              </div>
              
              <div className="space-y-6">
                {/* Degree */}
                <div className="group pl-4 border-l-2 border-blue-500/30 hover:border-blue-500 transition-all duration-300">
                  <div className="flex flex-wrap items-baseline gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      Bachelor of Science in Data Science
                    </h3>
                    <span className="text-sm text-gray-500 font-medium">(2024 - Present)</span>
                  </div>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Currently pursuing at Mumbai University. Focusing on statistical analysis, machine learning, and data visualization techniques.
                  </p>
                </div>
                
                {/* L&T Course */}
                <div className="group pl-4 border-l-2 border-purple-500/30 hover:border-purple-500 transition-all duration-300">
                  <div className="flex flex-wrap items-baseline gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      Fundamentals of Data Analytics & Programming
                    </h3>
                    <span className="text-sm text-gray-500 font-medium">(2021)</span>
                  </div>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Larsen & Toubro certification. Gained expertise in Python, R, and SQL with practical experience using NumPy and Pandas for comprehensive data analysis.
                  </p>
                </div>
                
                {/* Additional Course/Certification Placeholder */}
                <div className="group pl-4 border-l-2 border-indigo-500/30 hover:border-indigo-500 transition-all duration-300">
                  <div className="flex flex-wrap items-baseline gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                      Additional Certifications
                    </h3>
                    <span className="text-sm text-gray-500 font-medium">(Ongoing)</span>
                  </div>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Continuously expanding skills through online courses and hands-on projects in advanced analytics, machine learning, and data engineering.
                  </p>
                </div>
              </div>
            </div>
          </ContentCard>
        </AnimatedCard>
      </div>
    </main>
  );
}