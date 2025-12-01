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
              
              <div className="grid grid-cols-3 gap-6 mt-6">
                {/* Python */}
                <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 128 128" className="group-hover:scale-110 transition-transform">
                    <linearGradient id="python-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
                      <stop offset="0" stopColor="#5A9FD4"/>
                      <stop offset="1" stopColor="#306998"/>
                    </linearGradient>
                    <linearGradient id="python-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
                      <stop offset="0" stopColor="#FFD43B"/>
                      <stop offset="1" stopColor="#FFE873"/>
                    </linearGradient>
                    <path fill="url(#python-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"/>
                    <path fill="url(#python-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"/>
                  </svg>
                  <span className="text-xs text-gray-400 group-hover:text-blue-400 transition-colors font-medium">Python</span>
                </div>
                
                {/* R */}
                <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 128 128" className="group-hover:scale-110 transition-transform">
                    <path fill="#198CE7" d="M63.951.001C28.685.001 0 28.686 0 63.951c0 35.265 28.685 63.95 63.951 63.95 35.264 0 63.949-28.685 63.949-63.95S99.215.001 63.951.001zm0 9.41c30.16 0 54.54 24.379 54.54 54.54 0 30.16-24.38 54.54-54.54 54.54-30.161 0-54.54-24.38-54.54-54.54 0-30.161 24.379-54.54 54.54-54.54z"/>
                    <path fill="#198CE7" d="M63.951 36.574c-12.935 0-19.813.418-24.926 1.191-16.694 2.522-19.642 7.918-19.642 20.048v34.5h23.913v-5.45h20.655c14.126 0 27.384-10.244 27.384-25.283s-13.258-25.006-27.384-25.006zm-16.327 9.058h18.303c10.099 0 17.493 6.870 17.493 15.994 0 9.124-7.395 16.053-17.493 16.053H47.624V45.632z"/>
                  </svg>
                  <span className="text-xs text-gray-400 group-hover:text-blue-400 transition-colors font-medium">R</span>
                </div>
                
                {/* MySQL */}
                <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 128 128" className="group-hover:scale-110 transition-transform">
                    <path fill="#00618A" d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.78 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z"/>
                  </svg>
                  <span className="text-xs text-gray-400 group-hover:text-blue-400 transition-colors font-medium">MySQL</span>
                </div>
                
                {/* Excel */}
                <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-green-500/50 hover:scale-105 transition-all duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" className="group-hover:scale-110 transition-transform">
                    <path fill="#169154" d="M29 6H15.744C14.781 6 14 6.781 14 7.744v7.259h15V6z"/>
                    <path fill="#18482a" d="M14 33.054v7.202C14 41.219 14.781 42 15.743 42H29v-8.946H14z"/>
                    <path fill="#0c8045" d="M14 15.003h15v9.002H14z"/>
                    <path fill="#17472a" d="M14 24.005h15v9.05H14z"/>
                    <path fill="#29c27f" d="M42.256 6H29v9.003h15V7.744C44 6.781 43.219 6 42.256 6z"/>
                    <path fill="#27663f" d="M29 33.054V42h13.257c.962 0 1.743-.781 1.743-1.743v-7.202H29z"/>
                    <path fill="#19ac65" d="M29 15.003h15v9.002H29z"/>
                    <path fill="#129652" d="M29 24.005h15v9.05H29z"/>
                    <path fill="#fff" d="m22.64 34 4.581-8.063L23 17.995h2.898l2.833 5.803 2.755-5.803H34l-4.197 7.748L34 34h-2.961l-2.755-5.834L25.562 34z"/>
                  </svg>
                  <span className="text-xs text-gray-400 group-hover:text-green-400 transition-colors font-medium">Excel</span>
                </div>
                
                {/* Power BI */}
                <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-yellow-500/50 hover:scale-105 transition-all duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100" className="group-hover:scale-110 transition-transform">
                    <path d="M100 12.5c0-6.893-5.607-12.5-12.5-12.5H50v100h37.5c6.893 0 12.5-5.607 12.5-12.5V12.5z" fill="#e9b624"/>
                    <path d="M0 87.5C0 94.393 5.607 100 12.5 100H50V50H0v37.5z" fill="#a086cd"/>
                    <path d="M0 12.5C0 5.607 5.607 0 12.5 0H50v50H0V12.5z" fill="#f2c811"/>
                  </svg>
                  <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors font-medium">Power BI</span>
                </div>
                
                {/* Tableau */}
                <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 60 60" className="group-hover:scale-110 transition-transform">
                    <path d="M30.252 2.098v5.707h-5.707V2.098h5.707zm-8.56 8.56v5.707h-5.707v-5.707h5.707zm17.121 0v5.707h-5.707v-5.707h5.707zm-8.56 8.56v5.707h-5.707v-5.707h5.707zm-17.122 0v5.707H7.422v-5.707h5.707zm34.244 0v5.707h-5.707v-5.707h5.707zM21.69 27.78v5.707h-5.707V27.78h5.707zm17.122 0v5.707h-5.707V27.78h5.707zm-8.56 8.56v5.707h-5.707v-5.707h5.707zm-17.122 0v5.707H7.421v-5.707h5.707zm34.244 0v5.707h-5.707v-5.707h5.707zM21.69 44.901v5.707h-5.707v-5.707h5.707zm17.122 0v5.707h-5.707v-5.707h5.707zm-8.56 8.56v5.707h-5.707v-5.707h5.707z" fill="#11568c"/>
                  </svg>
                  <span className="text-xs text-gray-400 group-hover:text-blue-400 transition-colors font-medium">Tableau</span>
                </div>
                
                {/* Pandas */}
                <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-purple-500/50 hover:scale-105 transition-all duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100" className="group-hover:scale-110 transition-transform">
                    <path d="M14.938 22.5h12.5v55h-12.5v-55zm57.5 0h12.5v55h-12.5v-55z" fill="#130754"/>
                    <path d="M67.688 0h12.5v100h-12.5V0zM19.688 0h12.5v100h-12.5V0z" fill="#ffca00"/>
                    <path d="M44.938 22.5h12.5v55h-12.5v-55z" fill="#e70488"/>
                  </svg>
                  <span className="text-xs text-gray-400 group-hover:text-purple-400 transition-colors font-medium">Pandas</span>
                </div>
                
                {/* NumPy */}
                <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-cyan-500/50 hover:scale-105 transition-all duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 500 500" className="group-hover:scale-110 transition-transform">
                    <path d="M249.7,379.1c-1.4,0-2.4-0.5-4.2-1.5L110.8,287V147.7c0-3,1.5-5.8,4-7.4l134.8-77.9c3.5-2,7.9-2,11.4,0l133.5,77.9 c3.4,2,5.5,5.8,5.5,9.8v139.3c0,4-2.1,7.8-5.5,9.9L259.7,377.7c-1.5,0.8-2.6,1.3-4,1.4C253,379.6,252.5,379.6,249.7,379.1 L249.7,379.1z" fill="#4eabe5"/>
                    <path d="M379.4,148.6h-98.3c-2.6,0-4.7,2-4.7,4.5v219.6c0,2.5-2.1,4.5-4.7,4.5h-43.7c-2.6,0-4.7-2-4.7-4.5V153.1 c0-2.5-2.1-4.5-4.7-4.5h-98.3c-2.6,0-4.7-2-4.7-4.5v-39.2c0-2.5,2.1-4.5,4.7-4.5h259.2c2.6,0,4.7,2,4.7,4.5V144 C384.1,146.6,382,148.6,379.4,148.6L379.4,148.6z" fill="#0f568a"/>
                  </svg>
                  <span className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors font-medium">NumPy</span>
                </div>
                
                {/* SciPy */}
                <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100" className="group-hover:scale-110 transition-transform">
                    <path d="M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50c27.6,0,50-22.4,50-50S77.6,0,50,0L50,0z M25.9,23.8  c0.4-0.7,1.1-1.3,1.8-1.7c2.6-1.5,6-1.7,8.3,0.1c2,1.5,2.4,4.2,1.9,6.5c-0.8,3.1-3.5,5.1-6.4,6.3c-2.3,0.9-4.9,1.1-7.4,0.6  c-1.6-0.4-3.1-1.5-3.4-3.1C20,29.7,22,25.3,25.9,23.8L25.9,23.8z M80.2,79.1c-1.6,3.9-4.1,8.8-8.8,9c-4,0.2-7.2-3.3-8.7-6.7  c-2.6-5.6-3.6-11.8-4.9-17.8c-1.4-6.6-2.8-13.2-4.3-19.8c-0.5-1.9-1.1-3.9-1.7-5.8c-1.8,1-3.6,2.1-5.3,3.2  c-1.1,0.7-2.3,1.5-2.7,2.9c-0.4,1.1-2,1.4-2.8,0.5c-1-0.8-1.5-2-2.1-3.1c-1.1-1.9-2.2-3.8-2.6-6c-0.1-1,0-2.5,1.1-2.7  c2.3-0.5,4.2,1.2,6.1,2.2c3.6,2,7.2,3.9,10.7,5.9c0.7-2.6,1.2-5.3,2-7.9c0.6-1.6,1.7-3.3,3.3-4c1.1-0.5,2.5-0.1,3.2,0.9  c0.8,1,1.2,2.3,1.6,3.5c2.2,7.2,3.1,14.8,5.1,22.1c1.4,5.6,3.1,11.2,4.5,16.8c0.7,2.5,1.3,5,2.1,7.5c0.5,1.7,2.3,2.6,3.8,3.3  C79.6,76.9,80.8,77.4,80.2,79.1L80.2,79.1z" fill="#4d7ab6"/>
                  </svg>
                  <span className="text-xs text-gray-400 group-hover:text-blue-400 transition-colors font-medium">SciPy</span>
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