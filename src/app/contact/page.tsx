"use client";

import { useState } from "react";
import { AnimatedCard } from "@/components/ui/cards/AnimatedCard";
import { ContentCard } from "@/components/ui/cards/ContentCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log(formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent! (This is a demo, no actual message was sent)");
  };

  return (
    <section className="m-auto p-4 pb-12 max-w-6xl overflow-hidden 2xl:overflow-visible">
      <div className="gap-5 grid grid-cols-2 grid-rows-2 mx-auto max-w-2xl">
        {/* Email Card */}
        <AnimatedCard
          className="col-span-full lg:col-span-1 lg:row-span-1 lg:row-start-1"
          animationDelay={100}
        >
          <ContentCard centered>
            <Button variant="outline" className="text-md">
              post@tim-gatzke.de
            </Button>
          </ContentCard>
        </AnimatedCard>

        {/* Github Card */}
        <AnimatedCard
          className="col-span-full lg:col-span-1 lg:row-span-1 lg:row-start-2"
          href="https://github.com/Tfc538"
          externalLink={true}
          animationDelay={200}
        >
          <ContentCard centered>
            <h1 className="font-bold text-3xl">Github Profile</h1>
            <p className="text-center text-gray-400 text-xl">Find more of my repositories</p>
          </ContentCard>
        </AnimatedCard>

        {/* LinkedIn Card */}
        <AnimatedCard
          className="col-span-full lg:col-span-1 lg:row-span-2 lg:row-start-1"
          href="https://www.linkedin.com/in/tim-gatzke-5170a8306/"
          externalLink={true}
          animationDelay={300}
        >
          <ContentCard centered>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
          </ContentCard>
        </AnimatedCard>

        {/* Contact Form */}
        <div className="col-span-full mt-8 mobile-animation" style={{ animationDelay: "400ms" }}>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <h2 className="font-bold text-3xl">Contact with me</h2>
            <p className="text-gray-400 text-lg">You can also get in touch with me through this form below.</p>

            <div className="group flex flex-col w-full">
              <div className="relative w-full inline-flex shadow-sm px-3 bg-default-100 min-h-unit-10 rounded-medium flex-col items-start justify-center gap-0 h-14 py-2">
                <label className="block font-medium text-foreground-600 text-tiny">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-none bg-transparent p-0 text-foreground"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="group flex flex-col w-full">
              <div className="relative w-full inline-flex shadow-sm px-3 bg-default-100 min-h-unit-10 rounded-medium flex-col items-start justify-center gap-0 h-14 py-2">
                <label className="block font-medium text-foreground-600 text-tiny">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-none bg-transparent p-0 text-foreground"
                  placeholder="john.doe@example.com"
                />
              </div>
            </div>

            <div className="group flex flex-col w-full">
              <div className="relative w-full inline-flex shadow-sm px-3 bg-default-100 min-h-unit-10 rounded-medium flex-col items-start justify-center gap-0 !h-auto py-2">
                <label className="block font-medium text-foreground-600 text-tiny">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border-none bg-transparent p-0 min-h-[100px] text-foreground"
                  placeholder="Enter your message here"
                />
              </div>
            </div>

            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
