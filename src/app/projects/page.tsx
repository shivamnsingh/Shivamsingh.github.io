import Image from "next/image";
import { AnimatedCard } from "@/components/ui/cards/AnimatedCard";
import { ContentCard } from "@/components/ui/cards/ContentCard";
import { TechnologyTags } from "@/components/ui/TechnologyTag";

export default function Projects() {
  return (
    <section className="p-4 pb-12 max-w-6xl m-auto overflow-hidden 2xl:overflow-visible">
      <div className="flex flex-col gap-20">
        {/* Wild-Kamera.com Project */}
        <div className="gap-5 grid grid-cols-4 grid-rows-8 pb-4 overflow-hidden">
          <div className="flex items-center lg:hidden col-span-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-2 opacity-0 font-bold text-3xl text-white mobile-animation titleSection">
            Wild-Kamera.com
          </div>

          <AnimatedCard
            className="col-span-full lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3 lg:min-h-[250px]"
            animationDelay={100}
          >
            <ContentCard className="justify-between gap-4 text-gray-400 text-lg">
              <div className="lg:flex hidden col-span-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-2 font-bold text-3xl text-white">
                Wild-Kamera.com
              </div>

              <div>
                Wild-Kamera.com is a Shopware Website that sells Wildlife Cameras and Accessories for Hunters and Photographers.
                The website is built using Shopware 6, a popular e-commerce platform in Germany. The website is built using
                PHP, JavaScript, CSS, and MySQL.
              </div>

              <TechnologyTags
                technologies={["PHP", "Shopware", "JavaScript", "CSS", "MySQL"]}
              />
            </ContentCard>
          </AnimatedCard>

          <AnimatedCard
            className="col-span-full lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3 overflow-hidden"
            href="https://wild-kamera.com"
            externalLink={true}
            animationDelay={200}
          >
            <Image
              src="https://ext.same-assets.com/560495084/3080714771.png"
              alt="Wild-Kamera.com"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
          </AnimatedCard>

          <AnimatedCard
            className="col-span-full lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:col-end-5"
            href="https://wild-kamera.com"
            externalLink={true}
            animationDelay={300}
          >
            <ContentCard centered>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
            </ContentCard>
          </AnimatedCard>
        </div>

        {/* Zu Freundlich RP Project */}
        <div className="gap-5 grid grid-cols-4 grid-rows-8 pb-4 overflow-hidden">
          <div className="flex items-center lg:hidden col-span-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-2 opacity-0 font-bold text-3xl text-white mobile-animation titleSection">
            Zu Freundlich RP
          </div>

          <AnimatedCard
            className="col-span-full lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3 lg:min-h-[250px]"
            animationDelay={100}
          >
            <ContentCard className="justify-between gap-4 text-gray-400 text-lg">
              <div className="lg:flex hidden col-span-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-2 font-bold text-3xl text-white">
                Zu Freundlich RP
              </div>

              <div>
                Zu Freundlich RP is a FiveM Roleplay Server based in Germany. The server was built using LUA,
                ESX Framework, and MySQL. The server has a custom economy system, custom vehicles,
                custom scripts, and custom jobs.
              </div>

              <TechnologyTags
                technologies={["LUA", "ESX Framework", "MySQL"]}
              />
            </ContentCard>
          </AnimatedCard>

          <AnimatedCard
            className="col-span-full lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3 overflow-hidden"
            animationDelay={200}
          >
            <Image
              src="https://ext.same-assets.com/560495084/4268685473.jpeg"
              alt="Zu Freundlich RP"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
          </AnimatedCard>

          <AnimatedCard
            className="col-span-full lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:col-end-5"
            animationDelay={300}
          >
            <ContentCard centered>
              <h2 className="flex items-center gap-2">
                <span className="font-bold text-gray-400">Coming Soon!</span>
              </h2>
            </ContentCard>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
