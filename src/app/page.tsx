import Image from "next/image";
import Link from "next/link";
import { AnimatedCard } from "@/components/ui/cards/AnimatedCard";
import { ContentCard } from "@/components/ui/cards/ContentCard";
import { TechnologyTags } from "@/components/ui/TechnologyTag";

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
              Hey! My Name is Tim Gatzke, I am a Full Stack Developer and I am currently a
              student in Germany. I am passionate about creating software solutions and I am
              always looking for new challenges. If you have a project that you would like to
              work on, feel free to contact me.
            </div>
          </ContentCard>
        </AnimatedCard>

        {/* Profile Section */}
        <AnimatedCard
          className="col-span-full lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-2"
          animationDelay={200}
        >
          <ContentCard centered={true}>
            <Link href="https://github.com/Tfc538" target="_blank">
              <h1 className="font-bold text-4xl text-blue-500">Tim Gatzke</h1>
            </Link>
          </ContentCard>
        </AnimatedCard>

        {/* Student & Full Stack Developer Card */}
        <AnimatedCard
          className="col-span-full lg:col-span-1 lg:col-start-1 row-start-2 lg:row-start-2 row-end-3 bg-blue-900"
          animationDelay={300}
        >
          <ContentCard centered={true}>
            <h2 className="font-bold text-2xl text-center lg:text-3xl">
              <span>Stundent &amp; </span>
              <span> Full Stack Developer</span>
            </h2>
          </ContentCard>
        </AnimatedCard>

        {/* Quote Card */}
        <AnimatedCard
          className="lg:flex flex-col hidden col-span-2 lg:col-span-1 lg:col-start-3 lg:row-span-1 lg:row-start-3 bg-blue-900"
          animationDelay={400}
        >
          <ContentCard centered={true}>
            <div className="font-bold text-3xl text-center">
              "The only way to do great work is to love what you do."
            </div>
          </ContentCard>
        </AnimatedCard>

        {/* Technologies Section */}
        <AnimatedCard
          className="col-span-full lg:col-span-1 lg:col-start-1 lg:row-span-2 lg:row-start-3"
          animationDelay={500}
        >
          <ContentCard>
            <h2 className="font-bold text-3xl">Technologies I have worked with</h2>
            <div className="flex flex-wrap justify-center lg:justify-center gap-x-10 gap-y-6">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                <div className="flex justify-center">
                  <Image src="https://ext.same-assets.com/4047013576/3783633550.svg" alt="JavaScript" width={40} height={40} />
                </div>
                <div className="flex justify-center">
                  <Image src="https://ext.same-assets.com/4047013576/2563901416.svg" alt="TypeScript" width={40} height={40} />
                </div>
                <div className="flex justify-center">
                  <Image src="https://ext.same-assets.com/4047013576/548389142.svg" alt="Vue" width={40} height={40} />
                </div>
                <div className="flex justify-center">
                  <Image src="https://ext.same-assets.com/4047013576/260646423.svg" alt="React" width={40} height={40} />
                </div>
                <div className="flex justify-center">
                  <Image src="https://ext.same-assets.com/4047013576/4061061103.svg" alt="Tailwind" width={40} height={40} />
                </div>
                <div className="flex justify-center">
                  <Image src="https://ext.same-assets.com/4047013576/2320907649.svg" alt="Node.js" width={40} height={40} />
                </div>
                <div className="flex justify-center">
                  <Image src="https://ext.same-assets.com/4047013576/1998606599.svg" alt="Next.js" width={40} height={40} />
                </div>
                <div className="flex justify-center">
                  <Image src="https://ext.same-assets.com/4047013576/1367661487.svg" alt="MongoDB" width={40} height={40} />
                </div>
                <div className="flex justify-center">
                  <Image src="https://ext.same-assets.com/4047013576/2838098675.svg" alt="Express" width={40} height={40} />
                </div>
                <div className="flex justify-center">
                  <Image src="https://ext.same-assets.com/4047013576/2018733539.svg" alt="MySQL" width={40} height={40} />
                </div>
                <div className="flex justify-center">
                  <Image src="https://ext.same-assets.com/4047013576/2067545548.svg" alt="GraphQL" width={40} height={40} />
                </div>
                <div className="flex justify-center">
                  <Image src="https://ext.same-assets.com/4047013576/4252861238.svg" alt="Docker" width={40} height={40} />
                </div>
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
            <h2 className="font-bold text-3xl">Education</h2>
            <div className="flex flex-col lg:flex-col gap-2">
              <div>
                <h3 className="inline text-xl">High School</h3>
                <span className="text-gray-400 text-sm"> (2019 - Today)</span>
                <p className="text-gray-400 text-lg">
                  I am currently attending the 10th class of a Gemeinschaftsschule in Germany.
                </p>
              </div>
              <div>
                <h3 className="inline text-xl">CS50's Introduction to Computer Science</h3>
                <span className="text-gray-400 text-sm"> (2021)</span>
                <p className="text-gray-400 text-lg">
                  I took part in the online course CS50's Introduction to Computer Science by Harvard University.
                </p>
              </div>
              <div>
                <h3 className="inline text-xl">CS50's Introduction to Game Development</h3>
                <span className="text-gray-400 text-sm"> (2022)</span>
                <p className="text-gray-400 text-lg">
                  I took part in the online course CS50's Introduction to Game Development by Harvard University
                  in order to learn more about game development with Lua and C#.
                </p>
              </div>
            </div>
          </ContentCard>
        </AnimatedCard>
      </div>
    </main>
  );
}
