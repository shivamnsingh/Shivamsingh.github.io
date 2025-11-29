import Image from "next/image";
import { AnimatedCard } from "@/components/ui/cards/AnimatedCard";
import { ContentCard } from "@/components/ui/cards/ContentCard";
import { TechnologyTags } from "@/components/ui/TechnologyTag";

export default function Projects() {
  return (
    <section className="p-4 pb-12 max-w-6xl m-auto overflow-hidden 2xl:overflow-visible">
      <div className="flex flex-col gap-20">
        {/* Crop Recommendation System */}
        <div className="gap-5 grid grid-cols-4 grid-rows-8 pb-4 overflow-hidden">
          <div className="flex items-center lg:hidden col-span-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-2 opacity-0 font-bold text-3xl text-white mobile-animation titleSection">
            Crop Recommendation System
          </div>

          <AnimatedCard
            className="col-span-full lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3 lg:min-h-[250px]"
            animationDelay={100}
          >
            <ContentCard className="justify-between gap-4 text-gray-400 text-lg">
              <div className="lg:flex hidden col-span-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-2 font-bold text-3xl text-white">
                Crop Recommendation System
              </div>

              <div>
                A machine learning model that recommends optimal crops based on soil properties, climate conditions, 
                and environmental factors. Uses supervised learning algorithms to analyze NPK ratios, pH levels, 
                temperature, humidity, and rainfall to predict the most suitable crop for farming.
              </div>

              <TechnologyTags
                technologies={["Python", "Scikit-Learn", "Pandas", "NumPy", "Jupyter"]}
              />
            </ContentCard>
          </AnimatedCard>

          <AnimatedCard
            className="col-span-full lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3 overflow-hidden bg-gradient-to-br from-green-900/20 to-blue-900/20"
            animationDelay={200}
          >
            <div className="flex items-center justify-center w-full h-full p-8">
              <svg className="w-32 h-32 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2v20M2 12h20M12 2c-3 3-5 6-5 10s2 7 5 10c3-3 5-6 5-10s-2-7-5-10z"/>
                <path d="M12 12c-1.5-1.5-3-2.5-3-5s1.5-3.5 3-5c1.5 1.5 3 2.5 3 5s-1.5 3.5-3 5z"/>
              </svg>
            </div>
          </AnimatedCard>

          <AnimatedCard
            className="col-span-full lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:col-end-5"
            animationDelay={300}
          >
            <ContentCard centered>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                <span className="text-gray-400">View on GitHub</span>
              </div>
            </ContentCard>
          </AnimatedCard>
        </div>

        {/* AQI Forecasting Project */}
        <div className="gap-5 grid grid-cols-4 grid-rows-8 pb-4 overflow-hidden">
          <div className="flex items-center lg:hidden col-span-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-2 opacity-0 font-bold text-3xl text-white mobile-animation titleSection">
            AQI Forecasting Model
          </div>

          <AnimatedCard
            className="col-span-full lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3 lg:min-h-[250px]"
            animationDelay={100}
          >
            <ContentCard className="justify-between gap-4 text-gray-400 text-lg">
              <div className="lg:flex hidden col-span-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-2 font-bold text-3xl text-white">
                AQI Forecasting Model
              </div>

              <div>
                Predictive model for Air Quality Index (AQI) forecasting using time series analysis and machine learning. 
                Analyzes historical pollution data, meteorological factors, and seasonal patterns to predict future 
                air quality levels with high accuracy for environmental monitoring.
              </div>

              <TechnologyTags
                technologies={["Python", "TensorFlow", "Pandas", "Matplotlib", "Time Series"]}
              />
            </ContentCard>
          </AnimatedCard>

          <AnimatedCard
            className="col-span-full lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3 overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20"
            animationDelay={200}
          >
            <div className="flex items-center justify-center w-full h-full p-8">
              <svg className="w-32 h-32 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
                <path d="M16 8A6 6 0 1 0 8 16"/>
              </svg>
            </div>
          </AnimatedCard>

          <AnimatedCard
            className="col-span-full lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:col-end-5"
            animationDelay={300}
          >
            <ContentCard centered>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                <span className="text-gray-400">View on GitHub</span>
              </div>
            </ContentCard>
          </AnimatedCard>
        </div>

        {/* Pregnancy Risk Prediction */}
        <div className="gap-5 grid grid-cols-4 grid-rows-8 pb-4 overflow-hidden">
          <div className="flex items-center lg:hidden col-span-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-2 opacity-0 font-bold text-3xl text-white mobile-animation titleSection">
            Pregnancy Risk Prediction
          </div>

          <AnimatedCard
            className="col-span-full lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3 lg:min-h-[250px]"
            animationDelay={100}
          >
            <ContentCard className="justify-between gap-4 text-gray-400 text-lg">
              <div className="lg:flex hidden col-span-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-2 font-bold text-3xl text-white">
                Pregnancy Risk Prediction
              </div>

              <div>
                Healthcare-focused ML model that predicts pregnancy risk levels using maternal health indicators. 
                Analyzes age, blood pressure, blood sugar, body temperature, and heart rate to classify risk categories, 
                helping healthcare providers identify high-risk pregnancies early for better patient care.
              </div>

              <TechnologyTags
                technologies={["Python", "Scikit-Learn", "Classification", "Healthcare ML"]}
              />
            </ContentCard>
          </AnimatedCard>

          <AnimatedCard
            className="col-span-full lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3 overflow-hidden bg-gradient-to-br from-red-900/20 to-orange-900/20"
            animationDelay={200}
          >
            <div className="flex items-center justify-center w-full h-full p-8">
              <svg className="w-32 h-32 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                <path d="M12 5.67V21.23"/>
              </svg>
            </div>
          </AnimatedCard>

          <AnimatedCard
            className="col-span-full lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:col-end-5"
            animationDelay={300}
          >
            <ContentCard centered>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                <span className="text-gray-400">View on GitHub</span>
              </div>
            </ContentCard>
          </AnimatedCard>
        </div>

        {/* Criminal Intent Prediction */}
        <div className="gap-5 grid grid-cols-4 grid-rows-8 pb-4 overflow-hidden">
          <div className="flex items-center lg:hidden col-span-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-2 opacity-0 font-bold text-3xl text-white mobile-animation titleSection">
            Criminal Intent Prediction
          </div>

          <AnimatedCard
            className="col-span-full lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3 lg:min-h-[250px]"
            animationDelay={100}
          >
            <ContentCard className="justify-between gap-4 text-gray-400 text-lg">
              <div className="lg:flex hidden col-span-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-2 font-bold text-3xl text-white">
                Criminal Intent Prediction
              </div>

              <div>
                Advanced ML model for predicting criminal intent patterns using behavioral and demographic data. 
                Employs classification algorithms to analyze historical crime data and identify risk factors, 
                supporting law enforcement in crime prevention and resource allocation strategies.
              </div>

              <TechnologyTags
                technologies={["Python", "Machine Learning", "Data Analysis", "Predictive Modeling"]}
              />
            </ContentCard>
          </AnimatedCard>

          <AnimatedCard
            className="col-span-full lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3 overflow-hidden bg-gradient-to-br from-blue-900/20 to-indigo-900/20"
            animationDelay={200}
          >
            <div className="flex items-center justify-center w-full h-full p-8">
              <svg className="w-32 h-32 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
          </AnimatedCard>

          <AnimatedCard
            className="col-span-full lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:col-end-5"
            animationDelay={300}
          >
            <ContentCard centered>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                <span className="text-gray-400">View on GitHub</span>
              </div>
            </ContentCard>
          </AnimatedCard>
        </div>

        {/* Walmart Sales Analysis */}
        <div className="gap-5 grid grid-cols-4 grid-rows-8 pb-4 overflow-hidden">
          <div className="flex items-center lg:hidden col-span-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-2 opacity-0 font-bold text-3xl text-white mobile-animation titleSection">
            Walmart Sales Analysis
          </div>

          <AnimatedCard
            className="col-span-full lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3 lg:min-h-[250px]"
            animationDelay={100}
          >
            <ContentCard className="justify-between gap-4 text-gray-400 text-lg">
              <div className="lg:flex hidden col-span-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-2 font-bold text-3xl text-white">
                Walmart Sales Analysis
              </div>

              <div>
                Comprehensive SQL and Python-based analysis of Walmart sales data. Performed exploratory data analysis, 
                identified sales trends, seasonal patterns, and customer behavior insights. Created visualizations and 
                dashboards to present findings for business intelligence and decision-making.
              </div>

              <TechnologyTags
                technologies={["Python", "SQL", "MySQL", "Data Visualization", "Pandas"]}
              />
            </ContentCard>
          </AnimatedCard>

          <AnimatedCard
            className="col-span-full lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3 overflow-hidden bg-gradient-to-br from-yellow-900/20 to-green-900/20"
            animationDelay={200}
          >
            <div className="flex items-center justify-center w-full h-full p-8">
              <svg className="w-32 h-32 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="12" y1="20" x2="12" y2="10"/>
                <line x1="18" y1="20" x2="18" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="16"/>
              </svg>
            </div>
          </AnimatedCard>

          <AnimatedCard
            className="col-span-full lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:col-end-5"
            animationDelay={300}
          >
            <ContentCard centered>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                <span className="text-gray-400">View on GitHub</span>
              </div>
            </ContentCard>
          </AnimatedCard>
        </div>

        {/* Graph Algorithms Project */}
        <div className="gap-5 grid grid-cols-4 grid-rows-8 pb-4 overflow-hidden">
          <div className="flex items-center lg:hidden col-span-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-2 opacity-0 font-bold text-3xl text-white mobile-animation titleSection">
            Graph Algorithms: Dijkstra & Modified TSP
          </div>

          <AnimatedCard
            className="col-span-full lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3 lg:min-h-[250px]"
            animationDelay={100}
          >
            <ContentCard className="justify-between gap-4 text-gray-400 text-lg">
              <div className="lg:flex hidden col-span-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-2 font-bold text-3xl text-white">
                Graph Algorithms: Dijkstra & Modified TSP
              </div>

              <div>
                Implementation of classic graph algorithms including Dijkstra's shortest path and a modified Travelling 
                Salesman Problem (TSP) solver. Explores optimization techniques, algorithmic complexity, and real-world 
                applications in routing and logistics problems.
              </div>

              <TechnologyTags
                technologies={["Python", "Algorithms", "Graph Theory", "Optimization"]}
              />
            </ContentCard>
          </AnimatedCard>

          <AnimatedCard
            className="col-span-full lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3 overflow-hidden bg-gradient-to-br from-cyan-900/20 to-teal-900/20"
            animationDelay={200}
          >
            <div className="flex items-center justify-center w-full h-full p-8">
              <svg className="w-32 h-32 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="5" r="3"/>
                <circle cx="6" cy="19" r="3"/>
                <circle cx="18" cy="19" r="3"/>
                <line x1="12" y1="8" x2="6" y2="16"/>
                <line x1="12" y1="8" x2="18" y2="16"/>
                <line x1="6" y1="19" x2="18" y2="19"/>
              </svg>
            </div>
          </AnimatedCard>

          <AnimatedCard
            className="col-span-full lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:col-end-5"
            animationDelay={300}
          >
            <ContentCard centered>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                <span className="text-gray-400">View on GitHub</span>
              </div>
            </ContentCard>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}