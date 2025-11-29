import Image from "next/image";
import Link from "next/link";
import { AnimatedCard } from "@/components/ui/cards/AnimatedCard";
import { ContentCard } from "@/components/ui/cards/ContentCard";

export default function Home() {
  return (
    <main className="m-auto p-4 pb-12 max-w-6xl overflow-hidden 2xl:overflow-visible">
      <div className="gap-5 grid grid-cols-4 lg:grid-cols-3 grid-rows-8">
        {/* Who Am I Section */}
        <AnimatedCard
          className="col-span-full lg:col-span-2 lg:row-span-1 lg:row-start-1"
          animationDelay={100}
        >
          <ContentCard>
            <div className="font-bold text-3xl">Who am I?</div>
            <div className="text-gray-400 text-lg">
              Hey! My name is Shivam Singh, I am a Data Science student from India, 
              passionate about transforming data into meaningful insights. Currently pursuing 
              my BSc in Data Science at BK Birla College, I'm working on exciting projects 
              involving Machine Learning, Predictive Modeling, and Data Analytics. I'm eager 
              to transition into a Data Analyst role and eventually become a Data Scientist. 
              If you have a project or opportunity, feel free to reach out!
            </div>
          </ContentCard>
        </AnimatedCard>

        {/* Profile Section */}
        <AnimatedCard
          className="col-span-full lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-2"
          animationDelay={200}
        >
          <ContentCard centered={true}>
            <Link href="https://github.com/shivamnsingh" target="_blank">
              <h1 className="font-bold text-4xl text-blue-500 hover:text-blue-400 transition-colors">
                Shivam Singh
              </h1>
            </Link>
          </ContentCard>
        </AnimatedCard>

        {/* Student & Data Scientist Card */}
        <AnimatedCard
          className="col-span-full lg:col-span-1 lg:col-start-1 row-start-2 lg:row-start-2 row-end-3 bg-blue-900"
          animationDelay={300}
        >
          <ContentCard centered={true}>
            <h2 className="font-bold text-2xl text-center lg:text-3xl">
              <span>Data Science Student &amp; </span>
              <span>Aspiring Data Scientist</span>
            </h2>
          </ContentCard>
        </AnimatedCard>

        {/* Quote Card */}
        <AnimatedCard
          className="lg:flex flex-col hidden col-span-2 lg:col-span-1 lg:col-start-3 lg:row-span-1 lg:row-start-3 bg-blue-900"
          animationDelay={400}
        >
          <ContentCard centered={true}>
            <div className="font-bold text-2xl text-center">
              "Data is the story. I just help make sense of it."
            </div>
          </ContentCard>
        </AnimatedCard>

        {/* Technologies Section */}
        <AnimatedCard
          className="col-span-full lg:col-span-1 lg:col-start-1 lg:row-span-2 lg:row-start-3"
          animationDelay={500}
        >
          <ContentCard>
            <h2 className="font-bold text-3xl mb-4">Technologies & Tools</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Python */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg viewBox="0 0 128 128" className="w-full h-full">
                    <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
                      <stop offset="0" stopColor="#5A9FD4"/>
                      <stop offset="1" stopColor="#306998"/>
                    </linearGradient>
                    <path fill="url(#python-original-a)" d="M49.33 62.5c-4.1 0-7.92 1.72-10.65 4.46-2.73 2.73-4.46 6.54-4.46 10.65v22.35h29.65V94.5H34.22c-4.1 0-7.92-1.72-10.65-4.46C20.84 87.3 19.11 83.5 19.11 79.4V56.14c0-4.1 1.72-7.92 4.46-10.65C26.3 42.76 30.11 41.03 34.22 41.03h44.68c4.1 0 7.92-1.72 10.65-4.46 2.73-2.73 4.46-6.54 4.46-10.65V3.57c0-4.1-1.72-7.92-4.46-10.65C86.82-9.81 83.01-11.54 78.9-11.54H34.22c-4.1 0-7.92 1.72-10.65 4.46-2.73 2.73-4.46 6.54-4.46 10.65v22.35h29.65v5.46H19.11V3.57c0-9.24 7.52-16.76 16.76-16.76h44.68c9.24 0 16.76 7.52 16.76 16.76v22.35c0 9.24-7.52 16.76-16.76 16.76H34.87v5.46h44.68c9.24 0 16.76 7.52 16.76 16.76v23.85c0 9.24-7.52 16.76-16.76 16.76H34.87z"/>
                    <path fill="#FFD43B" d="M78.9 62.5c4.1 0 7.92 1.72 10.65 4.46 2.73 2.73 4.46 6.54 4.46 10.65v22.35H64.36V94.5h29.65c4.1 0 7.92-1.72 10.65-4.46 2.73-2.73 4.46-6.54 4.46-10.65V56.14c0-4.1-1.72-7.92-4.46-10.65-2.73-2.73-6.54-4.46-10.65-4.46H34.22c-4.1 0-7.92-1.72-10.65-4.46-2.73-2.73-4.46-6.54-4.46-10.65V3.57c0-4.1 1.72-7.92 4.46-10.65C26.3-9.81 30.11-11.54 34.22-11.54h44.68c4.1 0 7.92 1.72 10.65 4.46 2.73 2.73 4.46 6.54 4.46 10.65v22.35H64.36v5.46h29.65V3.57c0-9.24-7.52-16.76-16.76-16.76H34.22C24.98-13.19 17.46-5.67 17.46 3.57v22.35c0 9.24 7.52 16.76 16.76 16.76h44.68v5.46H34.22c-9.24 0-16.76 7.52-16.76 16.76v23.85c0 9.24 7.52 16.76 16.76 16.76h44.68z"/>
                  </svg>
                </div>
                <span className="text-xs text-gray-400">Python</span>
              </div>

              {/* R */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg viewBox="0 0 128 128" className="w-full h-full">
                    <path fill="#2266BA" d="M48.7 97.7c-6.2 0-11.5-5.3-11.5-11.5s5.3-11.5 11.5-11.5 11.5 5.3 11.5 11.5-5.3 11.5-11.5 11.5zm0-19.8c-4.6 0-8.3 3.7-8.3 8.3s3.7 8.3 8.3 8.3 8.3-3.7 8.3-8.3-3.7-8.3-8.3-8.3z"/>
                    <path fill="#2266BA" d="M101.7 97.7c-6.2 0-11.5-5.3-11.5-11.5s5.3-11.5 11.5-11.5 11.5 5.3 11.5 11.5-5.3 11.5-11.5 11.5zm0-19.8c-4.6 0-8.3 3.7-8.3 8.3s3.7 8.3 8.3 8.3 8.3-3.7 8.3-8.3-3.7-8.3-8.3-8.3z"/>
                    <path fill="#2266BA" d="M89.9 97.7H60.5c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h29.4c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6z"/>
                  </svg>
                </div>
                <span className="text-xs text-gray-400">R</span>
              </div>

              {/* MySQL */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image src="https://ext.same-assets.com/4047013576/2018733539.svg" alt="MySQL" width={48} height={48} />
                </div>
                <span className="text-xs text-gray-400">MySQL</span>
              </div>

              {/* TensorFlow */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg viewBox="0 0 128 128" className="w-full h-full">
                    <path fill="#FF6F00" d="M116 88.5L64 58.2 12 88.5V27.5l52-30.3 52 30.3z"/>
                    <path fill="#FFA800" d="M116 88.5L64 58.2v60.6l52-30.3z"/>
                    <path fill="#FF6F00" d="M12 88.5L64 118.8V58.2L12 88.5z"/>
                  </svg>
                </div>
                <span className="text-xs text-gray-400">TensorFlow</span>
              </div>

              {/* Scikit-Learn */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg viewBox="0 0 128 128" className="w-full h-full">
                    <path fill="#F7931E" d="M64 11L11 39v50l53 28 53-28V39L64 11z"/>
                    <path fill="#3499CD" d="M64 11v106l53-28V39L64 11z"/>
                  </svg>
                </div>
                <span className="text-xs text-gray-400">Scikit-Learn</span>
              </div>

              {/* Power BI */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg viewBox="0 0 128 128" className="w-full h-full">
                    <rect x="20" y="40" width="20" height="68" fill="#F2C811"/>
                    <rect x="54" y="20" width="20" height="88" fill="#F2C811"/>
                    <rect x="88" y="60" width="20" height="48" fill="#F2C811"/>
                  </svg>
                </div>
                <span className="text-xs text-gray-400">Power BI</span>
              </div>

              {/* Excel */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg viewBox="0 0 128 128" className="w-full h-full">
                    <path fill="#217346" d="M118 20H10c-5.5 0-10 4.5-10 10v68c0 5.5 4.5 10 10 10h108c5.5 0 10-4.5 10-10V30c0-5.5-4.5-10-10-10z"/>
                    <path fill="#FFF" d="M74 54l-8 10 8 10H54L46 64l8-10h20z"/>
                  </svg>
                </div>
                <span className="text-xs text-gray-400">Excel</span>
              </div>
            </div>
          </ContentCard>
        </AnimatedCard>

        {/* Education Section */}
        <AnimatedCard
          className="col-span-full lg:col-span-2 lg:col-start-2 lg:row-span-1 lg:row-start-4"
          animationDelay={600}
        >
          <Image
            src="https://ext.same-assets.com/4047013576/3301625649.svg"
            alt="Education"
            width={200}
            height={200}
            className="absolute right-5 top-5 opacity-10"
          />
          <ContentCard>
            <h2 className="font-bold text-3xl mb-3">Education & Certifications</h2>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="inline text-xl font-semibold">BSc Data Science</h3>
                <span className="text-gray-400 text-sm"> (2024 - 2027)</span>
                <p className="text-gray-400 text-base mt-1">
                  BK Birla College of Arts, Science & Commerce, India
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Key areas: Machine Learning, Algorithms, Data Visualization, Hypothesis Testing, Predictive Modelling
                </p>
              </div>

              <div className="border-t border-gray-700 pt-3">
                <h3 className="text-lg font-semibold mb-2">Certifications</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-base">SQL for Data Analysis</p>
                    <span className="text-gray-400 text-sm">Larsen & Toubro</span>
                  </div>
                  <div>
                    <p className="text-base">Programming for Data Analytics</p>
                    <span className="text-gray-400 text-sm">Larsen & Toubro</span>
                  </div>
                </div>
              </div>
            </div>
          </ContentCard>
        </AnimatedCard>
      </div>
    </main>
  );
}