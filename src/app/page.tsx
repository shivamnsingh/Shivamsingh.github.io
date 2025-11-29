import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] p-6">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .card {
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
          padding: 28px;
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .card:nth-child(1) { animation-delay: 0.1s; }
        .card:nth-child(2) { animation-delay: 0.2s; }
        .card:nth-child(3) { animation-delay: 0.3s; }
        .card:nth-child(4) { animation-delay: 0.4s; }
        .card:nth-child(5) { animation-delay: 0.5s; }
        .card:nth-child(6) { animation-delay: 0.6s; }
        
        .tech-icon {
          transition: transform 0.3s ease;
        }
        
        .tech-icon:hover {
          transform: translateY(-4px);
        }
      `}</style>

      <main className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Column 1 - Left */}
          <div className="flex flex-col gap-6">
            
            {/* Who Am I Card */}
            <div className="card" style={{
              background: 'linear-gradient(145deg, #0E2745, #0A0A0F)',
              height: '200px'
            }}>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Who am I?</h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Hi! I'm Shivam, a Data Analyst based in India. I'm passionate about turning data into 
                insights using tools like Python, SQL, and Power BI. Always eager to learn and 
                collaborate—let's connect if you have an exciting project!
              </p>
            </div>

            {/* Student & Entry-Level Data Analyst */}
            <div className="card flex items-center justify-center" style={{
              background: 'linear-gradient(145deg, #004bff, #5a88ff)',
              height: '200px'
            }}>
              <div className="text-center">
                <div className="w-12 h-1 bg-white mx-auto mb-4"></div>
                <h2 className="text-xl font-bold text-white leading-tight">
                  Student &<br />Entry-Level Data<br />Analyst
                </h2>
              </div>
            </div>

            {/* Technologies */}
            <div className="card" style={{
              background: 'linear-gradient(145deg, #0E2745, #0A0A0F)',
              height: '440px'
            }}>
              <div className="w-12 h-1 bg-blue-400 mb-4"></div>
              <h2 className="text-xl font-bold text-white mb-6">
                Technologies I have<br />worked with
              </h2>
              
              <div className="grid grid-cols-3 gap-4">
                {/* Python */}
                <div className="tech-icon flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5">
                  <svg viewBox="0 0 128 128" className="w-10 h-10">
                    <defs>
                      <linearGradient id="python-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#5A9FD4"/>
                        <stop offset="100%" stopColor="#306998"/>
                      </linearGradient>
                    </defs>
                    <path fill="url(#python-gradient)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
                    <path fill="#FFD43B" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
                  </svg>
                  <span className="text-xs text-white/60">Python</span>
                </div>

                {/* R */}
                <div className="tech-icon flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5">
                  <svg viewBox="0 0 128 128" className="w-10 h-10">
                    <path fill="#2266BA" d="M49.846 80.371c-6.035 0-10.932-4.897-10.932-10.932s4.897-10.932 10.932-10.932 10.932 4.897 10.932 10.932-4.897 10.932-10.932 10.932zm0-19.863c-4.925 0-8.932 4.007-8.932 8.932s4.007 8.932 8.932 8.932 8.932-4.007 8.932-8.932-4.007-8.932-8.932-8.932z"/>
                    <path fill="#2266BA" d="M88.858 79.348H78.82c-.552 0-1-.448-1-1s.448-1 1-1h10.038c5.854 0 10.615-4.762 10.615-10.615V49.848c0-5.854-4.762-10.615-10.615-10.615H65.936c-.552 0-1-.448-1-1s.448-1 1-1h22.922C95.765 37.233 101.473 42.94 101.473 49.848v16.885c0 6.907-5.707 12.615-12.615 12.615z"/>
                  </svg>
                  <span className="text-xs text-white/60">R</span>
                </div>

                {/* MySQL */}
                <div className="tech-icon flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5">
                  <svg viewBox="0 0 128 128" className="w-10 h-10">
                    <path fill="#00618A" d="M2.001 90.458h4.108v-16.223l6.36 14.143c.75 1.712 1.5 2.383 3.32 2.383s2.57-.671 3.32-2.383l6.36-14.143v16.223h4.108v-16.196c0-1.041-.688-2.383-2.607-2.383-1.477 0-2.832.79-3.582 2.383l-6.91 15.214-6.91-15.214c-.75-1.593-2.104-2.383-3.582-2.383-1.92 0-2.607 1.342-2.607 2.383v16.196z"/>
                    <path fill="#E48E00" d="M56.798 90.458h4.108v-23.948h-4.108z"/>
                    <path fill="#00618A" d="M78.754 90.458h13.538c1.607 0 2.607-.79 2.607-2.383 0-1.592-1-2.382-2.607-2.382h-13.538c-1.607 0-2.607.79-2.607 2.382 0 1.593 1 2.383 2.607 2.383z"/>
                  </svg>
                  <span className="text-xs text-white/60">MySQL</span>
                </div>

                {/* Excel */}
                <div className="tech-icon flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5">
                  <svg viewBox="0 0 128 128" className="w-10 h-10">
                    <path fill="#217346" d="M113.5 100.5h-99c-3 0-5.5-2.5-5.5-5.5V33c0-3 2.5-5.5 5.5-5.5h99c3 0 5.5 2.5 5.5 5.5v62c0 3-2.5 5.5-5.5 5.5z"/>
                    <path fill="#FFF" d="M37.3 53.2L49.8 64 37.3 74.8h15.5L62 64l-9.2-10.8z"/>
                  </svg>
                  <span className="text-xs text-white/60">Excel</span>
                </div>

                {/* Power BI */}
                <div className="tech-icon flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5">
                  <svg viewBox="0 0 128 128" className="w-10 h-10">
                    <rect x="30" y="50" width="15" height="58" fill="#F2C811"/>
                    <rect x="56.5" y="30" width="15" height="78" fill="#F2C811"/>
                    <rect x="83" y="65" width="15" height="43" fill="#F2C811"/>
                  </svg>
                  <span className="text-xs text-white/60">Power BI</span>
                </div>

                {/* Tableau */}
                <div className="tech-icon flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5">
                  <svg viewBox="0 0 128 128" className="w-10 h-10">
                    <path fill="#E8762D" d="M64 23.5L50 37.5v8h28v-8L64 23.5zM50 82.5L64 96.5l14-14v-8H50v8z"/>
                    <path fill="#E8762D" d="M23.5 64L37.5 50h8v28h-8L23.5 64zM96.5 64L82.5 78h-8V50h8l14 14z"/>
                  </svg>
                  <span className="text-xs text-white/60">Tableau</span>
                </div>

                {/* Pandas */}
                <div className="tech-icon flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5">
                  <svg viewBox="0 0 128 128" className="w-10 h-10">
                    <path fill="#150458" d="M53 28h8v35h-8zM67 28h8v35h-8z"/>
                    <path fill="#150458" d="M53 70h8v30h-8zM67 70h8v30h-8z"/>
                  </svg>
                  <span className="text-xs text-white/60">Pandas</span>
                </div>

                {/* NumPy */}
                <div className="tech-icon flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5">
                  <svg viewBox="0 0 128 128" className="w-10 h-10">
                    <path fill="#4DABCF" d="M50 35L35 50v28l15 15 15-15V50L50 35z"/>
                    <path fill="#4DABCF" d="M78 35L93 50v28L78 93 63 78V50l15-15z"/>
                  </svg>
                  <span className="text-xs text-white/60">NumPy</span>
                </div>

                {/* Scikit-Learn */}
                <div className="tech-icon flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5">
                  <svg viewBox="0 0 128 128" className="w-10 h-10">
                    <path fill="#F7931E" d="M64 16L20 40v48l44 24 44-24V40L64 16z"/>
                    <path fill="#3499CD" d="M64 16v96l44-24V40L64 16z"/>
                  </svg>
                  <span className="text-xs text-white/60">Scikit</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Middle */}
          <div className="flex flex-col gap-6">
            
            {/* Name Card */}
            <div className="card flex items-center justify-center" style={{
              background: 'linear-gradient(160deg, #0047FF, #0066FF, #0099FF)',
              height: '406px'
            }}>
              <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-2">
                  Shivam Singh
                </h1>
                <p className="text-white/70 text-sm">@shivamnsingh</p>
              </div>
            </div>

            {/* Education Card */}
            <div className="card" style={{
              background: 'linear-gradient(160deg, #0D1A2F, #0B0B12)',
              height: '440px'
            }}>
              <h2 className="text-2xl font-bold text-blue-400 mb-6">Education</h2>
              
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Bachelor of Science in Data Science
                    <span className="text-sm text-white/50 ml-2">(2024 - Present)</span>
                  </h3>
                  <p className="text-white/70 text-sm mt-2 leading-relaxed">
                    Currently pursuing at Mumbai University. Focusing on statistical analysis, machine learning, and 
                    data visualization techniques.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Fundamentals of Data Analytics & Programming
                    <span className="text-sm text-white/50 ml-2">(2021)</span>
                  </h3>
                  <p className="text-white/70 text-sm mt-2 leading-relaxed">
                    Larsen & Toubro certification. Gained expertise in Python, R, and SQL with practical experience 
                    using NumPy and Pandas for comprehensive data analysis.
                  </p>
                </div>

                
              </div>
            </div>
          </div>

          {/* Column 3 - Right */}
          <div className="flex flex-col gap-6">
            
            {/* Image Card */}
            <div className="card flex items-center justify-center overflow-hidden p-0" style={{
              background: 'linear-gradient(145deg, #0E2745, #0A0A0F)',
              height: '406px'
            }}>
              <img 
                src="https://i.pinimg.com/736x/17/84/a3/1784a3bcec0b777f62ff50d8fb778e52.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quote Card */}
            <div className="card flex items-center justify-center" style={{
              background: 'linear-gradient(145deg, #4C1D95, #9333EA)',
              height: '200px'
            }}>
              <div className="text-center px-4">
                <svg className="w-10 h-10 text-purple-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-lg font-bold text-white leading-snug">
                  Your most valuable asset isn't your data, it's your ability to analyze it.
                </p>
              </div>
            </div>

            {/* Empty space filler to match left column height */}
            <div style={{ height: '240px' }}></div>
          </div>

        </div>
      </main>
    </div>
  );
}